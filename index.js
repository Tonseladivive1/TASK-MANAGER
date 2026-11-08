const path = require('path')

const filePath = path.join('contents', 'names', 'data.js')
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
const absolute = path.resolve(__dirname, filePath)
console.log(absolute)
const { readFileSync, writeFileSync } = require('fs')

const names = readFileSync('./contents/names/data.js', 'utf8')
console.log(names)

// writeFileSync('./contents/basic-names.js', `Hi ${names}`, { flag: 'a' })
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(readFileSync('./public/index.html'))
    res.end()
  } else {
    res.end('<h1>page not found</h1>')
  }
})
server.listen(5000)
