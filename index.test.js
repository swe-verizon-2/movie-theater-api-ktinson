const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { User, Show } = require('./models/index')
const app = require('./src/app');
const seed = require("./db/seed");
const router = require('./routes/movies')

app.use('/movies', router)