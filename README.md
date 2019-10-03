# Telelib
This is an ESM compliant implementation of the Telegram Bot API. It can handle much of the heavy lifting for you.

Currently, Node.js can only have ES modules enabled while using the `--experimental-modules` argument when running the node executable.
You will currently need to be running a version of node that supports ES modules if you want to take advantage of them.
If you wish to run in compatability mode with CommonJS modules, you can use `require("telelib/index.cjs")` to access it.
This module was developed on the v12 branch of Node.js, and may not be compatible with older releases.

You can easily start making a bot with the BotController class in telelib. Here is some example code to show you how it's done!
```JavaScript
import { BotController } from "telelib/BotController";
const bot = new BotController("123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11");
function isDeveloperUser(message) {
    "use strict";
    return message.from.id === 777000;
}
function isPrivateChat(message) {
    "use strict";
    return message.chat.type === "private";
}
async function onHelloCommand(message) {
    "use strict";
    await message.sendMessage({
        text: "<b>Hello</b> <i>World</i>!",
        parse_mode: "HTML",
    });
}
bot.on("message", onHelloCommand, "/hello", isDeveloperUser);
bot.on("edited_message", onHelloCommand, "/hello", isDeveloperUser, isPrivateChat);
bot.on("channel_post", onHelloCommand, "/hello");
bot.on("edited_channel_post", onHelloCommand, "/hello");
bot.start();
```
