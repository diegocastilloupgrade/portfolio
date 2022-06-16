const express = require('express');

const router = express.Router();

const {
  getAllCompanies,
  getCompanyByID,
  createCompany,
} = require('../controllers/companies.controller');

router.get('/', getAllCompanies);
router.get('/:id', getCompanyByID);
router.post('/', createCompany);

module.exports = router;
