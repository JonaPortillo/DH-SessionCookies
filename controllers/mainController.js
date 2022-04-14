let { validationResult } = require('express-validator')
module.exports = {
    main: (req, res) => {
        res.render("index", {
            session: req.session
        })
    },
    userData: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            req.session.user = req.body;
            if (req.body.recordar) {
                res.cookie('color', req.body.color, { maxAge: 99999999 });
            }
            req.session.color = `style=background-color:${req.body.color};`
            res.redirect("index", {
                userData: req.body,
                session: req.session
            })
        } else {
            res.redirect("index", {
                errors: errors.mapped(),
                session: req.session
            })
            /* res.send(errors.mapped()) */

        }
    },
    user: (req, res) => {
        res.render("user", {
            session: req.session
        })
    },
    olvidar: (req, res) => {
        if (res.cookies.color) {
            res.clearCookie('color')
        }

        req.session.color = undefined;
        res.redirect("index", {
            session: req.session
        })
    },
}