
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('heartUser', function(req, res) {

Parse.Cloud.useMasterKey();
               var user = new Parse.Object("User");
               user.userName = req.params.userName;
               user.increment("hearts");
               user.save;
  res.success('yo');

});
