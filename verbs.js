const verbs = [
	{frenchInfinitive : "parler",
	 englishInfinitive: "to speak"}, 
	{frenchInfinitive : "jouer",
	 englishInfinitive: "to play"}, 
	{frenchInfinitive : "aimer",
	 englishInfinitive: "to like"}
];
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
	const french = verb.frenchInfinitive;
	const english = verb.englishInfinitive;
	const stem = french.substring(0, french.length - 2);
	$(".stem").html(stem);
	$(".english").html(english);
}

function changeVerb() {
	verbIndex = nextDifferentVerbIndex();
	updateVerbTable(verbs[verbIndex]);
}

function init() { 
	$("#next").click(changeVerb);
	
	changeVerb();
}

$(init); // The init() function will be called when the document has loaded.
