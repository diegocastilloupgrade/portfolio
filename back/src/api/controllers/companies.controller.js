const company = require("../models/company.model")


//Nos traemos los works de la colección works
const getAllCompanies = async (req, res, next) => {
    try {
      const allCompanies = await company.find().populate("works");
      return res.json({
        status: 200,
        message: 'Companies ok',
        Companies: allCompanies,
      });
    } catch (error) {
      return next(error);
    }
  };
  
  //Recuperamos un work por id
  const getCompanyByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const companyByID = await company.findById(id);
      return res.json({
        status: 200,
        message: 'Company OK',
        Company: companyByID,
      });
    } catch (error) {
      return next(error);
    }
  };
  
  //Crear un work entero
  const createCompany = async (req, res, next) => {
    try {
      const newCompany = new company(req.body);
      const createCompany = await newCompany.save();
      return res.json({
        status: 201,
        message: 'Company created',
        Company: company,
      });
    } catch (error) {
        return next(error);
    }
  };
  
  module.exports = {getAllCompanies,getCompanyByID,createCompany}