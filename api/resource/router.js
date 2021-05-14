const router = require('express').Router();

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
