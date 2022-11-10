# Getting Started with Stack React App

In the project directory, you can run:

### `npm install`

to install all required dependencies

then 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


**Note: this  app requires  STX wallet. `Hiro` web wallet recommended**

after successful wallet connection proceed in providing the neccessary fields:

1. address the of the recipient           `address`
2. amount of STX to send in uSTX          `stxinput`
    **Note: 1,000,000  (1M)uSTX = 1STX**
3. memo description of the transaction    `memo`

The async function `getBalances` get user stx balance

The async function `handleTokenTransfer` takes the above fields and returns a transaction id as string

then `getTransactionStatus` takes the id returned from `handleTokenTransfer` and returns the transaction status 

getTransactionStatus response: get from `const [response, setResponse] = useState(null);`

`success`

`failed`
        
`pending` **Note: transaction may take up to 5mins to be processed in the blockchain.**



**Note: this app is currently on testnet.**
to go mainnet:

1. in App.js ==> MicroStacks.ClientProvider ==> network: 
change from testnet to mainnet

2. in PayContract.js ==> getBalance
change the axios url to `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${principal}/balances`

3. in PayContract.js ==> getTransactionStatus
change the axios url to `https://stacks-node-api.mainnet.stacks.co/extended/v1/tx/${e}`




