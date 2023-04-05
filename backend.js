const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.json('hello')
})
app.get('/mail', (req, res) => {
    var serviceId = process.env.REACT_APP_SERVICE_ID
    var templateId = process.env.REACT_APP_TEMPLATE_ID
    var key = process.env.REACT_APP_PUBLIC_KEY
    res.json({ serviceId, templateId, key })
})

app.listen(8000, () => console.log(`Backend is running on port ${PORT}`))
