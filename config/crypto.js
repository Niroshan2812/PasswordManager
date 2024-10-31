import CryptoJS from "crypto-js";

const SECRET_KEY = "cry2356"; 

// Function to encrypt data
export const encryptData = (data) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  return ciphertext;
};

// Function to decrypt data
export const decryptData = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
// Encrypt data
const sensitiveData = { username: "user123", password: "pass123" };
const encrypted = encryptData(sensitiveData);
console.log("Encrypted:", encrypted);

// Decrypt data
const decrypted = decryptData(encrypted);
console.log("Decrypted:", decrypted);
