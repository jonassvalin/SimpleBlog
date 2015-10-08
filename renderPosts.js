// This JavaScript program reads "posts.json" and renders
// the data to the page. Inspired by Curran Kelleher

(function() {

  // Adds a DOM structure for each post.
  function renderPosts(posts) {

    // Get the DOM element that will contain the posts.
    var postsDiv = document.getElementById("posts");

    posts.forEach(function (post) {

      // Create the DOM elements.
      var postDiv = document.createElement("div"),
          postNameDiv = document.createElement("a"),
          postContentDiv = document.createElement("div");

      // Set the content of each element.
      postNameDiv.innerHTML = post.name;
      postNameDiv.setAttribute('href', "#post" + post.id);
      postContentDiv.innerHTML = post.content;

      // Set CSS classes on each div so they can be styled.
      postDiv.setAttribute("class", "post");
      postNameDiv.setAttribute("class", "post-name");
      postContentDiv.setAttribute("class", "post-content");

      // Assemble the post div.
      postDiv.appendChild(postNameDiv);
      postDiv.appendChild(postContentDiv);

      // Add the post div to the container for posts.
      postsDiv.appendChild(postDiv);
    });
  }

  // Fetches the file "posts.json" and passes the parsed JSON object
  // into the given callback function.
  function getPosts(callback){

    // Fetch the JSON file using jQuery
    $.getJSON( "posts.json", function( data ) {
      {
        callback(data);
      }
    });
  }

  // The main program, which gets then renders posts.
  getPosts(function (posts) {
    renderPosts(posts);
  });
}());
