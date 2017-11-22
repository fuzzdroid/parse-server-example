
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartTap', function(request, response) {
var user = new Parse.User();
var query = new Parse.Query(Parse.User);
query.equalTo("objectId", request.params.userId);
query.first({
useMasterKey: true,
success: function(object) {
object.increment('hearts');
object.save();
// Set the job's success status
response.success('Success Message');
},
error: function(error) {
// Set the job's error status
response.error(request.params.objectId );
}
}); 

});
