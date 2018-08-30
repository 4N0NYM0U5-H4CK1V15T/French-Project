var verbs = ["parler", "jouer", "aimer"];
var verbIndex = -1;

function nextDifferentVerbIndex() {
	function nextVerbIndex() {
		return Math.floor((Math.random() * verbs.length));
	}
	var i=nextVerbIndex();
	while (i == verbIndex) // Keep calling nextVerbIndex() until you get a new value
		i=nextVerbIndex();
	verbIndex = i;
	return i;
}

function updateVerbTable(verb) {
	var stem = verb.substring(0, verb.length - 2);
	$(".stem").html(stem);
}

function changeVerb() {
	verbIndex = nextDifferentVerbIndex();
	console.log("You get " + verbIndex +" , which is " + verbs[verbIndex]);
	updateVerbTable(verbs[verbIndex]);
}

function init() { 
	console.log("The document has loaded.");
	$(".ending").each(
		function(idx) {
		}
	);
	$("#next").click(changeVerb);
	
	for (var i=0; i<verbs.length; i++)
		console.log(verbs[i]);
	
	changeVerb();
}

$(init); // The init() function will be called when the document has loaded.

console.log("Hello world");
