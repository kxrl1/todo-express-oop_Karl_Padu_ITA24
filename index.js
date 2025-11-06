import express from 'express'

const app = express()

app.get("/json-test", (reg, res) => {
    res.send({ message: "json test ok"})
})

app.listen(3009, () => {
    console.log('Server is running on port 3009') 
})