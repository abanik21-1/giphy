//[ ] Declare a variable that stores the following API request URL: https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC
//[ ] Write the fetch request that logs the entire API request to the console

let customGiphy =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";

$(".search-button").click(function () {
  fetch(customGiphy)
  
    .then(function (response) {
      return response.json();
    })

    .then(function (body) {
      console.log(body.data);
    });
});

//[ ] Navigate through the API request URL to return only the first gif in the array
//[ ] HINT: Work your way through the layers one at a time (check your console every time!) to find where the original image URLs are stored
//[ ] Update your API request so that only the original image URL is logged to the console
