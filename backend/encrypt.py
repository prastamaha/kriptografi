from cryptography.fernet import Fernet

key = input("Input Key: ")
plainMessage = input("Input Message: ")

fernet = Fernet(key)
encMessage = fernet.encrypt(plainMessage.encode())
 
print("Encrypted message: ", encMessage)
