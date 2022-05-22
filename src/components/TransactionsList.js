import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DigitalWalletService from "../services/DigitalWalletService";

const TransactionsList = () => {
  const [trxns, setTrxns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem('bearer')) {
      navigate('/login');
    }

    const retrieveTutorials = async () => { 
      const trxns = await DigitalWalletService.getTransactions();
      debugger;
      if (trxns == null) {
        // navigate('/login')
      }

      setTrxns(trxns?.data?.transactions);
      console.log(trxns?.data?.transactions);
    }
    retrieveTutorials();
  }, []);

  return (
    <div className="list row">
        {trxns?.length > 0 ? (
          <div style={{"width": "100%" }}>
          <h4>Transactions List</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sender</th>
                <th scope="col">Recipient</th>
                <th scope="col">Amount</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {trxns.map((trx, index) => (
                  <tr key={index}>
                    <th scope="row" key={index+1}>
                      {index+1}
                    </th>
                    <td>{trx.sender.name}</td>
                    <td>{trx.recipient.name}</td>
                    <td>{trx.amount}</td>
                    <td>{trx.notes}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          </div>
        ): <h4>No transactions found!</h4>}

    </div>
  );
};

export default TransactionsList;
