const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todo: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = mongoose.model("User", UserSchema);
