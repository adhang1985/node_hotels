const app = require('./app');
const PORT = 4000;
const db = require('./db');

app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
})