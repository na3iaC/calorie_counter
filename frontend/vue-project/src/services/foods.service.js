const foodService = {
  search: (searchQuery) => {
    return fetch(`http://localhost:3333/food/search?q=${searchQuery}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((resJson) => {
        return resJson;
      })
      .catch((err) => {
        console.log("Err", err);
        throw err;
      });
  },
};

export default foodService;
