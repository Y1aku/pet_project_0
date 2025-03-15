const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://root:example@178.237.199.236:27017/testdb?authSource=admin");

run();
async function run() {
	try {
		const user = await User.findOne({name: "Kyle", email: "test@gmail.com"});
		console.log(user);
		console.log(user.nameEmail);
	} catch (e) {
		console.log(e.message);
	}
};