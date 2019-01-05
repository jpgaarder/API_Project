console.log(postComment);
var firebaseRef = new Firebase("https://ws-bcc.firebaseio.com/");

var postComment = function() {
  var name = document.getElementById("name").value,
      comment = document.getElementById("comment").value;
  
  if (name && comment) {
      firebaseRef.push({
      name: name,
      comment: comment
    });
  }
  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';
};

firebaseRef.on("child_added", function(snapshot) {
  var comment = snapshot.val();
  addComment(comment.name, comment.comment);
});

var addComment = function(name, comment) {
  var comments = document.getElementById("comments");
  comments.innerHTML = "<hr><h4>" + name + " says:</h4><p>" + comment + "</p>" + comments.innerHTML;
};