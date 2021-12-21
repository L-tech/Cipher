// Use dotenv to set a static passphrase
require('dotenv').config();
// Javascript Library for encryption and decryption - crypto-js
const CryptoJS = require("crypto-js");
/**
* Function for data encryption
* @author   Abraham
* @param    {String} text    Data to be encrypted
* @return   {String}         encrypted value
*/
function encryptWithAES(text) {
  const passphrase = process.env.PASSPHRASE;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}
/**
* Function for data decryption
* @author   Abraham
* @param    {String} text    encrypted data to be decrypted
* @return   {String}         decrypted value
*/

function decryptWithAES (encryptedText) {
const passphrase = process.env.PASSPHRASE;
  const bytes = CryptoJS.AES.decrypt(encryptedText, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

// console.log(encryptWithAES('abraham'));
// console.log(decryptWithAES('U2FsdGVkX1+kd72CrcepCbC10UgjdWpWFrgZ9ZzFLpk='));

