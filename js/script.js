$(".search-button").click(function () {
  // Declare a variable that will store the user's input
  let userInput = $("input").val();

  // Use string concatenation to include the search term
  let customGiphy = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(customGiphy)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      let randomNum = Math.floor(Math.random() * data.data.length);
      let randomGif = data.data[randomNum].images.original.url;
      console.log(randomGif);
      $(".display").html(`<img src="${randomGif}"></img>`);
    });
});

//[ ] Update the request URL in your fetch request to display a random gif onto the screen
