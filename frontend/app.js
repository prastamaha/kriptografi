document.addEventListener("DOMContentLoaded", function() {
    
  // ---------- GenKey page logic ----------
  const generateKeyButton = document.getElementById("generateKey");
  const keyOutput = document.getElementById("keyOutput");
  if (generateKeyButton) {
      generateKeyButton.addEventListener("click", async () => {
          try {
              let response = await fetch('http://127.0.0.1:5000/genkey', { method: 'GET' });
              let data = await response.json();
              keyOutput.value = data.key;
          } catch (error) {
              console.error("Error generating key:", error);
          }
      });
  }
  
  // ---------- Encrypt page logic ----------
  const encryptButton = document.getElementById("encryptButton");
  const encryptionKeyInput = document.getElementById("encryptionKey");
  const plainTextInput = document.getElementById("plainText");
  const encryptedOutput = document.getElementById("encryptedOutput");
  if (encryptButton) {
      encryptButton.addEventListener("click", async () => {
          try {
              let response = await fetch('http://127.0.0.1:5000/encrypt', {
                  method: 'POST',
                  headers: {
                      'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                      key: encryptionKeyInput.value,
                      plainMessage: plainTextInput.value
                  })
              });
              let data = await response.json();
              encryptedOutput.value = data.encryptedMessage;
          } catch (error) {
              console.error("Error during encryption:", error);
          }
      });
  }

  // ---------- Decrypt page logic ----------
  const decryptButton = document.getElementById("decryptButton");
  const decryptionKeyInput = document.getElementById("decryptionKey");
  const encryptedInput = document.getElementById("encryptedInput");
  const decryptedOutput = document.getElementById("decryptedOutput");
  if (decryptButton) {
      decryptButton.addEventListener("click", async () => {
          try {
              let response = await fetch('http://127.0.0.1:5000/decrypt', {
                  method: 'POST',
                  headers: {
                      'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                      key: decryptionKeyInput.value,
                      encMessage: encryptedInput.value
                  })
              });
              let data = await response.json();
              decryptedOutput.value = data.decryptedMessage;
          } catch (error) {
              console.error("Error during decryption:", error);
          }
      });
  }

});