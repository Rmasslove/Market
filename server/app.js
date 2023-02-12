const express = require('express')
const { clientSideRouter } = require('./src/routes/clientSideRouter')
const { adminSideRouter } = require('./src/routes/adminSideRouter')

const server = express()
const PORT = 3050

server.use(express.json())
// Роут сайта клиента
server.use('/api/v0.1/products', clientSideRouter)
// Роут админки
server.use('/api/v0.1/admin', adminSideRouter)

server.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
