var errorhandler = function (err, req, res, next) {
    res.status(500).send('Internal server error')
};
module.exports = errorhandler;