$(function () {

var arr = []
$("li").each(function() {
    arr.push(this.innerHTML);
});
console.log(arr);

var spoilers = ['John Snow', 'Yegritte', 'The Seven', 'the Seven', 'Vahlor Morgulis', 'White Walkers', '#spoilers', 'spoiler alert', '#spoileralert', '#sorrynotsorry'];
var comments = arr;
var i;
var k;


console.log("so far so good");
for (i = 0; i < spoilers.length; i++) {
    
    
    for (k = 0; k < comments.length; k++) {
        
        console.log("checking if " + spoilers[i] +" is in post " + comments[k]);
        
        if (comments[k].indexOf(spoilers[i]) >= 0 ) {
        
            console.log("TRUE");
            $(".text").text(function() {
               return $(this).text().replace(comments[k], "SPOIER ALLERT!!!");
            });
        
            
        }
        
        else{
            
            console.log("FALSE");
        } 
    }
}`
function updateContent() {
      var updateCheck = 3000;
      var rightNow = Date.now();
      var updateSince = rightNow - updateCheck; 

        $.ajax ({
         type: "GET",
         url: "/comments",
         dataType: "json",
         data: { 
            updateSince: updateSince
          },
         success: function(data, textStatus, jqXHR) {
            // check for duplicates
            for (var i = 0; i < data.length; i++) {
               $('#').html( "<li>" + data[i]['userName'] + data[i]['comment']"</li>");
            }
         }
      });
    
    
   }
   //updateContent();
   setInterval(updateContent, 5000);

});