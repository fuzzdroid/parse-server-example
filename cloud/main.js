
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define(“heartUser”, function(request, response) {

    var shareQuery = new Parse.Query(“User”);
    shareQuery.get(request.params.userName, {
      success: function(object) {
        console.log(object)
        object.increment(“hearts”);
        object.save();
      },
      error: function(error) {
        console.error(error)
      },
      useMasterKey: true
    });

  });


