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
    const values = req.body
    // const datetime = new Date().toISOString();
    // const lux = req.body.lux

    console.log(values)
    connection.query(
      'INSERT INTO node_use (hum,lux) VALUES ?',
        [values],
      function(err, results) {
        console.log(results) //แสดงผลที่ console
        res.json(results) //ตอบกลับ request
      }
    )
  })

app.listen(5000, () => {
    console.log('Server is started.')
})
