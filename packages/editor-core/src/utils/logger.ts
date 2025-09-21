import { Logger, Level } from '@felce/lowcode-utils';

export { Logger };

export function getLogger(config: { level: Level; bizName: string }): Logger {
  return new Logger(config);
}
