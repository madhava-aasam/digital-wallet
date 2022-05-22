import axios from "axios";

const apiUrl = "http://localhost:3090/api";

const userLogin = async (payload) => {
  try {
    const url = `${apiUrl}/user/login`;
    const res = await axios.post(url, payload);
    return res;
  } catch (error) {
    console.error("userLogin", error);
  }
};

const getUserInfo = async () => {
  try {
    const headers = getAuthHeader();
    if (!headers) {
      return null;
    }

    const url = `${apiUrl}/user`;

    const data = await axios.get(url, { headers });
    console.log(data);
    return data;
  } catch (error) {
    console.error("getTransactions", error);
  }
};

const getUsers = async () => {
  try {
    const headers = getAuthHeader();
    if (!headers) {
      return null;
    }

    const url = `${apiUrl}/users`;
    const data = await axios.get(url, { headers });
    console.log(data);
    return data;
  } catch (error) {
    console.error("getTransactions", error);
  }
};

const transferMoney = async (payload) => {
  try {
    const headers = getAuthHeader();
    if (!headers) {
      return null;
    }

    debugger;
    const url = `${apiUrl}/user/transaction`;

    const data = await axios.post(url, payload, { headers });
    console.log(data);
    return data;
  } catch (error) {
    console.error("transferMoney", error);
  }
};

const getTransactions = async () => {
  try {
    debugger;
    const bearerToken = sessionStorage.getItem("bearer");
    if (!bearerToken) {
      return null;
    }

    const url = `${apiUrl}/user/transactions`;

    // debugger;
    const data = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + bearerToken,
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error("getTransactions", error);
  }
};

const getAuthHeader = () => {
  const bearerToken = sessionStorage.getItem("bearer");
  if (!bearerToken) {
    return null;
  }

  const headers = {
    Authorization: "Bearer " + bearerToken,
  };

  return headers;
};

export default {
  userLogin,
  getUserInfo,
  getUsers,
  transferMoney,
  getTransactions,
};
