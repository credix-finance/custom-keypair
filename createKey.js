self.addEventListener("message", go);
self.importScripts("solana.js")

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}

function go(message) {
  const goalWord = message.data.goalWord;
  const caseSensitive = message.data.caseSensitive; 
  var start = new Date().getTime();
  const [publicKey, privateKey] = getKeys(goalWord, caseSensitive);
      var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
  self.postMessage({
    "command": "done",
    "publicKey": publicKey,
    "privateKey": privateKey
  });
}

const getKeys = (goalWord, caseSensitive) => {
    var keyString = makeid(goalWord.length);
    var key =  solanaWeb3.Keypair.generate();

    if (!caseSensitive) {
      while (keyString.slice(0, goalWord.length).toLowerCase() != goalWord) {
        key =  solanaWeb3.Keypair.generate();
        keyString = key.publicKey.toString();
      }
    } else {
      while (keyString.slice(0, goalWord.length) != goalWord) {
        key =  solanaWeb3.Keypair.generate();
        keyString = key.publicKey.toString();
      }
    }

    return [keyString, Array.from(key["secretKey"])]; 
}