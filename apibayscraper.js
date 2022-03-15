let axios = require(`axios`);
let { config } = require('./config.js');
let { promptUser, errorMessage } = require(`./libs/util.js`);

// variables
// let url = `https://${config.domain_name}/q.php?q=${`REPLACE ME`}`;
let data;

class Instance {
	constructor(dataString) {
		this.query = `https://${config.domain_name}/q.php?q=${dataString}`;
	}
	async makeRequest() {
		axios
			.get(this.query)
			.then((list) => {
				// print first (and typically most accurate) data object.
				data = list.data[0];
				console.log(data);
			})
			.catch((err) => errorMessage(`Request failed`, err));
	}
}

class Bay {
	constructor() {
		this.video = audio;
		this.video = video;
		this.applications = applications;
		this.games = games;
		this.other = other;
	}
	async getItem() {}
	async query() {}
}

const mainProcess = async () => {
	try {
		// prompt user to enter data name
		let whatData = await promptUser(
			`What data do you wish to search for? `
		);
		// instantiate object
		let initialInstance = new Instance(whatData);
		// make API request
		initialInstance.makeRequest();
	} catch (err) {}
};

mainProcess();
