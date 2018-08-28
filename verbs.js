$(function() { // This code will be called when the document has loaded.
	console.log("The document has loaded.");
	$(".ending").each(
		function(idx) {
			console.log(idx);
			$(this).prepend(idx + ": ");
		}
	);
	$("#next").click(function() {
		console.log("Ouch!");
	});
}
);
console.log("Hello world");
