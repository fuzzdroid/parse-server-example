
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartIt', function(req, res) {

Parse.Cloud.useMasterKey();
var userId =req.params.itemId;
var user = new Parse.User();
user.set("objectId", userId);
user.fetch().then(function(concreteUser){

    concreteUser.increment(“hearts”, 1);
    concreteUser.save().then(function(incrementedUser){
        response.success();
    },function(saveError){
        res.error(saveError);
    });

},function(error){
    res.error(error);
});
