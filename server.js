const express = require("express")// step 1
const app = express() //step 2
const PORT = 1356 //step 5
const cors = require("cors")//step 7
const http = require("http")

app.use(cors())//step 8
app.use(express.static("clientSide"))


let userInfo = {
  "userName": "userName",
  "seasonStatus": "seasonStatus",
  "coachingStatus": "coachingStatus"

}//step 6

app.get("/", (req, res) =>  {
  res.sendFile(__dirname + '/index.html')
})//step 3

app.get("/api/userInfo", (req, res) => {
  res.json(userInfo)
})//step 5

app.listen(PORT, () =>{
  console.log(`Get fit on port ${PORT}`);
})//step 4
