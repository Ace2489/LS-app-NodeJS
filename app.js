const folder = './';
const fs = require('fs');

fs.readdir(folder, (err,files) => {
    files.forEach((file)=>{
        process.stdout.write(`${file}  `);
    })
    process.stdout.write('\n')                          
})

