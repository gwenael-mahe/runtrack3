$(function(){
    var victoire = [];
    $('button').click(function() {
        $('#arc1').appendTo($('#melangees'));
        $('#arc2').appendTo($('#melangees'));
        $('#arc3').appendTo($('#melangees'));
        $('#arc4').appendTo($('#melangees'));
        $('#arc5').appendTo($('#melangees'));
        $('#arc6').appendTo($('#melangees'));
        shuffleElements( $('img') );
        if(document.getElementById('victoire') != null){
            var ele = document.getElementById('victoire');
            ele.remove();
        }
        if(document.getElementById('defaite') != null){
            var ele = document.getElementById('defaite');
            ele.remove();
        }
        victoire = [];
        test = 0;
    });
    $('#arc1').click(function() {
        $('#arc1').appendTo($('#rangees'));
        victoire.push(1);
        var perfect = [1,2,3,4,5,6];
        var test = 0;
        if(victoire.length === 6){

            for (var i = 0; i < perfect.length; ++i) {
    
                if (victoire[i] == perfect[i]){
                    
                    ++test;
                    if(test == 6){
                        var b = document.body;
                        var newarticle = document.createElement('article');
                        newarticle.setAttribute("id","victoire")
                        newarticle.textContent = "Vous avez gagné";
                        b.append(newarticle);
                    }
                }
                else{
                     var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","defaite")
                    newarticle.textContent = "Vous avez perdu";
                    b.append(newarticle);
                    break;
                }
            }
        }
        
    });
    $('#arc2').click(function() {
        $('#arc2').appendTo($('#rangees'));
        victoire.push(2);
        var perfect = [1,2,3,4,5,6];
        var test = 0;
        if(victoire.length === 6){

            for (var i = 0; i < perfect.length; ++i) {
    
                if (victoire[i] == perfect[i]){
                    
                    ++test;
                    if(test == 6){
                        var b = document.body;
                        var newarticle = document.createElement('article');
                        newarticle.setAttribute("id","victoire")
                        newarticle.textContent = "Vous avez gagné";
                        b.append(newarticle);
                    }
                }
                else{
                     var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","defaite")
                    newarticle.textContent = "Vous avez perdu";
                    b.append(newarticle);
                    break;
                }
            }
        }
    });
    $('#arc3').click(function() {
        $('#arc3').appendTo($('#rangees'));
        victoire.push(3);
        var perfect = [1,2,3,4,5,6];
        var test = 0;
        if(victoire.length === 6){

            for (var i = 0; i < perfect.length; ++i) {
    
                if (victoire[i] == perfect[i]){
                    
                    ++test;
                    if(test == 6){
                        var b = document.body;
                        var newarticle = document.createElement('article');
                        newarticle.setAttribute("id","victoire")
                        newarticle.textContent = "Vous avez gagné";
                        b.append(newarticle);
                    }
                }
                else{
                     var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","defaite")
                    newarticle.textContent = "Vous avez perdu";
                    b.append(newarticle);
                    break;
                }
            }
        }
    });
    $('#arc4').click(function() {
        $('#arc4').appendTo($('#rangees'));
        victoire.push(4);
        var perfect = [1,2,3,4,5,6];
        var test = 0;
        if(victoire.length === 6){

            for (var i = 0; i < perfect.length; ++i) {
    
                if (victoire[i] == perfect[i]){
                    
                    ++test;
                    if(test == 6){
                        var b = document.body;
                        var newarticle = document.createElement('article');
                        newarticle.setAttribute("id","victoire")
                        newarticle.textContent = "Vous avez gagné";
                        b.append(newarticle);
                    }
                }
                else{
                     var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","defaite")
                    newarticle.textContent = "Vous avez perdu";
                    b.append(newarticle);
                    break;
                }
            }
        }
    });
    $('#arc5').click(function() {
        $('#arc5').appendTo($('#rangees'));
        victoire.push(5);
        var perfect = [1,2,3,4,5,6];
        var test = 0;
        if(victoire.length === 6){

            for (var i = 0; i < perfect.length; ++i) {
    
                if (victoire[i] == perfect[i]){
                    
                    ++test;
                    if(test == 6){
                        var b = document.body;
                        var newarticle = document.createElement('article');
                        newarticle.setAttribute("id","victoire")
                        newarticle.textContent = "Vous avez gagné";
                        b.append(newarticle);
                    }
                }
                else{
                     var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","defaite")
                    newarticle.textContent = "Vous avez perdu";
                    b.append(newarticle);
                    break;
                }
            }
        }
    });
    $('#arc6').click(function() {
        $('#arc6').appendTo($('#rangees'));
        victoire.push(6);
    var perfect = [1,2,3,4,5,6];
    var test = 0;
    if(victoire.length === 6){
        for (var i = 0; i < perfect.length; ++i) {

            if (victoire[i] == perfect[i]){
                
                ++test;
                if(test == 6){
                    var b = document.body;
                    var newarticle = document.createElement('article');
                    newarticle.setAttribute("id","victoire")
                    newarticle.textContent = "Vous avez gagné";
                    b.append(newarticle);
                }
            }
            else{
                 var b = document.body;
                var newarticle = document.createElement('article');
                newarticle.setAttribute("id","defaite")
                newarticle.textContent = "Vous avez perdu";
                b.append(newarticle);
                break;
            }
        }
    }
    });
});
function shuffleElements($elements) {
	var i, index1, index2, temp_val;

	var count = $elements.length;
	var $parent = $elements.parent();
	var shuffled_array = [];


	// populate array of indexes
	for (i = 0; i < count; i++) {
		shuffled_array.push(i);
	}

	// shuffle indexes
	for (i = 0; i < count; i++) {
		index1 = (Math.random() * count) | 0;
		index2 = (Math.random() * count) | 0;

		temp_val = shuffled_array[index1];
		shuffled_array[index1] = shuffled_array[index2];
		shuffled_array[index2] = temp_val;
	}

	// apply random order to elements
	$elements.detach();
	for (i = 0; i < count; i++) {
		$parent.append( $elements.eq(shuffled_array[i]) );
	}
}