const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const worksSchema = new Schema(
  {
    nombre_proyecto: { type: String, required: true },
    descripcion_breve: { type: String, required: true },
    descripcion_larga: { type: String, required: true },
    url: { type: String, required: false },
    date: { type: String, required: false },
    img: { type: String, required: false },
    disciplina: {type: String, required: false},
    tecnologia: {type: String, required: false},
    company: { type: String, required: false },
  },
  { timestamps: true }
);

const work = mongoose.model('works', worksSchema);

module.exports = work;
