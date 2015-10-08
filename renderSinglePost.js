//This JavaScript displays the single requested blog post
(function() {

  function renderPost(posts) {
      var postDiv = document.getElementById("the-post"),
          postId = location.hash.substr(5),
          postNameDiv = document.createElement("div"),
          postContentDiv = document.createElement("div");

      thePost = $.grep(posts, function(n, i) {
        return n.id===postId;
      });

      thePost.forEach(function (post) {
        postNameDiv.innerHTML = post.name;
        postContentDiv.innerHTML = post.content;

        // Set CSS classes on each div so they can be styled.
        postDiv.setAttribute("class", "post");
        postNameDiv.setAttribute("class", "post-name");
        postContentDiv.setAttribute("class", "post-content");

        // Assemble the post div.
        postDiv.appendChild(postNameDiv);
        postDiv.appendChild(postContentDiv);
      });

  }

  // Fetches the file "posts.json" and passes the parsed JSON object
  // into the given callback function.
  function getPosts(callback){

    // Fetch the JSON file using jQuery
    $.getJSON("posts.json", function(data) {
      {
        callback(data);
      }
    });
  }

  // The main program, which gets then renders the post.
  getPosts(function (posts) {
    renderPost(posts);
  });

}());
