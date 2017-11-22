
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define(“heartTap”, function(request, response) {
  

    var User = Parse.Object.extend("User");
    var user = new User();

    var user.id = request.params.userId;
   
	
user.increment(“hearts”);

    user.save(null,{ useMasterKey:true} {
            success: function(user) {
            response.success(true);
            },
            error: function(user, error) {
            response.error(“error.”);
            }
    });
});
