// we are building express server with next js
const express = require("express");
const next = require("next");
// express js good in routing
const port = 3000;

const dev = process.env.NODE_DEV !== "production";
// instead of express we going to use next then we pass dev inside it
const app = next({ dev });

const handle = app.getRequestHandler();

// now state using app environment or  prepare our server, this is the process next js does
app.prepare().then(() => {
  // so once file build we create express server
  const server = express();
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${port}`);
  });
});
// now we have initial server
// now run 'npm run build' then 'npm start'
// after that check http://localhost:3000, you can see Cannot GET /
// this is because we don't have an express method calling route so let's work on it
