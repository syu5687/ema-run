const l=(n,o)=>{const t=JSON.stringify(o,null,2)+`
`,c=new Blob([t],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(c),e.download=n,document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(e.href)},a=n=>n.split(`
`).map(o=>o.trim()).filter(o=>o.length>0),s=n=>(n??[]).join(`
`);export{s as a,l as d,a as l};
