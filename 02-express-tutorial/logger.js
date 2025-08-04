const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send('Testing') // Либо показывать тут что свое
    next() // либо дальше идти к методам, must be here
}

module.exports = logger