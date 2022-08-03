




const express = require('express')
const { connect } = require('mongoose')

const eventloop = require('././topics/eventLoop')
const mega = require('./topics/mega')
const promises =  require("./topics/promises")
const mongodb   = require('./topics/mongodbAggregation')

const app =  express()
const port = 3000

// app.use("/get",(req,res) => {
    mongodb()


// })

app.listen(port, () => {
console.log(`listen to ${port}` )
})



// promises()
// mega()
// eventloop()


