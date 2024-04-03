function customLogger(message: string | Error): void {
  process.stderr.write(`${message}\n`);
}

export { customLogger };
