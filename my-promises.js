const {readFile, writeFile} = require('fs').promises

const start = async() =>{
    try {
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-greande.txt',`functions that return promises need await : ${first} ${second}`);

    } catch (error) {
        console.log(error);
    }
}
start()