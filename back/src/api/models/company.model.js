const mongoose = require('mongoose');

const schema = mongoose.Schema;

const companySchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true },
    company_logo: { type: String, required: true },
    company_address: { type: String, required: false },
    //creamos un campo llamado works que es un array de works
    works: [{ type: schema.Types.ObjectId, ref: 'works', required: false }],
  },
  { timestamps: true }
);

const console = mongoose.model("companies", companySchema);

module.exports = console;