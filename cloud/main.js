
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartIt', function(request, response) {

Parse.Cloud.useMasterKey();
var userId =request.params.itemId;
var user = new Parse.User();
user.set("objectId", userId);
user.increment(“hearts”);
user.save;


});
