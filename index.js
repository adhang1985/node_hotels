const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT;
const db = require('./db');

app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
});