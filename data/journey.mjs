// Narrative summaries are grounded in the existing CV and confirmed case studies.
export const chapters = [
  {
    id: 'foundations', year: '2018', period: '2018—2021', label: 'The foundations',
    title: 'It started with keeping people connected.', org: 'Save the Children',
    roleIndex: 3, icon: 'layers', theme: 'foundation',
    summary: 'My first professional chapter was enterprise ICT. At Save the Children, I supported the networks, applications and devices that colleagues relied on across the Country Office and Field Offices.',
    transition: 'This gave me a practical foundation in infrastructure, troubleshooting and user support—the work behind a dependable day at the office.',
    context: 'Country Office + Field Offices',
    focus: ['LAN / WAN', 'Devices & applications', 'People & support'],
    takeaway: 'Technology is only useful when people can depend on it.',
    project: 'enterprise-it', projectLabel: 'Explore my IT operations work',
    next: 'Next, that foundation moved into the field.'
  },
  {
    id: 'field', year: '2021', period: '2021—2023', label: 'Into the field',
    title: 'Then, responsibility became more hands-on.', org: 'Oxfam Bangladesh',
    roleIndex: 2, icon: 'location', theme: 'field',
    summary: 'At Oxfam, I took on independent field IT responsibilities across Cox’s Bazar and Teknaf. I was a primary IT resource for connectivity, endpoints and user systems, coordinating with wider IT teams and vendors.',
    transition: 'The work expanded from resolving individual issues to helping maintain continuity across field operations, with clear communication and follow-through.',
    context: 'Cox’s Bazar + Teknaf',
    focus: ['Field connectivity', 'Incident resolution', 'Vendor coordination'],
    takeaway: 'The right technical response depends on the context people work in.',
    project: 'enterprise-it', projectLabel: 'See the field operations chapter',
    next: 'From supporting the workplace to improving its information systems.'
  },
  {
    id: 'systems', year: '2023', period: '2023—2025', label: 'A wider view',
    title: 'The focus grew from IT to information.', org: 'Winrock International',
    roleIndex: 1, icon: 'work', theme: 'systems',
    summary: 'At Winrock, I managed day-to-day IT while supporting web-based MIS, dashboards and reporting automation. The role connected technical services with programme requirements, implementation and staff adoption.',
    transition: 'I worked with users and technical service providers to translate operational needs into practical systems, while continuing to support Microsoft 365, office connectivity and devices.',
    context: 'Programme + operational teams',
    focus: ['Requirements', 'MIS & reporting', 'Training & adoption'],
    takeaway: 'A system works best when it fits the way people actually work.',
    project: 'winrock-mis', projectLabel: 'Explore the MIS case study',
    next: 'That systems perspective found a new setting in public health.'
  },
  {
    id: 'health', year: '2025', period: '2025—2026', label: 'Data with purpose',
    title: 'Connecting the dots in public health.', org: 'IEDCR',
    roleIndex: 0, icon: 'database', theme: 'health',
    summary: 'At IEDCR, I worked with the data workflows and application services behind climate-informed disease surveillance. My responsibilities connected PostgreSQL, recurring disease and climate updates, Python components and Linux operations.',
    transition: 'Within the wider EWARS team, I maintained parts of the data-to-dashboard chain, investigated operational problems and contributed to research on early warning and public-health action.',
    context: 'Climate-informed disease surveillance',
    focus: ['Disease + climate data', 'Databases & services', 'Surveillance workflows'],
    takeaway: 'Reliable data and reliable services need to work together.',
    project: 'ewars', projectLabel: 'Explore my digital-health work',
    next: 'Now, I’m building on that experience through AI and data engineering.'
  }
];
