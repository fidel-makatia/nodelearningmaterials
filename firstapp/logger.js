var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}   // This function is private to this module

module.exports.log = log;   // Exporting the log function
