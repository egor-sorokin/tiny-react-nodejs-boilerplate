const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const ip_addr = '127.0.0.1';
const port = '8888';

var server = restify.createServer();

server.use(require('restify-plugins').queryParser());

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*']
});

server.pre(cors.preflight);
server.use(cors.actual);

var PATH = '/greetings';
server.get({ path: PATH }, getGreetings);
function getGreetings(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin','*');
    res.send(200, {
        data: [
            {
                id: 1,
                personalGreet: 'Hello, John Doe',
            },
            {
                id: 2,
                personalGreet: 'Hi, Max Doe'
            }
        ]
    });
}

/*
//Get request with a param
server.get({path: PATH + '/greeting/:id'}, getGreetingsDetails);
function getGreetingsDetails(req, res) {
    if (!req.params.id) {
        res.send(400);
    } else {
        // prepare response
        // or do a call to an external api with axios: axios.get().then(resp => {}).catch(error => {});
    }
}*/

server.listen(port, ip_addr, function () {
    console.log('%s listening at %s ', server.name, server.url);
});

