const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Tasks.getById(req.params.id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Tasks.createNewTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});

router.use('*', (req, res, next) => {
  res.json({ api: 'task router up' });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'something went wrong inside the task router',
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;
