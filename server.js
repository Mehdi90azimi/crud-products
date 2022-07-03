const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./database/connect');
const proudctRouter = require('./routers/product-routers');
const requstMiddlewares = require('./middlewares/requst-middlewares');


//middle
app.use(requstMiddlewares);


app.use('/api/v1/product', proudctRouter); //http ://ocallhost:8000/api/v1/product/new
app.get('/login' , (req , res) => {
    res.send('bye');
})

app.get('/' , (req , res) => {
    res.send('hello world');
})

const PORT = 8000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT , ()=> {
            console.log(`server is runnig ${PORT}`);
        } )
    } catch (error) {
        console.log(error.message);
    }
} 

start();

