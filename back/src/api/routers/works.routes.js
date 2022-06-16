const express = require('express');

const router = express.Router();

//Hacemos un desctructuring con todas las funciones
const {
  getAllWorks,
  getWorkByID,
  createWork,
} = require('../controllers/works.controller');

router.get('/', getAllWorks);
router.get('/:id', getWorkByID);
router.post('/', createWork);

module.exports = router;
