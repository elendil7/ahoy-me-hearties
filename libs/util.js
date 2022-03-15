module.exports.promptUser = (queryString) => {
	return new Promise(async (resolve) => {
		const { createInterface } = require('readline');
		const rl = createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.stdoutMuted = true;

		rl.query = `${queryString}:`;
		rl.question(rl.query, function (inputString) {
			rl.close();
			resolve(inputString);
		});
	});
};

module.exports.errorMessage = (message, error) => {
	console.error(`**${message}**\nError: ${error}`);
};
