const express = require("express");
const cors = require("cors");
// const inventoryRouter = require("./Routers/inventory.router.js")
// const salesRouter = require("./Routers/sale.router.js")
require("./mongodb")

const app = express();
app.use(cors());
app.use(express.json())
// app.use("/inventory", inventoryRouter)
// app.use("/sale", salesRouter)

app.get("/", (req, res) => {
  res.send("Finance Management")
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something Went wrong!!" })
})

app.use((req, res) => {
  res.status(404).json({ error: "Requested API endpoint does not exist" })
})

app.listen(3000, () => {
  console.log("Server started")
})   