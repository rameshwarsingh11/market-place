import client from "./client";
const endpoint = "./listings";
const getListings = (a) => client.get(endpoint);

export default {
  getListings,
};
