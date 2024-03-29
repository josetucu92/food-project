function setHeaders(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // update * when deploy
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
};

export default setHeaders;