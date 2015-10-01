(function() {

  // Gets the appropriate content for the given fragment identifier.
  function getContent(fragmentId, callback){

    $.ajax({
    type: "GET",
    url: fragmentId + ".html",
    dataType: "html",
    success: function(data)
    {
      callback(data);
    }
    });
  }

  // Sets the "active" class on the active navigation link.
  function setActiveLink(fragmentId){
    var navbarDiv = document.getElementById("navbar-links"),
        links = navbarDiv.children,
        i, link, pageName;
    for(i = 0; i < links.length; i++){
      link = links[i];
      pageName = link.children[0].getAttribute("href").substr(1);
      if(pageName === fragmentId) {
        link.setAttribute("class", "active");
      } else {
        link.removeAttribute("class");
      }
    }
  }

  // Updates dynamic content based on the fragment identifier.
  function navigate(){
    console.log("Navigating");

    // Get a reference to the "content" div.
    var contentDiv = document.getElementById("content"),

        // Isolate the fragment identifier using substr.
        // This gets rid of the "#" character.
        fragmentId = location.hash.substr(1);

    // Set the "content" div innerHTML based on the fragment identifier.
    getContent(fragmentId, function (content) {
      $('div#content').html(content);
    });

    // Toggle the "active" class on the link currently navigated to.
    setActiveLink(fragmentId);

    if(fragmentId === "home") {
      // The main program, which gets then renders posts.
      console.log("Posts")
      getPosts(function (posts) {
        renderPosts(posts);
      });
    }
  }

  // If no fragment identifier is provided,
  if(!location.hash) {

    // default to #home.
    location.hash = "#home";
  }

  // Navigate once to the initial fragment identifier.
  //navigate();
  window.addEventListener("hashchange", navigate);

}());
