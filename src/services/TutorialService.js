import http from "../http-common";

const apiUrl = ''

const getAll = () => {
  return http.get("/tutorials");
};

const get = async () => {
  const url = `${apiUrl}/user/transactions/628868a55cf78f3849a88497`;

  const data = await http.get(url);
  debugger;
  console.log(data);
  return data;
  // return http.get(url);
};

const create = (data) => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const TutorialService = {


  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
