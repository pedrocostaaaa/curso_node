import path from 'path';
import url from 'url';
import { appendFile, promises as fs } from 'fs';
import { error } from 'console';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const arquivo = path.join(__dirname,'boas_vindas.txt');

try {
    await fs.appendFile(arquivo,'\n Saudações :)');
} catch (error) {
    console.log('Erro ao criar arquivo',error)
}