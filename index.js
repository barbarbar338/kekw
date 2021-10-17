const { readFileSync } = require("fs");
const { resolve } = require("path");
const { getInput, setFailed } = require("@actions/core");
const {
	getOctokit,
	context: {
		payload: { issue },
		repo,
	},
} = require("@actions/github");

const kekw = readFileSync(resolve(__dirname, "kekw.txt"), "utf-8");

async function main() {
	if (issue == null) return setFailed("Issue not found");

	const AUTH_TOKEN = getInput("AUTH_TOKEN", {
		required: true,
	});
	const chance = getInput("chance");
	const isLucky = Math.floor(Math.random() * 100) < parseInt(chance);

	if (isLucky) {
		try {
			const {
				rest: {
					issues: { createComment },
				},
			} = getOctokit(AUTH_TOKEN);
			const comment = await createComment({
				...repo,
				issue_number: issue.number,
				body: kekw,
			});
			console.log("Comment created!", comment.url);
		} catch (error) {
			setFailed(error.message);
		}
	}
}

main();
