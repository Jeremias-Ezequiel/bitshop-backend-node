import express from 'express';
import "dotenv/config";
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/api", (req,res) =>{
    res.send("Hello world");
})

app.listen(PORT, () => console.log(`Server on: http://localhost:${PORT}`));

