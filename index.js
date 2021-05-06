const express = require('express')

const app = express()

app.use(() => {
    console.log('halooo')
    console.log('ka')
})

app.listen(4000)