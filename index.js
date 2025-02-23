// TODO: play sound from keyboard
function playSound(drumSound){
    let audio = new Audio("./sounds/" + drumSound + ".mp3");
    audio.play();
}

window.addEventListener("keydown", function(key){
    switch(key.key){
        case "1":
            playsound("tom-1");
            break;
    
        case "2":
            playsound("tom-2");
            break;

        case "3":
            playsound("tom-3");
            break;
    
        case "4":
            playsound("tom-4");
            break;

        case "5":
            playsound("snare");
            break;

        case "6":
            playsound("crash");
            break;
            
        case "7":
            playsound("kick-bass");
            break;
    }
});