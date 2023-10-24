
let davorDanach = null;
function which(stat) {
    davorDanach = stat
    console.log(davorDanach)
    return davorDanach
}



function trennen() {
    event.preventDefault();
    const txt = document.body.querySelector("#textInput").value;
    const trennPunkt = document.body.querySelector("#trenner").value;
    const output = document.body.querySelector("p");
    let slicer = txt.search(trennPunkt);
    let davor = false
    davor = davorDanach === 1 ? true : false
    console.log(slicer)
    
    if (davor) {
        output.innerHTML = `${txt.slice(0, slicer)} <br> ${txt.slice(slicer)}`
    } else {
        output.innerHTML = `${txt.slice(0, slicer +1)} <br> ${txt.slice(slicer +1)}`
    }
}