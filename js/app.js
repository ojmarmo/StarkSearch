
// Create an aler that says "Button clicked!" when a user clicks the search button
/*$('.search-button').click(function () {
  alert("Button clicked!");
});
*/

var displayWikipediaData = function() {
  var $linksElement = $("#links");
  var searchString = $("#searchString").val();
  var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";
  $.ajax({
    url: wikipediaUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(res) {
      var linkLists = res[1];
      linkLists.forEach(function(item) {
        var url = "https://en.wikipedia.org/wiki/" + item;
       $linksElement.append('<li><a href="' + url + '">' + item + '</a></li>');
       return url;
     })
      //output the results of the Wikipedia data on the screen (with titles & links)
    }
  });
  return false;
}

$("#form").submit(displayWikipediaData);
