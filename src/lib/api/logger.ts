type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface BaseLog {
  level: LogLevel;
  msg: string;
  ts: string;
  [key: string]: unknown;
}

function emit(log: BaseLog) {
  const line = JSON.stringify(log);
  switch (log.level) {
    case 'error':
      console.error(line);
      break;
    case 'warn':
      console.warn(line);
      break;
    case 'info':
      console.info(line);
      break;
    default:
      console.debug(line);
  }
}

function base(level: LogLevel, msg: string, extra?: Record<string, unknown>) {
  emit({ level, msg, ts: new Date().toISOString(), ...(extra || {}) });
}

export const logger = {
  debug: (msg: string, extra?: Record<string, unknown>) => base('debug', msg, extra),
  info: (msg: string, extra?: Record<string, unknown>) => base('info', msg, extra),
  warn: (msg: string, extra?: Record<string, unknown>) => base('warn', msg, extra),
  error: (msg: string, extra?: Record<string, unknown>) => base('error', msg, extra),
};

export type { LogLevel };
