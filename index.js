require('dotenv').config();
const { log } = console;

const containerName = process.env.CONTAINER_NAME;

function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
        log(`Container ${containerName} running...`);

        while (true) {
                console.log('Containers rule!');
                await sleep(5000);
        }
}

main();
