process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const reading = process.stdin.read();
	if (reading) {
		process.stdout.write(`Your name is: ${reading}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
