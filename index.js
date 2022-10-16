const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const messageRoutes = require("./routes/message.routes")

main()
  .then((res) => {
    console.log('Received the following response from MongoDB: ', res)

    app.listen(8080, () => {
      console.log("listening on port 8080")
    })
  })
  .catch((err) => console.log("Couldn't connect to MongoDB. Check the following error: ", err))

async function main() {
  await mongoose.connect("mongodb+srv://MICHVAL:MICHVAL16463@cluster0.tyyycpq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req, res) => {
  res.send('Hello, World!')
})

app.use("/api/messages", messageRoutes)

