import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {projects} from '../data/portfolio.mjs';
const files=['index.html','404.html',...projects.map(x=>`projects/${x.slug}.html`)];
let checked=0;
for(const file of files){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${file}: one main heading`);
 assert(html.includes('name="description"'),`${file}: description`);
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(ids.length,new Set(ids).size,`${file}: unique ids`);
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:)/.test(url))continue;
  const [local,hash]=url.split('#');
  const target=local?path.normalize(path.join(path.dirname(file),local)):file;
  await access(target);
  if(hash){const targetHtml=await readFile(target,'utf8');assert(targetHtml.includes(`id="${hash}"`),`${file}: missing anchor ${url}`);}
  checked++;
 }
 assert(!/1995|msikder@|Kushal\.banik@|7\+ years|6\+ years|2025 – Present/.test(html),`${file}: stale or private content`);
}
console.log(`Passed: ${files.length} pages, ${checked} local links/assets, unique headings and anchors, metadata, privacy/stale-copy checks.`);
