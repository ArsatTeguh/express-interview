import http from 'http'
import app from './index.js'

const port = process.env.PORT || 8080;

const server = http.createServer(app);
server.listen(port, () => console.log('Server running at port' + " " + port))

