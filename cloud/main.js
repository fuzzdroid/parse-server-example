
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartUser', function(request, response) {
  
Parse.Cloud.useMasterKey();

 query = new Parse.Query(“User”);
                  query.get(request.object.get(“itemId"), {
                            success: function(post) {
                            post.increment(“hearts”, 1);
                            post.save();
                            response.success();
                            },
                            error: function(error) {
                            console.error("Got an error " + error.code + " : " + error.message);
                            response.error();
                            }
                            });

});




