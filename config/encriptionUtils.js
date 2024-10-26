import * as Crypto from 'expo-crypto';


// ... (Import SECRET_KEY securely from environment variables)
const SECRET_KEY = 'Ysadsadasdsadwq';
const encryptData = async (data) => {
  try {
    const algorithm = {
      name: 'AES-GCM',
      iv: await Crypto.getRandomBytesAsync(12),
    };

    const key = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      SECRET_KEY
    );

    // Encode the string to an ArrayBuffer
    const dataBuffer = new TextEncoder().encode(data).buffer; // Convert string to ArrayBuffer

    const ciphertext = await Crypto.encryptAsync(
      algorithm,
      key,
      dataBuffer // Pass the ArrayBuffer here
    );

    // Combine IV and ciphertext (adjust format as needed)
    return JSON.stringify({ iv: Array.from(algorithm.iv), ciphertext });

  } catch (error) {
    console.error('Encryption error:', error);
    // Handle error appropriately (e.g., throw an error)
  }
};

const decryptData = async (encryptedData) => {
  try {
    const { iv, ciphertext } = JSON.parse(encryptedData);

    const algorithm = {
      name: 'AES-GCM',
      iv: new Uint8Array(iv),
    };

    const key = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      SECRET_KEY
    );

    const decryptedData = await Crypto.decryptAsync(
      algorithm,
      key,
      ciphertext 
    );

    // Convert the ArrayBuffer back to a string
    return new TextDecoder().decode(decryptedData);

  } catch (error) {
    console.error('Decryption error:', error);
    // Handle error (e.g., throw an error, return a default value)
  }
};

export { encryptData, decryptData };