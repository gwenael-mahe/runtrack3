$(document).ready(function(){ 
    for(i=1;i<9;++i){
        $('body').append("<div class='objimg' id='box"+i+"'><img src='"+i+"'></div>");
    }
    $('body').append("<div class='objimg' id='emptyimg'></div>");
});
function shuffle(){
    for(i=0;i<8;++i){
        var rand = Math.floor(Math.random()*8);
        $('#obj'+i).after($('#obj'+rand));
    }
}
shuffle();