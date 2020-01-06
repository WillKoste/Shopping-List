const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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
// Access:    Private
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
// Access:    Private
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})


module.exports = router;