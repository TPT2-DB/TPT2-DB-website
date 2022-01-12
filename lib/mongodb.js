const mongoose = require("mongoose")

async function connectToMongodb() {
	if (mongoose.connections[0].readyState) {
		console.log("Already connected to mongodb")
	} else {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
      		useUnifiedTopology: true,
		})
		console.log("Connected to db");
	}
}

module.exports = connectToMongodb