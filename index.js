const fs = require('fs');
const path = require('path');

const file1Path = path.join(__dirname, 'file1.txt'); 
const file2Path = path.join(__dirname, 'file2.txt');

// Function to read file asynchronously
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

// Read both files and concatenate their content
const concatenateFiles = async () => {
  try {
    const [content1, content2] = await Promise.all([
      readFileAsync(file1Path),
      readFileAsync(file2Path)
    ]);
    const combinedContent = content1 + '\n' + content2;
    console.log('Combined Content:\n', combinedContent);
  } catch (err) {
    console.error('Error reading files:', err);
  }
};

// Run the function
concatenateFiles();