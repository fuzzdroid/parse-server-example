
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define(‘heartTap’, function(request, response) {
  var SaveObject = Parse.Object.extend(“User”);
  var saveObject = new Parse.Query(SaveObject);
  saveObject.equalTo("objectId", request.params.userId);
  saveObject.first({
    useMasterKey: true,
    success: function(Objects) {
      Objects.save(null, {
        useMasterKey: true,
        success: function(object) {
          object.increment(“hearts”);
          object.save();
          console.log("Cloud Code: User note rating has increased by 1.", object);
          response.success('Cloud Code: User note rating has increased by 1.');

        }
      });
    }
  });

});
