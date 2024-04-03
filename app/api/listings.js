import client from "./client";
const endpoint = "./listings";
const getListings = () => client.get(endpoint);

const addListing = (listing) => {
  // content-type setting to multi part

  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.appemd("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  addListing,
  getListings,
};
