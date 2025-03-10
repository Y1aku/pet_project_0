const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://root:example@178.237.199.236:27017/testdb?authSource=admin");

run();
async function run() {
	try {
		const user = await User.create({
			name: "Kyle",
			age: 26,
			hobbies: ["Weight Lifting", "Bowling"],
			address: {
				street: "Main St"
			}
		});
		console.log(user);
	} catch (e) {
		console.log(e.message);
	}
};