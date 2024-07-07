const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('hê lô from web')
})

server.listen(8088, 'localhost', () =>{
    console.log('listening to request ==s on port 8088')
})