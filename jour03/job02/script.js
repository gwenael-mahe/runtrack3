$(function(){
    $('button').click(function() {
        $('#arc1').appendTo($('#melangees'));
        $('#arc2').appendTo($('#melangees'));
        $('#arc3').appendTo($('#melangees'));
        $('#arc4').appendTo($('#melangees'));
        $('#arc5').appendTo($('#melangees'));
        $('#arc6').appendTo($('#melangees'));
        shuffleElements( $('img') );
    });
    $('#arc1').click(function() {
        $('#arc1').appendTo($('#rangees'));
    });
    $('#arc2').click(function() {
        $('#arc2').appendTo($('#rangees'));
    });
    $('#arc3').click(function() {
        $('#arc3').appendTo($('#rangees'));
    });
    $('#arc4').click(function() {
        $('#arc4').appendTo($('#rangees'));
    });
    $('#arc5').click(function() {
        $('#arc5').appendTo($('#rangees'));
    });
    $('#arc6').click(function() {
        $('#arc6').appendTo($('#rangees'));
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