// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

export const connectDB = mongoose.connection;
connectDB.on("error", console.error.bind(console, "Connection failed"));
connectDB.once("open", () => {
  console.log("Connected to DB");
});
