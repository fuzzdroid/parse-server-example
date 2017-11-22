
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartTap', function(request, response) {
	
    var userQuery = new Parse.Query(Parse.User);
    userQuery.equalTo('objectId', request.params.userId);

    userQuery.first
    ({
        useMasterKey: true,
        success: function(thisuser)
        	{
        	thisuser.increment('hearts');
        	thisuser.save(null, { useMasterKey: true });
	      	response.success("ok");
        	},
        error: function(error)
        	{
                response.error("failed with error: " + error.message);
        	}
    });
});
