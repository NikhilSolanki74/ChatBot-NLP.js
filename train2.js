

// const { NlpManager } = require('node-nlp');
// const fs = require('fs');
// const readline = require('readline');

// // Create an instance of NlpManager
// const manager = new NlpManager({ languages: ['en'] });
// let a = 1;

// // Function to process a line of training data
// const processLine = (line) => {
//     const data = JSON.parse(line);
    
//     data.utterances.forEach(utterance => {
//         manager.addDocument('en', utterance, data.intent);
//     })

//     data.responses.forEach(response => {
//         manager.addAnswer('en', data.intent, response);
//     })
//     console.log(a++);
// }

// // Function to read and process the training file line by line
// const processFile = async (filePath) => {
//     const fileStream = fs.createReadStream(filePath);
//     const rl = readline.createInterface({
//         input: fileStream,
//         crlfDelay: Infinity
//     });

//     for await (const line of rl) {
        
//         // console.log(line," ++++ ");
//         processLine(line);
//     }
// };

// const trainModel = async () => {
//     // Process the training data file
//     await processFile('finaldata.json'); // Use the filename here

//     // Train the model
//     await manager.train();
//     manager.save('model2.nlp');
//     console.log('Model trained and saved');
// };

// // Start the training process
// trainModel();




const { NlpManager } = require('node-nlp');
const fs = require('fs');
const readline = require('readline');

// Create an instance of NlpManager
const manager = new NlpManager({ languages: ['en'] });

// Function to process a line of training data
const processLine = (line, lineNumber, totalLines) => {
    const data = JSON.parse(line);

    data.utterances.forEach(utterance => {
        manager.addDocument('en', utterance, data.intent);
    });

    data.responses.forEach(response => {
        manager.addAnswer('en', data.intent, response);
    });

    // Display progress
    const progress = ((lineNumber / totalLines) * 100).toFixed(2);
    console.log(`Processing line ${lineNumber}/${totalLines} (${progress}%)`);
};

// Function to get the total number of lines in the file
const countLines = (filePath) => {
    return new Promise((resolve, reject) => {
        let lineCount = 0;
        const rl = readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity
        });

        rl.on('line', () => {
            lineCount++;
        });

        rl.on('close', () => {
            resolve(lineCount);
        });

        rl.on('error', (err) => {
            reject(err);

        });
    });
};

// Function to read and process the training file line by line
const processFile = async (filePath) => {
    const totalLines = await countLines(filePath);
    let currentLine = 0;

    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        currentLine++;
        processLine(line, currentLine, totalLines);
    }
};

const trainModel = async () => {
    // Process the training data file
    await processFile('finaldata.json'); // Use the filename here

    // Train the model
    await manager.train();
    manager.save('model2.nlp');
    console.log('Model trained and saved');
};

// Start the training process
trainModel();
