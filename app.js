

var stringbox = document.getElementById('stringbox')
var wordcountspan = document.getElementById('wordcount')
var charcountspan = document.getElementById('charcount')



function convertstring(textarea, action){
  if (action == 'titlecase'){
		textarea.value = toTitleCase(textarea.value)
	}
	else if (action == 'capitalcase'){
		textarea.value = CapitalCase(textarea.value)
	}
	else if (action == 'lowercase'){
		textarea.value = lowerCase(textarea.value)
	}
	else if (action == 'uppercase'){
		textarea.value = upperCase(textarea.value)
	}
  else if (action == 'randomcase'){
    textarea.value = randomCase(textarea.value)
  }
	return false
}

//reference: https://github.com/gouch/to-title-case
function toTitleCase(str){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
	var str = str.toLowerCase()
  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

//reference: https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27
function CapitalCase(str){
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

function lowerCase(str){
  return str.toLowerCase();
}

function upperCase(str){
  return str.toUpperCase();
}

function randomCase(str) {
    return str.toLowerCase().split('').map(function(str){
        return Math.random() < .5? str : str.toUpperCase();
    }).join('');
}

function wordandcharcount(){
	wordcountspan.innerHTML = stringbox.value.split(' ').length
	charcountspan.innerHTML = stringbox.value.length
}


stringbox.addEventListener('input', function(){
	wordandcharcount()
}, false)

wordandcharcount()
