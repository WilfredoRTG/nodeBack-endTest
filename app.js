import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.status(200).render("index.ejs")
})

// server configuration
const PORT = 1111;
app.set('port', PORT);
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})