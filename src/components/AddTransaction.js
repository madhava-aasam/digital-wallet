import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DigitalWalletService from "../services/DigitalWalletService";

const AddTransaction = ({updateUserInfo}) => {
  const [users, setUsers] = useState([]);
  const [recipientId, setRecipient] = useState("");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(!sessionStorage.getItem('bearer')) {
      navigate('/login');
    }

    const getUsers = async () => {
      const resp = await DigitalWalletService.getUsers();
      setUsers(resp?.data?.users || []);
    };
    getUsers();
  }, []);

  const saveTransaction = async () => {
    var payload = {
      recipientId,
      amount,
      notes,
    };

    debugger;
    const resp = await DigitalWalletService.transferMoney(payload);
    if (resp) {
      await updateUserInfo();
      navigate("/transactions");
    } else {
      setError("Transaction failed");
    }
  };

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="to">To</label>

          <select
            className="form-control"
            required
            value={recipientId}
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option value="-1" default>Select User</option>
            {users.map((usr, index) => (
              <option key={index} value={usr._id}>{usr.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            name="description"
          />
        </div>

        {error && <span style={{ color: "red" }}>{error}</span>}
        <br />
        <button onClick={saveTransaction} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
