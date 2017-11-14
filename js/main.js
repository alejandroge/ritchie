var stage, background;
var keyboard = {
};
var intv;
var character;
var grav = 0.8;
var bounce_value = 0;

stage = new Kinetic.Stage({
    container: 'game',
    width: 960,
    height: 500
});

function nivelUno() {
    background = new Kinetic.Layer();
    character = new Heroe();
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight();
    background.add(character);
    stage.add(background);
}

function moveCharacter() {
    if(keyboard[37]) {
        character.walkBack();
    }
    if(keyboard[39]) {
        character.walkForward();
    }
}

function addKeyBoardEvents() {
    addEvent(document, "keydown", function(e){
        keyboard[e.keyCode] = true;
    });

    addEvent(document, "keyup", function(e){
        keyboard[e.keyCode] = false;
    });

    function addEvent(element, eventName, func){
        if(element.addEventListener){
            element.addEventListener(eventName, func, false);
        } else if(element.attachEvent) {
            element.attachEvent(eventName, func);
        }   
    }
}

function collision (a,b) {
    var hit = false;

    // Horizontal collisions
    if(b.getX()+b.getWidth() >= a.getX() && b.getX() < a.getX()+a.getWidth()){
        // Vertical collisions
        if(b.getY()+b.getHeight() >= a.getY() && b.getY() < a.getY()+a.getHeight())
            hit = true;
    }

    // A collides B
    if(b.getX() <= a.getX() && b.getX()+b.getWidth() >= a.getX()+a.getWidth()){
        if(b.getY() <= a.getY() && b.getY()+b.getHeight() >= a.getY()+a.getHeight())
            hit = true;
    }

    // B collides A
    if(a.getX() <= b.getX() && a.getX()+a.getWidth() >= b.getX()+b.getWidth()){
        if(a.getY() <= b.getY() && a.getY()+a.getHeight() >= b.getY()+b.getHeight())
            hit = true;
    }

    return hit;
}

function applyForces(){
    character.applyGravity(grav, bounce_value);
}

addKeyBoardEvents();
nivelUno();
intv = setInterval(frameLoop, 1000/20);
function frameLoop () {
    applyForces();
    moveCharacter();
    stage.draw();
}