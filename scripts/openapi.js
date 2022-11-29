import fs from 'node:fs/promises';

const file = await fs.readFile('./api.json');
const api = JSON.parse(file.toString());
const paths = Object.keys(api.paths);
let result = 'const routes = {\n';

for (const path of paths) {
    const methods = Object.keys(api.paths[path]);
    for (const method of methods) {
        const {operationId} = api.paths[path][method];
        result += `    ${operationId}: '${path}',\n`;
    }
}

result += '}\n\nexport default routes';
await fs.writeFile('./routes.ts', result);
