const express = require('express')
const next = require('next')

const app = next({
  dev: process.env.NODE_ENV !== 'production'
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/question', (req, res) => {
      return app.render(req, res, '/question', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, error => {
      if (error) throw error
      console.log('> Ready on http://localhost:3000')
    })
  })
