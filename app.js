const folder = './';
import fs from 'fs'
import chalk from 'chalk'

fs.readdir(folder, (err,files) => {
    files.forEach((file)=>{
        if (fs.statSync(`./${file}`).isDirectory()){//Check if each item returned in the directory is a folder
            process.stdout.write(chalk.blue.bold(`${file}  `));
        }
        else{
            process.stdout.write(`${file}  `);
        }
    })
    process.stdout.write('\n')                          
})

