var axios = require("axios");

var nytAPI = "efc300bc2d724b6aa36e0341620a7fa6";

var helper = {

  runQuery: function(nytsearch) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + nytsearch + "&api-key=" + nytAPI;