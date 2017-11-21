
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('heartUser', function(request, response) {
  
  Parse.Cloud.useMasterKey();
  
  var query = new Parse.Query(Parse.User); 

      query.equalTo('objectId', request.params.userName);
      
      query.first({
            success: function(object) {

               object.increment('hearts');

                  //do something to the object

                  object.save(null, { useMasterKey: true }).then(
                        function (object) {
                              console.log('Object Saved Successfully');  
                        },
                        function (error) {
                              console.log('Error Saving Object -- Response Error');        
                        }
                  );

                  console.log(JSON.stringify(object));                   response.success(object);
            },
            error: function(error) {
                  response.error('Error Message');
            }
      });


  });


