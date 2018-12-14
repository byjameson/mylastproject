const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
director_id: Schema.Types.ObjectId,
title: {
  type: String,
  required: [true, '{PATH} alanı zorunludur'],
  maxlength: [15, '{PATH} alanı {VALUE}, {MAXLENGTH} değerden fazla olamaz!'],
  minlength: [2, '{PATH} alanı {VALUE}, {MINLENGTH} değerden az olamaz!']
},
category: String,
country: Number,
year: Number,
imdb_score:Number,
date: {
  type: Date,
  default: Date.now
}

});

module.exports = mongoose.model('movie', MovieSchema);
