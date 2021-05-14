const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Resources.getById(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Resources.createNewResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

router.use('*', (req, res, next) => {
  res.json({ api: 'resources router up' });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'something went wrong inside the resources router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
