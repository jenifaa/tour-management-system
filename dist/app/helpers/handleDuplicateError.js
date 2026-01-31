"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDuplicateError = void 0;
const handleDuplicateError = (err) => {
    const duplicate = err.message.match(/"([^"]*)"/);
    return {
        statusCode: 400,
        message: `${duplicate[1]} already exist `,
    };
};
exports.handleDuplicateError = handleDuplicateError;
