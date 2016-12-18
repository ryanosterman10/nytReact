var axios = require("axios");

// NYT API
var nytAPI = "efc300bc2d724b6aa36e0341620a7fa6";

// Helper Functions (in this case the only one is runQuery)
var helper = {

  runQuery: (nytsearch) => {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + nytsearch + "&api-key=" + nytAPI;

    return axios.get(queryURL).then((response) => {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }
};

export default helper;
