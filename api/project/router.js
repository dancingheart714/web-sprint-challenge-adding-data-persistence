const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Projects.createNewTask(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'something went wrong inside the project router',
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;
