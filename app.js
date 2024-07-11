const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.get('/process', (req, res) => {
    var English = req.query.txt1;
    var Maths = req.query.txt2;
    var Science = req.query.txt3;
    var DV = req.query.txt4;
    var ML = req.query.txt5;

    var total = parseInt(English) + parseInt(Maths) + parseInt(Science) + parseInt(DV) + parseInt(ML);
    var percentage = (total * 100) / 500
    var ans = "";
    if (c > 30) {
        ans = "style:'border-color':'red'";
    } else {
        ans = "style:'border-color':'blue'";
    }
    var msg = `<table border= '1'> <tr>
    <th>T
    <td>English</td>
    <td> $English</td> `
    res.send("The sum is " + total + "<br/>Percentage is " + percentage)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})