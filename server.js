const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '157.245.59.56',
    user: 'u6402199',
    password: '6402199',
    database: 'u6402199',
    port: 3366
})

var app = express()
app.use(cors())
app.use(express.json())


app.get('/', function (req, res) {
    res.json({
        "status": "ok",
        "message": "Hello World"
    })
})

app.post('/stats', function(req, res) {
    const hum = req.body.hum
    // const datetime = new Date().toISOString();
    //const fullname = req.body.fullname

    console.log(hum)
    connection.query(
      'INSERT INTO node_use (hum) VALUES (?)',
        [hum],
      function(err, results) {
        console.log(results) //แสดงผลที่ console
        res.json(results) //ตอบกลับ request
      }
    )
  })

app.listen(5000, () => {
    console.log('Server is started.')
})
