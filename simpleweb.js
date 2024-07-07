const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/' || req.url === 'khoa')
        res.end('hê lô from web')
    else
        res.end('cái này khác') 
})

server.listen(8088, 'localhost', () =>{
    console.log('listening to request ==s on port 8088')
})