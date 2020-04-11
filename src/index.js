const app = require('./server');
const { PORT } = require('./config/environments');

async function main() {
    await app.listen(PORT);
    console.log(`Server on port ${PORT}`);
}

main(); 