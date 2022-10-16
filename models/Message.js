const { Schema, model /*, Types  */} = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  // rubrics: [{ type: Types.ObjectId, ref: "Rubric" }],
  // author: { type: Types, ref: "User" }
})

module.exports = model("Message", schema)