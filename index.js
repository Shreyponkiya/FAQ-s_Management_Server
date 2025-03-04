require('dotenv').config()
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const connect_mongo = require("./connection/user");
const userRouter = require("./routes/user");
const faqCategoryRouter = require("./routes/faqcategory");
const Faqs = require("./routes/faqs")
const usermail = require("./routes/mail")
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/signup_user"

connect_mongo(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(cors());
app.use(body_parser.json());

app.use("/user", userRouter);
app.use("/faqcategory", faqCategoryRouter);
app.use("/faqs", Faqs);
app.use("/mail", usermail);


app.listen(PORT, () => {
  console.log("server run on", PORT);   
});
