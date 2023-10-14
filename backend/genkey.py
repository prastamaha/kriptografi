from cryptography.fernet import Fernet

key = Fernet.generate_key()
print("Save your key ", key)