window.onload = function(){
    const WHITE_KEYS =["z","x","c","v","b","n","m"];
    const BLACK_KEYS = ["s","d","g","h","j"];
    var keys = document.querySelectorAll(".key");
    const whiteKeys = document.querySelectorAll(".key.white");
    const blackKeys = document.querySelectorAll(".key.black");
    keys.forEach(key=>{
        key.addEventListener("click",()=>playnote(key))
    })
    document.addEventListener("keydown",e=>{
        if(e.repeat)            //to prevent from playing when the key is pressed for a long duration 
        return;
        const key = e.key;
        const whiteKeyIndex = WHITE_KEYS.indexOf(key);
        const blackKeyIndex = BLACK_KEYS.indexOf(key);
        
        if(whiteKeyIndex > -1) {
            playnote(whiteKeys[whiteKeyIndex]);
            console.log(whiteKeyIndex);
        };
        if(blackKeyIndex > -1) {
            playnote(blackKeys[blackKeyIndex])
            console.log(blackKeys[blackKeyIndex]);
        };
    })
    function playnote(key){
        const noteAudio = document.getElementById(key.dataset.note);
        noteAudio.currentTime = 0;
        noteAudio.play();
        key.classList.add("active");
        noteAudio.addEventListener("ended",()=>{
            key.classList.remove("active");
        })
    }
}