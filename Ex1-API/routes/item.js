var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const itemService = require('../services/item');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  const result = await itemService.findById(id);
  res.json(result);

  
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const { name, desc, category} = req.body;
  const result = await itemService.create({ name, desc, category})
  res.json(result);
})

// all items
router.get('/all', async (req, res) => {
  // to do
  const result = await itemService.findAll();
  res.json(result);
  
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await itemService.update(req,res);
  res.json(result);
})

router.post('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await itemService.remove(req,res);
  res.json({result});
})

module.exports = router