var pointer = document.getElementById('pointer');

pointer.style.position = 'relative';


window.addEventListener('mousemove', (e) => {
    console.log(e);
    pointer.style.left = (e.clientX) + "px";
    pointer.style.top = (e.clientY) + "px";
});



var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex];
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000);

        } else {
            charIndex += 1;
        }
    }, sPerChar * 100);
}

function deleting(textIndex, text) {
    var minCharIndex = 0;
    var charIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex);
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 100);
        } else {
            charIndex -= 1;
        }
    }, sPerChar * 100);
}

