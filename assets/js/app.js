let html = '';

// print function
function print(message) {
  var outputDiv = document.getElementById('soundboard');
  outputDiv.innerHTML = message;
}

// List all phrases fron JSON
html += '<ul>';
for ( var phrase in phrases ) {
	html += '<li>' + phrases[phrase].say + '</li>';
}
html += '</ul>';

// Print html on the page
print(html);