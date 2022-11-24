const readline = require('readline');
const WebResolver = require('webresolver');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resolver = new WebResolver("API_KEY");

console.log("GeoIP Lookup By TanevAZ : https://github.com/TanevAZ\n");

rl.question('IP Address : ', async (ip) => {
    resolver.geoIp(ip).then(res => {
        console.log(res.data);
      });
    rl.close();

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("\nPress any key to exit...");

    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on('data', process.exit.bind(process, 0));
});