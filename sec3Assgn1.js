const http=require('http');

const server=http.createServer((req, res)=>{
    const url=req.url;
    if(url==='/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Sec 3 Assign1</title></head>');
        res.write('<body>');
        res.write('<h2>Hi, there</h2><p>Welcome to my users server</p>');
        res.write(
            '<h3>Users Form</h3><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form>'
        );
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Sec 3 Assignment1</title></head>');
        res.write('<body><h3>Users list as follows</h3><ul><li>User1-Sonal</li><li>User2-Shaarav</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/create-user') {
        console.log("coming");
        const body = [];
        req.on('data', chunk => {
        body.push(chunk);
        });
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
})

server.listen(3000);