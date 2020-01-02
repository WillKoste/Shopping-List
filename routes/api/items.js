const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @Route:    GET api/items
// @Desc:     Get all items
// Access:    Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

// @Route:    POST api/items
// @Desc:     Add new items
// Access:    Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

// @Route:    DELETE api/items/:id
// @Desc:     Delete an item
// Access:    Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => err.status(404).json({success: false}));
})


module.exports = router;