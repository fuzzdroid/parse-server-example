
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define(“heartTap”, function(request, response) {
    Parse.Cloud.useMasterKey();

    var User = Parse.Object.extend("User");
    var user = new User();

    var user.id = request.params.userId;
    var increment = request.params.increment;
	
user.increment(“hearts”);

    user.save(null, {
            success: function(user) {
            response.success(true);
            },
            error: function(user, error) {
            response.error(“error.”);
            }
    });
});
