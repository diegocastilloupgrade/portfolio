const work = require('../models/works.model');

//Nos traemos los works de la colección works
const getAllWorks = async (req, res, next) => {
  try {
    const allWorks = await work.find();
    return res.json({
      status: 200,
      message: 'Works ok',
      works: allWorks,
    });
  } catch (error) {
    return next(error);
  }
};

//Recuperamos un work por id
const getWorkByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const workByID = await work.findById(id);
    return res.json({
      status: 200,
      message: 'Work OK',
      work: workByID,
    });
  } catch (error) {
    return next(error);
  }
};

//Crear un work entero
const createWork = async (req, res, next) => {
  try {
    const newWork = new work(req.body);
    const createWork = await newWork.save();
    return res.json({
      status: 201,
      message: 'Work created',
      work: work,
    });
  } catch (error) {
      return next(error);
  }
};

module.exports = {getAllWorks,getWorkByID,createWork}