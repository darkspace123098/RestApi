const express = require("express")
const app = express()

const PORT = 5000

//Routes

app.listen(PORT,() => console.log(`Server started at ${PORT}`))
