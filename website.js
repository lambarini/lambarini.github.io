const inputText = document.getElementById('input-text');
const encryptedText = document.getElementById('encrypted-text');
const decryptedText = document.getElementById('decrypted-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');

encryptBtn.addEventListener('click', () => {
  const text = inputText.value;
  const encrypted = encrypt(text);
  encryptedText.value = encrypted;
});

decryptBtn.addEventListener('click', () => {
  const text = encryptedText.value;
  const decrypted = decrypt(text);
  decryptedText.value = decrypted;
});

function encrypt(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binary = charCode.toString(2);
    const reversedBinary = binary.split('').map(bit => bit === '1' ? '0' : '1').join('');
    result += String.fromCharCode(parseInt(reversedBinary, 2));
  }
  return result;
}

function decrypt(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binary = charCode.toString(2);
    const reversedBinary = binary.split('').map(bit => bit === '1' ? '0' : '1').join('');
    result += String.fromCharCode(parseInt(reversedBinary, 2));
  }
  return result;
}
