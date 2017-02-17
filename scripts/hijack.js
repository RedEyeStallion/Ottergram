function addLinkClickHandler() {
  'use strict';
  
  // for each link, if it is clicked, don't go to the page!
  addEventListener('click', function(event) {
  event.preventDefault();
});
}

function getLinksArray() {
  'use strict';
  
  // find all the links ('a' tags) on the page and save them in 'tags'
  var tags = document.getElementsByTagName('a');
  
  // convert the list of links into an array, save it in variable 'tagsArray'
  var tagsArray = [].slice.call(tags);
  
  // return the array of 'a' tags to the calling function
  return tagsArray;
}

function initializeEvents() {
  'use strict';
  
  // save the new array of links in 'links' variable
  var links = getLinksArray();
  
  // add the click handler to all elements of the array
  links.forEach(addLinkClickHandler);
}

initializeEvents();
