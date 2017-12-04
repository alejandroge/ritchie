var stage, background, gAssets;
var score;
var keyboard = {
};
var intv;
var character;
var grav = 9;
var bounce_value = 0;
var flag = false;
var imgEnemy = new Image();
var imgHeroe = new Image();
var imgBG = new Image();
var imgCoin = new Image();
imgEnemy.src = 'images/MALE-BODY.png'
imgHeroe.src = 'images/FEMALE-BODY.png'
imgBG.src = 'images/cityscape.jpg'
imgCoin.src = 'images/coin.png'

var game = new Game();

gAssets = new Kinetic.Group({
    x: 0,
    y: 0
});

stage = new Kinetic.Stage({
    container: 'game',
    width: 1280,
    height: 600
});

bgImg = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imgBG,
    width: stage.getWidth(),
    height: stage.getHeight()
});

score = new Kinetic.Text({
    text: 'Puntaje: 0',
    height: 25,
    width: 150,
    x: stage.getWidth()-150,
    y: 20,
    fill: 'BlanchedAlmond',
    fontFamily: 'Arial',
    fontSize: 20
});

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

function moveBground(){
    if(character.getX() > (stage.getWidth()/2) && keyboard[39]){
        character.vx = 2;
        assets = gAssets.children;
        for(i in assets) {
            var asset = gAssets.children[i];
            asset.move(-5, 0);
        }
    } else {
        character.vx = 10;
    }
}

function moveEnemies() {
    var enemies = gAssets.children;
    for(i in enemies){
        var enemy = enemies[i];
        if(enemy instanceof Enemy){
            enemy.move(0);
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
                    character.vy *= -0.8;
                    platform.remove();
                    game.score += 5;
                }else {
                    console.log("Fin del juego");
                    gAssets.removeChildren();
                    document.querySelector('#game-over').style.display = 'block';
                    document.querySelector('#game').style.display = 'none';
                    window.clearInterval(intv);
                    game.level=1;
                    flag = false;
                }
            }
            else if(platform instanceof Platform && character.getY() < platform.getY() && character.vy > 0){
                character.count = 0;
                character.setY(platform.getY() - character.getHeight());
                character.vy *= bounce_value;
            }
            else if(platform instanceof Coin) {
                platform.remove();
                game.score += 1;
            }
            else if(platform instanceof Door && game.key) {
                if(game.level == 1) {
                    gAssets.removeChildren();
                    window.clearInterval(intv);
                    game.level = 2;
                    secondLevel();
                } else if (game.level == 2) {
                    gAssets.removeChildren();
                    window.clearInterval(intv);
                    game.level = 3;
                    thirdLevel();
                } else if(game.level == 3) {
                    console.log('Ganaste papu.');
                    gAssets.removeChildren();
                    document.querySelector('#win').style.display = 'block';
                    document.querySelector('#game').style.display = 'none';
                    document.querySelector('#score').innerHTML = game.score;
                    window.clearInterval(intv);
                    game.level=1;
                    flag = false;
                }
            }
        }
    }
}

function updateText () {
    score.setText('Puntaje: '+game.score);
}

addKeyBoardEvents();
function frameLoop () {
    applyForces();
    updateText();
    checkCollPlat();
    moveBground();
    moveCharacter();
    moveEnemies();
    stage.draw();
}
