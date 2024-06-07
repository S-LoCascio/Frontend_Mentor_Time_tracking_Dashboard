fetch(`./data.json`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("something went wrong retreiving the information!");
    console.error(error);
  });
