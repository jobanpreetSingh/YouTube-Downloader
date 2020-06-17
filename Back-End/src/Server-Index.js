const app = require('./Server-App')
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`port is up on --  ${port}`)
})