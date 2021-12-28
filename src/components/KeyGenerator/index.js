import React, {FC, useState, useEffect} from 'react';
import {Button} from "@material-ui/core";


import "./style.scss";

const KeyGenerator: FC = () => {
  const [goalWord, setGoalWord] = useState("ab");
  const [publicKey, setPublicKey] = useState("click on 'get key'");
  const [privateKey, setPrivateKey] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false); 
  const [caseSensitive, setCaseSensitive] = useState(false); 
  var workers = []

  const handleChange = (e) => {
    setGoalWord(e.target.value); 
  };

  const handleCaseSensitiveChange = (e) => {
    setCaseSensitive(e.target.checked); 
  }

  const terminateWorkers = () => {
    workers.forEach(function (worker, index) {
      worker.terminate(); 
    });
  }

  const handleSubmit = () => {
    setPublicKey(`calculating...`);
    setButtonDisabled(true);

    for(var i = 0; i < 4; i++){
      var worker = new Worker("/createKey.js");
      worker.addEventListener('message', function(e) {
        setPublicKey(e.data.publicKey);
        setPrivateKey(e.data.privateKey);
        setButtonDisabled(false);
        terminateWorkers();
      }, false);
      worker.postMessage({"goalWord": goalWord, "caseSensitive": caseSensitive}); 
      workers.push(worker);
      console.log(workers); 
    }
  };

  return (
    <div className="airdrop-container">
      <h3>Generate a keypair for which the public key starts with letters of your choice 🎉</h3>
      <div className="airdrop-wrapper">
        <p className="red">All code runs in your browser; no-one, except for you has access to the generated keypair. Feel free to fork on Github and run locally.</p>
        <h3>Goal word</h3>
        <p>Enter the word your public key should start with (the longer the word, the longer the wait).</p>
        <input
          name="goalWord"
          type="text"
          value={goalWord}
          onChange={handleChange}
          className="airdrop-pk-input stake-input borrower-pk credix-button MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary balance-button"
        />
        <label>
          Case sensitive:
          <input
            name="caseSensitive"
            type="checkbox"
            checked={caseSensitive}
            onChange={handleCaseSensitiveChange} />
        </label>
        <Button
            variant="contained"
            className="stake-submit MuiButton-containedPrimary balance-button credix-button sol-airdrop"
            onClick={handleSubmit}
            disabled={buttonDisabled}
        >
         GET KEY
        </Button>
        <h3>Public Key:</h3>
        <p>{publicKey}</p>
        <a
            className="download-keypair" 
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(privateKey)
            )}`}
            download="id.json"
            disabled={buttonDisabled}
          >
            {`Download keypair`}
          </a>
       </div>
    </div>
  );
};

export default KeyGenerator;
