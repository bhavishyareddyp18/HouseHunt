import { spawn } from 'node:child_process';

const commands = [
  { name: 'backend', command: 'npm', args: ['run', 'dev', '--prefix', 'backend'] },
  { name: 'frontend', command: 'npm', args: ['run', 'dev', '--prefix', 'frontend'] }
];

const children = commands.map(({ name, command, args }) => {
  const child = spawn(command, args, {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: process.platform === 'win32'
  });

  child.stdout.on('data', (data) => process.stdout.write(`[${name}] ${data}`));
  child.stderr.on('data', (data) => process.stderr.write(`[${name}] ${data}`));
  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`[${name}] exited with code ${code}`);
    }
  });

  return child;
});

const stop = () => {
  children.forEach((child) => child.kill('SIGTERM'));
  process.exit();
};

process.on('SIGINT', stop);
process.on('SIGTERM', stop);
