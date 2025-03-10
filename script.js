const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://root:example@178.237.199.236:27017/testdb?authSource=admin");

run();
async function run() {
	const user = await User.create({name: "Kyle", age: 26});
	user.name = "Sally";
	await user.save();
	console.log(user);
};