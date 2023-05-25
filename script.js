//typewriterin js koodi
// hetki mennyt siitä kun tein D;, tää osa
// muistaakseni ohjaa tekstin olemista ruudussa
function sleep(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}
// looppaavat tekstit
const phrases = ["This is MAIN page","Welcome !","...","No projects atm...","look for contacts below"];

// yhdistäminen html:ään
const el = document.getElementById("typewriter");
// ohjaa tekstin näyttöaikaa
let sleepTime = 100;
// ei muista
let curPhraseIndex = 0;
// itse robotti
const writeLoop = async () => {
    while (true){
        let curWord = phrases[curPhraseIndex];
        
        for (let i = 0; i < curWord.length; i++){
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--){
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if(curPhraseIndex === phrases.length - 1){
            curPhraseIndex = 0;
        }else{
            curPhraseIndex++;
        }
    }
};

writeLoop();


// Haitari JS

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
