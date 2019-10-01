# Telelib
This is an ESM compliant implementation of the Telegram Bot API. It can handle much of the heavy lifting for you.

Currently, Node.js can only have ES modules enabled while using the `--experimental-modules` argument when running the node executable.
You will currently need to be running a version of node that supports ES modules if you want to take advantage of them.
If you wish to run in compatability mode with CommonJS modules, you can use `require("telelib/index.cjs")` to access it.
This module was developed on the v12 branch of Node.js, and may not be compatible with older releases.
