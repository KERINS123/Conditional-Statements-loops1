var scores =[24,32,17];	//array of scores.
var arrayLength = scores.lenght;	//items in array.
var roundNumber = 0;	//current round.
var msg = ' ';	//message.

for (var i =0; i < arrayLength; i++) {
	
	//arrays are zero based (so 0 is round1).
	// Add to the current round.
	roundNumber = (i=1);
	
	//write the current tound to message.
	msg += 'Round ' + roundNumber + ': ';
	
	//get the score from the scores array.
	msg+= scores [i] + '<br/>';
}

document .getElementById('answer').innerHTML=msg;