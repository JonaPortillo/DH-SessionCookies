const { check } = require("express-validator")

module.exports = [
    check("name")
        .notEmpty()
        .withMessage("Campo Requerido"),

    check("color")
        .notEmpty()
        .withMessage("Campo Requerido"),

    check("email")
        .notEmpty()
        .withMessage("Campo Requerido")
        .isEmail()
        .withMessage("Ingrese un email válido"),

    check("age")
        .isNumeric()
        .withMessage("Ingrese sólo números")
]