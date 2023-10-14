from flask import Flask
from flask import request
from flask_cors import CORS
import json
import kripto

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
  return "<h1>Kriptografi Home</h1>"


@app.route("/genkey", methods = ['GET', 'HEAD'])
def generateKey():
  key =  kripto.appGenerateKey()
  keyDecoded = key.decode('utf-8')
  return f'{{"key":"{keyDecoded}"}}'

@app.route("/encrypt", methods=['POST'])
def encMessage():
  data = json.loads(request.data)
  encMessage = kripto.appEncryptMessage(data['key'], data['plainMessage'])
  encMessageDecoded = encMessage.decode('utf-8')
  return f'{{"encMessage":"{encMessageDecoded}"}}'

@app.route("/decrypt", methods=['POST'])
def decMessage():
  data = json.loads(request.data)
  decMessage = kripto.appDecryptMessage(data['key'], data['encMessage'])
  decMessageDecoded = decMessage
  return f'{{"decMessage":"{decMessageDecoded}"}}'

if __name__ == "__main__":
    app.run()