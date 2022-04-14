function recordame(req, res, next) {
    if (req.cookies.color) {
        req.session.color = `style=background-color:${req.cookies.color};`;
    }


    next();
}

module.exports = recordame