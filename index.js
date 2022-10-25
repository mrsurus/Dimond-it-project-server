const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/category.json')


app.get('/',(req, res) => {
    res.send('ki obosta sobar')
})
app.get('/category',(req, res) => {
    res.send(categories)
})
app.get('/',(req, res) => {
    res.send('ki obosta sobar')
})


app.listen(port, (req, res)=> {
    console.log('port is running  on 5000');
})

module.express = app;