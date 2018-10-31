const fs = require('fs');

const picpath = '../data/media';
let output = "import { Asset } from 'expo';\n\nexport default {\n";

fs.readdirSync('./data/media').forEach((file, index)=> { 
    if (index > 0) output = output.concat(',\n');
    output = output.concat(`\t'${file}': Asset.fromModule(require('${picpath}/${file}'))`);   
});

output = output.concat(`\n}\n`);

fs.writeFileSync('./components/PicAssets.js', output);

console.log('Assets output');
