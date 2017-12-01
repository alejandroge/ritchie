var stage, background, gAssets;
var score;
var keyboard = {
};
var intv;
var character;
var grav = 9;
var bounce_value = 0;

var game = new Game();

gAssets = new Kinetic.Group({
    x: 0,
    y: 0
});
stage = new Kinetic.Stage({
    container: 'game',
    width: 960,
    height: 500
});

score = new Kinetic.Text({
    text: 'Puntaje: 0',
    height: 25,
    width: 150,
    x: stage.getWidth()-150,
    y: 0,
    fill: '#222',
    fontFamily: 'Arial',
    fontSize: 20
});

function nivelUno() {
    game.score = 0;
    background = new Kinetic.Layer();

    /* Enemies */
    gAssets.add(new Enemy(200, stage.getHeight()-75));
    gAssets.add(new Enemy(850, stage.getHeight()-75));

    /* Platforms */
    var floor = new Platform(0, stage.getHeight()-20);
    floor.setWidth(stage.getWidth()*2);
    gAssets.add(floor);
    gAssets.add(new Platform(20, stage.getHeight()/1.5));
    gAssets.add(new Platform(190, stage.getHeight()/3));

    character = new Heroe();
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight();
    background.add(character);
    background.add(gAssets);
    background.add(score);
    stage.add(background);
}

function moveCharacter() {
    if(keyboard[37]) {
        character.walkBack();
    }
    if(keyboard[39]) {
        character.walkForward();
    }
    if(keyboard[38] && character.count < 2) {
        character.jump();
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

function moveEnemies() {
    var enemies = gAssets.children;
    for(i in enemies){
        var enemy = enemies[i];
        if(enemy instanceof Enemy){
            enemy.move();
        }
    }
}

function applyForces(){
    character.applyGravity(grav, bounce_value);
}

function checkCollPlat(){
    var platforms = gAssets.children;
    for(i in platforms){
        var platform = platforms[i];
        if(collision(platform, character)){
            if(platform instanceof Enemy) {
                if(character.vy > 2 && character.getY()<platform.getY()){
                    platform.remove();
                    game.score += 5;
                    console.log(game.score);
                }else {
                    console.log("Fin del juego");
                }
            }
            else if(platform instanceof Platform && character.getY() < platform.getY() && character.vy > 0){
                character.count = 0;
                character.setY(platform.getY() - character.getHeight());
                character.vy *= bounce_value;
            }
        }
    }
}

function updateText () {
    score.setText('Puntaje: '+game.score);
}

addKeyBoardEvents();
nivelUno();
intv = setInterval(frameLoop, 1000/20);
function frameLoop () {
    applyForces();
    updateText();
    checkCollPlat();
    moveCharacter();
    moveEnemies();
    stage.draw();
}