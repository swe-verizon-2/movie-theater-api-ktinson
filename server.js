const app = require("./src/app");
const { db } = require("./db/connection")
const expressListEndpoints = require('express-list-endpoints')
const port = 3000;
app.listen(port, () => {
    const endpoints = expressListEndpoints(app)
    db.sync();
    console.log(`Listening at http://localhost:${port}/movies`)
    console.log(endpoints)
})
