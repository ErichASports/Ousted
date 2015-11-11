$(function () {


function updateContent() {
      var updateCheck = 3000;
      var rightNow = Date.now();
      var updateSince = rightNow - updateCheck; 

        $.ajax ({
         type: "GET",
         url: "/api/reviews/",
         dataType: "json",
         data: { 
            updateSince: updateSince
          },
         success: function(data, textStatus, jqXHR) {
            // check for duplicates
            for (var i = 0; i < data.length; i++) {
               $('#').html( "<li>" + data[i]['guestName'] + ' was reviewed by ' + data[i]['userName'] + "</li>");
            }
         }
      });
    
    
   }
   //updateContent();
   setInterval(updateContent, 5000);

});