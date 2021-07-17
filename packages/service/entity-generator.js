require("dotenv").config();

const h = process.env.DATABASE_SERVER;
const d = process.env.DATABASE_NAME;
const u = process.env.DATABASE_USERNAME;
const x = process.env.DATABASE_PASSWORD;

const { exec } = require("child_process");

exec(
	`npx typeorm-model-generator -h ${h} -d ${d} -u ${u} -x ${x} -e mysql -o ./src/database`,
	(error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		exec("npm run prettier:entity", () => {});
	},
);
