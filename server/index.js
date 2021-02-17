const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const data = require('../data/reports.json')


app.use(express.static(path.join(__dirname, "..", "public")))

app.use((req, res, next) => {
  res.redirect("/")
})

app.get('/getdata', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const dataToSend = JSON.stringify(data)
  return res.send(dataToSend)
})

app.put('/reports/:reportId', (req, res) => {
  const issue = data.elements.find(issue => {issue.reference.referenceId === req.reportId})

})

app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`)
})