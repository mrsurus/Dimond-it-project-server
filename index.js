const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const categories = require('./data/category.json')


app.get('/',(req, res) => {
    res.send('This is the server side of dimond-it assignment')
})
app.get('/category',(req, res) => {
    res.send(categories)
})
app.get('/category/:id',(req, res) => {
    const id = req.params.id;
    const singleItem = categories.find( p => p.id == id)
    res.send(singleItem)
})

app.listen(port, (req, res)=> {
    console.log('port is running  on 5000');
})

module.express = app;