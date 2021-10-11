const http = require('http');

const routes = require('./routes');

const server = http.createServer((request, response) => {
    console.log(`/Method ${request.method} /Endpoint ${request.url}`);

    const route = routes.find((param) => (
        param.endpoint === request.url && param.method === request.method

    ));

    if (route) {
        
        route.handler(request, response);

    } else {

        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);        

    }

});

server.listen(3000, () => console.log('Servidor em execução, http://localhost:3000'));