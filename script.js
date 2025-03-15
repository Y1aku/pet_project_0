const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://root:example@178.237.199.236:27017/testdb?authSource=admin");

run();
async function run() {
	try {
		const user = await User.findOne({name: "Kyle"});
		console.log(user);
		await user.save();
		console.log(user);
	} catch (e) {
		console.log(e.message);
	}
};