let energy = document.getElementById("energy")
let qOneAdrenaline = document.getElementById("q1")
let qTwoAdrenaline = document.getElementById("q2")
let qThreeAdrenaline = document.getElementById("q3")
let qFourAdrenaline = document.getElementById("q4")
let qFiveAdrenaline = document.getElementById("q5")
let energyBars = document.getElementById("energyBars")
let result = document.getElementById("result")
let reset = document.getElementById("resetBtn")

let energyHits = 0;
let q1Hits = null;
let q2Hits = null;
let q3Hits = null;
let q4Hits = null;
let q5Hits = null;
let energyBarHits = null;

let totalHits = 0;


let submit = document.getElementById("submitBtn");

submit.addEventListener("click", () => {
    energy = energy.value;
    qOneAdrenaline = qOneAdrenaline.value;
    qTwoAdrenaline = qTwoAdrenaline.value;
    qThreeAdrenaline = qThreeAdrenaline.value;
    qFourAdrenaline = qFourAdrenaline.value;
    qFiveAdrenaline = qFiveAdrenaline.value;
    energyBars = energyBars.value;

    energyHits = energy/10;
    q1Hits = qOneAdrenaline*energy/100*20/10;
    q2Hits = qTwoAdrenaline*energy/100*40/10;
    q3Hits = qThreeAdrenaline*energy/100*60/10;
    q4Hits = qFourAdrenaline*energy/100*80/10;
    q5Hits = qFiveAdrenaline*energy/10;
    energyBarHits = energyBars*10;

    totalHits = energyHits+q1Hits+q2Hits+q3Hits+q4Hits+q5Hits+energyBarHits;
    
    submit.style.display = "none";

    result.innerHTML = `You have ${totalHits} hits.`

})