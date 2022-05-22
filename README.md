# digital-wallet
Displays wallet balance and transactions and allows making a transaction

## Getting Started
### Install node & npm
Visit [node website](https://nodejs.org/en/download/)

### Install dependecy modules
```
npm install
```

### Run application
Make sure Open Api (http://localhost:3080) and Protected Api (http://localhost:3080) are running. 
```
npm start
```

## Functionality
### Login
* Click on Login
* Enter User name and password
* Click Login button
* Below credentials can be used

| User name | Password |
| :------------ |:---------------:| 
| sandra | sandra |
| sofia | sofia |
| rachel| rachel|
### Dashboard
On successful login it populates User name and Wallet balance. Also enables menu items New Transactin and Wallet Transactions 
### Make transaction
* Click on New Transaction
* Select To
* Enter Amount
* Enter Description (optional)
* Click on Submit
* On success, 
   - it will redirect you to the wallet transactions
   - updates Wallet Balance
### Transactins list
Displays all the transactions made by the user and amount received. Details of Sender, Recipient, Amount, and Notes are displayed.