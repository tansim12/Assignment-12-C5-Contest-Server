
require('dotenv').config();
const http = require('http');
const dbConnect = require('./src/db/dbConnect');
const app = require("./src/app")


const server = http.createServer(app);

const port = process.env.PORT || 5000;
const main = async () => {
	try {
        await dbConnect();
		server.listen(port, async () => {
            console.log(`Assignment 12 is running ${port}`);
		});
	} catch (e) {
		console.log('Database Error');
		console.log(e);
	}
};

main();