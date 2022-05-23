import express from 'express';
import queryRouter from './server/routes/query.js';
import homeRouter from './server/routes/home.js';
import router404 from './server/routes/404.js';

const app = express();

// server configuration
const PORT = 1001
app.set('port', PORT)
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.json())

// routes
app.use('/', homeRouter)
app.use('/query', queryRouter)
app.use('*', router404)

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})