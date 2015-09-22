$(document).ready(function(){
    $("#search").click(function(){
        var q= $("#inputbox").val();
        console.log(q);
        $.get ('https://www.googleapis.com/books/v1/volumes?q=' + q + '&startIndex=0&maxResults=20')
        .done(function(data){
            console.log(data);
            console.log(data.items[0].volumeInfo.title)

        }) 


        

    });

   })