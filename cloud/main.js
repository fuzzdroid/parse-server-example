
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartTap', function(request, response) {
  var SaveObject = Parse.Object.extend("Parse.User");
  var studentNote = new SaveObject();
  studentNote.id = request.params.userId;
  studentNote.increment("hearts");
  //student.save(null,{useMasterKey:true}).then(
  studentNote.save().then(
    function(note){
      console.log("Cloud Code: User note rating has increased by 1.", object);
      response.success('Cloud Code: User note rating has increased by 1.');
    }, response.error
  )
});
