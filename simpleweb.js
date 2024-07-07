const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/' || req.url === '/khoa')
        res.end('hê lô from web')
    else if (req.url === '/api'){
        fs.readFile('./data.json', 'utf-8', (err, data) =>{
            const productData = JSON.parse(data);
            console.log(productData)
        })
        res.end('API');
    }
    else
        res.end('cái này khác')  
    })

server.listen(8088, 'localhost', () =>{
    console.log('listening to request ==s on port 8088')
})