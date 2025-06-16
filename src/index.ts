import fs from 'fs';
import readline from 'readline';
import { generateCodeFromGherkin } from './openaiService';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('📥 Enter your testcases scenario:\n', async (gherkinInput:string) => {
    const code = await generateCodeFromGherkin(gherkinInput);
    fs.writeFileSync('./output/generatedTest.ts', code);
    console.log('\n✅ Code saved to output/generatedTest.ts');
    rl.close();
});