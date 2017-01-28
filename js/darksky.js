// Create the function the JSON data will be passed to.
function myfunc(json) {
  // test container
  var test_target = document.getElementById('api-data');
  // current date (timestamp)
  var unixDate = $.now();

  // converts timestamp array
  function scDateTime(unixtimestamp){
    // convert timestamp to date...
    var rawDate = new Date(unixtimestamp);
    // date to string...
    var strDate = rawDate.toString();
    // string to array
    var arrDate = strDate.split(' ');
    // return array
    return arrDate;
  }
  // returns mmm dd, yyyy
  function scDate (a){
    var date = a[1] +" "+ a[2] +", "+ a[3];
    return date;
  }
  // returns hh:mm:ss
  function scTime (a){
    var time = a[4];
    return time;
  }
  // current date and time
  now = scDate(scDateTime(unixDate))+"<br>"+scTime (scDateTime(unixDate));



  test_target.innerHTML = now;
}



$.ajax({
  type: "GET",
  url: "https://api.darksky.net/forecast/api/50.2399,-117.8011",
  dataType: 'jsonp',
  jsonpCallback: 'myfunc', // the function to call
  jsonp: 'callback', // name of the var specifying the callback in the request
  error: function (xhr, errorType, exception) {
    var errorMessage = exception || xhr.statusText;
    alert("Excep:: " + exception + "Status:: " + xhr.statusText);
  }
});
