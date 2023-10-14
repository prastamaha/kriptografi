from cryptography.fernet import Fernet, InvalidToken

def appGenerateKey():
  return Fernet.generate_key()

def appEncryptMessage(key, plainMessage):
  fernet = Fernet(key)
  return fernet.encrypt(plainMessage.encode())

def appDecryptMessage(key, encMessage):
  fernet = Fernet(key)
  try:
    return fernet.decrypt(encMessage).decode()
  except InvalidToken:
    return "Decryption failed! Invalid token."
