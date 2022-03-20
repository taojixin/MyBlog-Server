const path = require('path');
const fs = require('fs');
const md = require('markdown-it')();

let tplPath = path.join(__dirname,'tpl.html');
let mdPath = path.join(__dirname,'3.CSS.md');
let targetPath = path.join(__dirname,'demo.html');
 
fs.readFile(mdPath,'utf8',(err,data)=>{
    if(err) return;
    else{
        let result = md.render(data);
        fs.readFile(tplPath,'utf8',(err,tplData)=>{
            if(err) return;
            else{
                tplData = tplData.replace('<%content%>',result);
                fs.writeFile(targetPath,tplData,(err)=>{
                    console.log('转换成功');
                })
            }
        })
    }
})