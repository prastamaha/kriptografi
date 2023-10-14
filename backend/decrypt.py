from cryptography.fernet import Fernet

key = input("Input Key: ")
encMessage = input("Input Encrypted Message: ")

fernet = Fernet(key)

decMessage = fernet.decrypt(encMessage).decode()
 
print("Decryted message: ", decMessage)
