$.ajax({
    url: "expression.txt",
    datatype: "text",
    success: function(n){
        $("#button").click(function(){
            $('body').append('<p>'+n+'</p>');
        });
    }
});