let html = '';

// print function for #soundboard
function print(message) {
  var outputDiv = document.getElementById('soundboard');
  outputDiv.innerHTML = message;
}

// Open soundboard container
html += '<div class="soundboard-container">';

// List all phrases from JSON
html += '<ul>';
for ( var phrase in phrases ) {
	html += '<li><input type="button" value="' + phrases[phrase].say + '"></input></li>';
}
html += '</ul>';

// Close soundboard container
html += '</div> <!-- .soundboard-container -->';

// Print soundboard html on the page
print(html);

// Text to speech on click
function say( msg ) {
    with(speechSynthesis) {
        var s = new(SpeechSynthesisUtterance)(msg);
        s.voice = getVoices()[0];
        speak(s);
    }
}

// what does the TTS say
var tag = document.querySelectorAll('input');
for ( i = 0; i < tag.length; i++ ) {
    tag[i].addEventListener('click', function(e) {
        say(e.target.value);
    });
}
