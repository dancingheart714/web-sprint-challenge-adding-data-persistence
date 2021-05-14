const router = require('express').Router();
const Projects = require('./model');

router.get('/:id', (req, res, next) => {
  Projects.getById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Projects.createProject(req.body);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'something went wrong inside the project router',
    message: err.message,
    stack: err.stack,
  });
});
module.exports = router;
