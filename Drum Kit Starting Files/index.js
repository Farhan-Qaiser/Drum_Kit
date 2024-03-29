


var numberOfKeys = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfKeys; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);

    }
        
    );

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key)

    buttonAnimation(event.key)
}
)


function makeSound(key) {
     switch (key) {
            case "l":
                
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
                break;
            
            case "k":

                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
                break;
            
            case "j":

                var tom3 = new Audio('./sounds/snare.mp3');
                tom3.play();
                break;
            
            case "d":

                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
                break;
            
            
            case "s":

                var snare = new Audio('./sounds/tom-3.mp3');
                snare.play();
                break;
            
            
            case "a":

                var kick_bass = new Audio('./sounds/kick-bass.mp3');
                kick_bass.play();
                break;
            
            
            case "w":

                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            
        
            default:
                break;
        }
}


function buttonAnimation(currentKey) {
    
    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function() {
    activeKey.classList.remove("pressed");
}, 50);

}

