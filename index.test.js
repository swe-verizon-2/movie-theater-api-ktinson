const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { User, Show } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const router = require('./routes/musicians')

app.use('/musicians', router)