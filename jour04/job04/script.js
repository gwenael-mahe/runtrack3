$(document).ready(function(){
    $("#afficher").click(function(){
        $.ajax({
            datatype: "json",
            url: "users.php",
            success: function(datatype){
                var user = JSON.parse(datatype);
                console.log(user);
                for(i = 0; i <= user.length; ++i){
                    $("tbody").append('<tr id='+(i + 1)+'></tr>');
                    $.each(user[i], function(key, value){
                        $("tbody #" + (i + 1)).append("<td>" + value + "</td>");
                    })
                }
            }
        })
    })
})