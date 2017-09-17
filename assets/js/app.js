let html = '';

// print function for #soundboard
function print(message) {
  const outputDiv = document.getElementById('soundboard');
  outputDiv.innerHTML = message;
}

// Open soundboard container
html += '<div class="soundboard-container">';

// List all phrases from JSON
html += '<ul>';
for ( let phrase in phrases ) {
	html += '<li><button>' + phrases[phrase].say + '</button></li>';
}
html += '</ul>';

// Close soundboard container
html += '</div> <!-- .soundboard-container -->';

// Print soundboard html on the page
print(html);

// Text to speech on click
function say( msg ) {
    with(speechSynthesis) {
        const s = new(SpeechSynthesisUtterance)(msg);
        s.voice = getVoices()[0];
        speak(s);
    }
}

// what does the TTS say
const tag = document.querySelectorAll('button');
for ( let i = 0; i < tag.length; i++ ) {
    tag[i].addEventListener('click', function(e) {
        say(tag[i].innerHTML);
    });
}