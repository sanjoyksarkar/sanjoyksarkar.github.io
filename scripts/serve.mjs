import http from 'node:http';
import { readFile } from 'node:fs/promises';
// Explicit public-file allowlist: never serve local originals, build scripts or QA files.
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf','.xml':'application/xml','.txt':'text/plain'};
http.createServer(async(req,res)=>{
 try{
  const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file=path==='/'?'index.html':path.slice(1);
  if(!/^(index\.html|404\.html|styles\.css|script\.js|robots\.txt|sitemap\.xml|projects\/[a-z-]+\.html|assets\/[\w.-]+)$/.test(file)) throw new Error('Not public');
  const body=await readFile(file);
  const ext=file.slice(file.lastIndexOf('.'));
  res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(body);
 }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile('404.html'));}
}).listen(4173,'127.0.0.1',()=>console.log('Portfolio preview: http://127.0.0.1:4173'));
