//CREATE INSTANCE OF XMLHTTP REQUEST
var request = new XMLHttpRequest();
//CREATE A CONNECTION open a connection
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
//SEND THE REQUEST
request.send();
//load the response
request.onload = function () {
  var data = JSON.parse(this.response);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name);
  }
};
