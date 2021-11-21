enum LoggerLevel {
    DEBUG = 0,
    INFO = 1,
    WARNING = 2,
    ERROR = 3,
}

const LOG_LEVEL = LoggerLevel.WARNING;

function log(msg: string, level: LoggerLevel) {
    if(level >= LOG_LEVEL){
        console.log(msg);
    }
    
}

log('wiadomość 1',LoggerLevel.DEBUG);
log('ERROR',LoggerLevel.ERROR);