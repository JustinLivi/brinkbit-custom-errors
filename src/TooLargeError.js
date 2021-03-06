const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

module.exports = customError( 'TooLargeError', {
    code: 413,
    status: http.STATUS_CODES[413],
    message: http.STATUS_CODES[413],
    description: http.STATUS_CODES[413],
    type: types.DEFAULTS[413],
    details: {},
});
