const archiver = require('archiver');
const fs = require('fs');
const SftpClient = require('ssh2-sftp-client');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const sftp = new SftpClient();

const sourceFolderPath = './.next';
const zipFilePath = './next.zip';
const remotePath = '/root/fe_build/dev';

const sftpConfig = {
  host: process.env.SFTP_HOST,
  port: process.env.SFTP_PORT,
  username: process.env.SFTP_USERNAME,
  password: process.env.SFTP_PASSWORD
};

// Function to create zip from Next.js build folder
function createZip() {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      console.log('Zip file berhasil dibuat!');
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);
    archive.directory(sourceFolderPath, false);
    archive.finalize();
  });
}

// Function to upload file with SFTP using fastPut
async function uploadFile() {
    try {
      await sftp.connect(sftpConfig);
      console.log('Connected to SFTP server.');
  
      const fileSize = fs.statSync(zipFilePath).size;
      let uploadedBytes = 0;
  
      const progressBarLength = 30;
  
      // Update the progress bar with percentage completion
      const progressBarInterval = setInterval(() => {
        const percentage = Math.round((uploadedBytes / fileSize) * 100);
        const completed = Math.round((progressBarLength * percentage) / 100);
        const remaining = progressBarLength - completed;
        const progressBar = `[${'='.repeat(completed)}${' '.repeat(remaining)}]`;
  
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`Uploading: ${progressBar} ${percentage || 0}%`);
      }, 200);
  
      // Upload the zip file and update the uploadedBytes using fastPut
      await sftp.fastPut(zipFilePath, `${remotePath}/next.zip`, {
        concurrency: 64, // Jumlah koneksi multipel
        step(details) {
          uploadedBytes = details.destinationSize;
        }
      });
  
      clearInterval(progressBarInterval); // Stop updating progress bar
  
      console.log('\nZip file berhasil diupload dan menggantikan file yang sudah ada di server.');
    } catch (err) {
      console.error('Error:', err.message);
    } finally {
      sftp.end();
    }
}
  

// Function to run the whole deployment process
async function deploy() {
  try {
    await createZip();
    await uploadFile();
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Run the deploy function
deploy();
