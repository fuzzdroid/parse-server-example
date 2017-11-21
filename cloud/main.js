
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define(“heartIt”, function(request, response) {

Parse.Cloud.useMasterKey();
var userId =request.params.itemId;
var user = new Parse.User();
user.set("objectId", userId);
user.fetch().then(function(concreteUser){

    concreteUser.increment(“hearts”, 1);
    concreteUser.save().then(function(incrementedUser){
        response.success();
    },function(saveError){
        response.error(saveError);
    });

},function(error){
    response.error(error);
});
