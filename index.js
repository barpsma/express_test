const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("halo guys")
})
app.get('/user', (req, res) => {
    res.send("halo guys ini endpoint user ya")
})

app.listen(port, () => console.log(`listening port ${port}`))