import https from "http"
import express from "express"

import mongoose from "mongoose"

const app = express();
const port = 8000;

const mongoURI = "mongodb+srv://sachinsoftware0001_db_user:zIiE4XEDU7DzeQEM@cluster0.k6qdc5c.mongodb.net/Sachindbname"

const connectDb = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("DB connected")
    } catch (error) {
        console.log("DB Not connected", error)
    }
}





app.get("/", (req, res) => {
    res.send("Hello")
})



app.listen(port, () => {
    connectDb();
    console.log(`server is started at ${port}`)
})