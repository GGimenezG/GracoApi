const Validator = require('validatorjs');

const validator = (body:object , rules:object, customMessages:object, callback: (err: string|null, status: boolean) => any) => {
    const validation = new Validator(body, rules, customMessages);
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;