
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('heartTap', function(request, response) {
  var SaveObject = Parse.Object.extend(Parse.User);
  var saveObject = new Parse.Query(SaveObject);
  saveObject.equalTo('objectId', request.params.userId);
  saveObject.first({
    useMasterKey: true,
    success: function(Objects) {
      Objects.save(null, {
        useMasterKey: true,
        success: function(object) {
          object.increment('hearts');
          object.save(null, {useMasterKey: true});
          console.log('Cloud Code: hearts rating has increased by 1.', object);
          response.success('Cloud Code: hearts rating has increased by 1.');

        }
      });
    }
  });

});
