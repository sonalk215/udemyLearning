const http=require('http');

const routes=require('./routes');

//ONE WAY TO DO 
// function rqListener(req, res) {}
// http.createServer(rqListener, )\

const server=http.createServer(routes.handler)
server.listen(3000);