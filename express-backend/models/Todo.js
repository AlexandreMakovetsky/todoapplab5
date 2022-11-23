const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: { type: Date, required: false },
  complete: { type: Boolean, required: false },
});

//Export model
module.exports = mongoose.model("Todo", TodoSchema);
