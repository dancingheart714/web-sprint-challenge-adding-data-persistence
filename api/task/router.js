const router = require('express').Router();

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
