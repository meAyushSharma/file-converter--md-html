#!/usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import terminalLink from "terminal-link";

async function whatToChoose() {
  const option = await inquirer.prompt({
    name: "oneOutOfTwo",
    type: "list",
    message:
      "Markdown-HTML [vice-versa] converter or Resource aggregator (⌐■_■)\n",
    choices: ["File-convertor", "Resource-aggregator"],
  });
  return choiceHandler(option.oneOutOfTwo);
}

async function choiceHandler(whatIs) {
  if (whatIs == "Resource-aggregator") {
    return resourceAggregator();
  }
}

async function resourceAggregator() {
  const techList = await inquirer.prompt({
    name: "whatToLearn",
    type: "list",
    message: "Choose what you wish to get resources of （￣︶￣）↗　 \n",
    choices: [
      "Nodejs",
      "Expressjs",
      "Reactjs",
      "Javascript",
      "Docker",
      "Hackathons",
      "Back",
    ],
  });
  return resourceAggregatorChoice(techList.whatToLearn);
}

async function resourceAggregatorChoice(choice) {
  switch (choice) {
    case "Nodejs":
      console.log(`Resources for Nodejs : 
            ${chalk.bgBlackBright(
              ` 1.) ${terminalLink(
                "Real-time-markdown-viewer",
                "https://scotch.io/tutorials/building-a-real-time-markdown-viewer"
              )}`
            )}
            ${chalk.bgBlackBright(
              ` 2.) ${terminalLink(
                "Search-bot",
                "https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1"
              )}`
            )}
            ${chalk.bgBlackBright(
              ` 3.) ${terminalLink(
                "Github-bot",
                "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html"
              )}`
            )}\n`);
      console.log(`Youtube videos for Node:
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Freecodecamp",
                "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Programming with mosh",
                "https://www.youtube.com/watch?v=TlB_eWDSMt4&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Nodejs by Dave Gray",
                "https://www.youtube.com/watch?v=f2EqECiTBL8&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Freecodecamp",
                "https://www.youtube.com/watch?v=RLtyhwFtXQA&pp=ygUSbm9kZWpzIGZ1bGwgY291cmNl"
              )}`
            )}`);
      break;
    case "Expressjs":
      console.log(`Resources for Expressjs : 
            ${chalk.bgBlackBright(
              ` 1.) ${terminalLink(
                "Real-time-chat-application by freecodecamp",
                "https://www.freecodecamp.org/news/simple-chat-application-in-node-js-using-express-mongoose-and-socket-io-ee62d94f5804/"
              )}`
            )}\n`);
      console.log(`Youtube videos for Expressjs:
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "By web dev simplified",
                "https://www.youtube.com/watch?v=SccSCuHhOw0&pp=ygUccHJvamVjdHMgdXRpbGl6aW5nIGV4cHJlc3Nqcw%3D%3D"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "By anson developer",
                "https://www.youtube.com/watch?v=nH9E25nkk3I&pp=ygUccHJvamVjdHMgdXRpbGl6aW5nIGV4cHJlc3Nqcw%3D%3D"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Real-time-chat-application",
                "https://youtu.be/Fzv-rgwcFKk"
              )}`
            )}`);
      break;
    case "Reactjs":
        console.log(`Resources for Reactjs : 
            ${chalk.bgBlackBright(
              ` 1.) ${terminalLink(
                "Real-time-markdown-viewer",
                "https://scotch.io/tutorials/building-a-real-time-markdown-viewer"
              )}`
            )}
            ${chalk.bgBlackBright(
              ` 2.) ${terminalLink(
                "Search-bot",
                "https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1"
              )}`
            )}
            ${chalk.bgBlackBright(
              ` 3.) ${terminalLink(
                "Github-bot",
                "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html"
              )}`
            )}\n`);
      console.log(`Youtube videos for Node:
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Freecodecamp",
                "https://www.youtube.com/watch?v=Oe421EPjeBE&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Programming with mosh",
                "https://www.youtube.com/watch?v=TlB_eWDSMt4&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Nodejs by Dave Gray",
                "https://www.youtube.com/watch?v=f2EqECiTBL8&pp=ygUGbm9kZWpz"
              )}`
            )}
            ${chalk.bgBlack(
              `i.) ${terminalLink(
                "Freecodecamp",
                "https://www.youtube.com/watch?v=RLtyhwFtXQA&pp=ygUSbm9kZWpzIGZ1bGwgY291cmNl"
              )}`
            )}`);
      break;
    default:
      console.log(
        `${chalk.bgBlueBright(
          terminalLink(
            "This repo contains all =]",
            "https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file"
          )
        )}`
      );
      break;
  }
}

await whatToChoose();
