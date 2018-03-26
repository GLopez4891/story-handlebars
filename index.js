const express = require('express'),
    exphbs = require('express-handlebars');


const app = express();

app.engine('hbs', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'hbs');



app.get('/beginning.html', (req, res) => {
    res.render('beginning')
})

app.get('/middle.html', (req, res) => {
    res.render('middle')
})

app.get('/end.html', (req, res) => {
    res.render('end')
})

app.get('/p1.html', (req, res) => {
    res.render('p1')
})

app.get('/p2.html', (req, res) => {
    res.render('p2')
})

app.get('/final.html', (req, res) => {
    res.render('final')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})