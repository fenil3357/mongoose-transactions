import mongoose from "mongoose";
import express from 'express'

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/' , (req, res) => {
  res.send(`MongoDB Transactions!!!`)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})