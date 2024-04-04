
function changeMode() {
    var modIcon = document.getElementById("modIcon");

    var modeGet = modIcon.classList.contains("light")

    var body = document.getElementById("body");
    var btnSection = document.getElementById("btnSection");

    var opBtn = document.querySelectorAll(".opBtn");

    var value = document.getElementById("value");

    if (modeGet == true) {
        modIcon.src = "./icon/light.png";
        modIcon.classList.remove("light");
        modIcon.classList.add("dark");

        body.style.background = "#232D36";    
        btnSection.style.background = "#25313D"; 
        value.style.background = "#232D36";
        value.style.color = "#fff";
        value.style.caretColor = "#fff";
        
        for (var i =0; i < opBtn.length; i++) {
            var currentEl = opBtn[i];
            currentEl.style.color = "#010101";
        }

   

        
      

    } else {
        modIcon.src = "./icon/dark.png";
        modIcon.classList.remove("dark");
        modIcon.classList.add("light");

        body.style.background = "#fff"; 
        btnSection.style.background = "#fff"

        value.style.background = "#fff";
        value.style.color = "#010101";
        value.style.caretColor = "#010101"

        for (var i =0; i < opBtn.length; i++) {
            var currentEl = opBtn[i];
            currentEl.style.color = "#fff";
        }
    }
}