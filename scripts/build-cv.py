"""Build the public two-page CV. Requires reportlab. Read exported portfolio JSON."""
import json
import sys
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

data = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
font_dir = Path('C:/Windows/Fonts')
if (font_dir / 'arial.ttf').exists():
    pdfmetrics.registerFont(TTFont('Body', str(font_dir / 'arial.ttf')))
    pdfmetrics.registerFont(TTFont('BodyBold', str(font_dir / 'arialbd.ttf')))
    pdfmetrics.registerFontFamily('Body', normal='Body', bold='BodyBold')
    font, bold = 'Body', 'BodyBold'
else:
    font, bold = 'Helvetica', 'Helvetica-Bold'
ink, green, muted = map(HexColor, ['#172d34', '#356556', '#56676b'])
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV', fontName=bold, fontSize=26, leading=30, textColor=ink, spaceAfter=7))
styles.add(ParagraphStyle(name='TitleCV', fontName=font, fontSize=12, leading=17, textColor=green, spaceAfter=10))
styles.add(ParagraphStyle(name='BodyCV', fontName=font, fontSize=9.2, leading=13.3, textColor=ink, spaceAfter=6))
styles.add(ParagraphStyle(name='SmallCV', fontName=font, fontSize=8.1, leading=11.5, textColor=muted, spaceAfter=6))
styles.add(ParagraphStyle(name='SectionCV', fontName=bold, fontSize=10, leading=14, textColor=green, spaceBefore=15, spaceAfter=8))
styles.add(ParagraphStyle(name='RoleCV', fontName=bold, fontSize=10, leading=14, textColor=ink, spaceBefore=9, spaceAfter=3))
styles.add(ParagraphStyle(name='BulletCV', fontName=font, fontSize=9.2, leading=13.3, textColor=ink, leftIndent=10, firstLineIndent=-8, spaceAfter=5))
def clean(s):
    return escape(s.replace('–','-').replace('—',' - ').replace('’',"'").replace('→','to'))
def para(s, style='BodyCV'):
    return Paragraph(clean(s), styles[style])
story=[]
p=data['person']
story += [para(p['name'],'NameCV'), para(p['title'],'TitleCV')]
story += [Paragraph('Bangladesh &nbsp; | &nbsp; <link href="mailto:'+p['email']+'">'+p['email']+'</link><br/><link href="'+p['linkedin']+'">linkedin.com/in/sksarkar</link> &nbsp; | &nbsp; <link href="'+p['github']+'">github.com/sanjoysarkar007</link>',styles['SmallCV'])]
story += [para('PROFESSIONAL PROFILE','SectionCV'),para('IT and digital systems professional with around eight years of experience across international development, humanitarian operations and public health. Combines enterprise infrastructure, Microsoft 365 and user support with hands-on PostgreSQL, Linux, MIS and digital health systems. Experienced in translating operational requirements into practical technology and supporting the people who use it.')]
story += [para('PROFESSIONAL EXPERIENCE','SectionCV')]
for e in data['experience']:
    story += [KeepTogether([para(e['org'],'RoleCV'),para(e['role']+' | '+e['dates'],'SmallCV')])]
    # Keep the public CV concise; the portfolio holds the expanded detail.
    for b in e['bullets'][:2]: story.append(para('- '+b,'BulletCV'))
story += [PageBreak(),para('Sanjoy Kumar Sarkar','NameCV'),para('Technical capabilities & continued development','TitleCV')]
story += [para('CORE CAPABILITIES','SectionCV')]
for title,body in [
 ('Strong / hands-on','IT operations, enterprise support, infrastructure, networking, Microsoft 365, PostgreSQL, SQL, Linux, MIS and technical troubleshooting.'),
 ('Working experience','Python, FastAPI, Docker, Nginx, systemd, APIs, data pipelines, Power BI and the Azure / Entra ecosystem. DHIS2 integration concepts.'),
 ('Professional delivery','Requirements gathering, vendor coordination, IT procurement, technical documentation, training, incident triage and cross-functional collaboration.'),
 ('Developing','Cloud engineering, advanced PostgreSQL tuning, DevOps practices, machine learning and AI / data engineering.')]:
    story.append(Paragraph('<b>'+clean(title)+':</b> '+clean(body), styles['BodyCV']))
story += [para('SELECTED PROFESSIONAL WORK','SectionCV')]
for x in data['projects']:
    story.append(Paragraph('<b>'+clean(x['fullTitle'])+'</b><br/>'+clean(x['summary']),styles['BodyCV']))
story += [para('EDUCATION','SectionCV')]
for e in data['education']:
    story.append(Paragraph('<b>'+clean(e['degree'])+'</b><br/>'+clean(e['institution']+' | '+e['period']),styles['BodyCV']))
story += [para('RESEARCH & CONFERENCE CONTRIBUTIONS','SectionCV')]
for r in data['research']:
    story.append(Paragraph('<b>'+r['year']+' | '+clean(r['title'])+'</b><br/>'+clean(r['status']+'. '+r['note']),styles['SmallCV']))
story += [Spacer(1,6),para('References available upon request.','SmallCV')]
def footer(canvas,doc):
    canvas.setStrokeColor(HexColor('#dce3de'));canvas.line(44,36,551,36)
    canvas.setFont(font,8);canvas.setFillColor(muted)
    canvas.drawString(44,23,'Sanjoy Kumar Sarkar | IT & Digital Systems')
    canvas.drawRightString(551,23,str(doc.page))
doc=SimpleDocTemplate('assets/Sanjoy_Sarkar_CV.pdf',pagesize=(595.28,841.89),rightMargin=44,leftMargin=44,topMargin=38,bottomMargin=49,title=p['name']+' | '+p['title'],author=p['name'])
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print('Built assets/Sanjoy_Sarkar_CV.pdf')
