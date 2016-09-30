angular.module('app')
.service('PillIdService', function($http) {

  this.GetPillImage = function(url) {
    return $http.get(url).then(function(response) {
          return response.data;
    });
  }

  this.BuildPillIdUrl = function(quereyParams) {
    var urlString ="http://rximage.nlm.nih.gov/api/rximage/1/rxnav?&resolution=600";
    var url = urlString + quereyParams;
    return url;
  }

  this.BuildQuereyParams = function(pillObj) {
    var params = "";

      if(pillObj.name)
        params = "&name=" + pillObj.name;

      if(pillObj.imprint)
        params += "&imprint=" + pillObj.imprint;

      if(pillObj.shape)
        params += "&shape=" + pillObj.shape;

      if(pillObj.color)
        params += "&color=" + pillObj.color;

      if(pillObj.symbol)
        params += "&symbol=" + pillObj.symbol;

      if(pillObj.size)
        params += "&size=" + pillObj.size;

      if(pillObj.score)
        params += "&score=" + pillObj.score;

        console.log("Params!: ", params);
        return params;
  }

  this.shapesList = [
  "BULLET",
  "CAPSULE",
  "CLOVER",
  "DIAMOND",
  "DOUBLE CIRCLE",
  "FREEFORM",
  "GEAR",
  "HEPTAGON",
  "HEXAGON",
  "OCTAGON",
  "OVAL",
  "PENTAGON",
  "RECTANGLE",
  "ROUND",
  "SEMI-CIRCLE",
  "SQUARE",
  "TEAR",
  "TRAPEZOID",
  "TRIANGLE",
  ];

  this.symbolsList = [
    true,
    false
  ];

  this.colorsList = [
    "BLACK",
    "BLUE",
    "BROWN",
    "GRAY",
    "GREEN",
    "ORANGE",
    "PINK",
    "PURPLE",
    "RED",
    "TURQUOISE",
    "WHITE",
    "YELLOW",
  ];

});
