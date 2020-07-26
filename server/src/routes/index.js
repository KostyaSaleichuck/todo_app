const express = require('express');
const userRouter = require('./user');
const router = express.Router();
const errorHandler = require('../middlewares/errorHandler');
router.use('/user', userRouter);
router.use(errorHandler);

//export default router;
module.exports = router;