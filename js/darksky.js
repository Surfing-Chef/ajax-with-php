function logResults(json){
  var data = json;
  document.getElementById('api-data').innerHTML = data;
}

$.ajax({
  url: "https://api.darksky.net/forecast/api/lat,long",
  dataType: "jsonp",
  jsonpCallback: "logResults"
});
