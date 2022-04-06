$(".search-button").click(function () {
  
  // Declare a variable that will store the user's input
  let userInput = $("input").val();
  console.log(userInput);

  // Use string concatenation to include the search term
  let customGiphy =
    "https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1";
  console.log(customGiphy);

  $(".search-button").click(function () {
    fetch(customGiphy)
      .then(function (response) {
        return response.json();
      })

      .then(function (body) {
        console.log(body.data);
      });
  });
});
