import * as web3 from '@solana/web3.js';


function makeid(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  return result;
}

const goalString = "ab"
var keyString = makeid(goalString.length)
var key =  web3.Keypair.generate();

while (keyString.slice(0, goalString.length).toLowerCase() != goalString) {
  key =  web3.Keypair.generate();
  keyString = key.publicKey.toString();
}

console.log(key); 
console.log(keyString);