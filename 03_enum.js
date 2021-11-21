var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["DEBUG"] = 0] = "DEBUG";
    LoggerLevel[LoggerLevel["INFO"] = 1] = "INFO";
    LoggerLevel[LoggerLevel["WARNING"] = 2] = "WARNING";
    LoggerLevel[LoggerLevel["ERROR"] = 3] = "ERROR";
})(LoggerLevel || (LoggerLevel = {}));
var LOG_LEVEL = LoggerLevel.WARNING;
function log(msg, level) {
    if (level >= LOG_LEVEL) {
        console.log(msg);
    }
}
log('wiadomość 1', LoggerLevel.DEBUG);
log('ERROR', LoggerLevel.ERROR);
