var background, gAssets;
var score;
var keyboard = {
};

var intv, intb, th=0;
var character;
var grav = 9;
var bounce_value = 0;
var flag = false;
var Selected = new Heroe(imgMale);
var imgEnemy = new Image();
var imgBoss = new Image();
var imgMale = new Image();
var imgFemale = new Image();
var imgBG_1 = new Image();
var imgBG_2 = new Image();
var imgBG_3 = new Image();
var imgDog = new Image();
var imgCoin = new Image();
var imgBottle = new Image();

imgEnemy.src = 'images/CHOLO-BODY.png';
imgBoss.src = 'images/BOSS-BODY.png';
imgMale.src = 'images/MALE-BODY.png';
imgFemale.src = 'images/FEMALE-BODY.png';
imgBG_1.src = 'images/bg/cityscape_1.png';
imgBG_2.src = 'images/bg/cityscape_2.png';
imgBG_3.src = 'images/bg/cityscape_3.png';
imgCoin.src = 'images/coin.png';
imgBottle.src = 'images/bottle.png';
imgDog.src = 'images/dog.png';

const ARROW_BACK = 37;
const ARROW_FORWARD = 39;
const ARROW_UP = 38;

const game = new Game();

gAssets = new Kinetic.Group({
    x: 0,
    y: 0
});

const stage = new Kinetic.Stage({
    container: 'game',
    width: 1280,
    height: 600
});

bgImg_1 = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imgBG_1,
    width: stage.getWidth(),
    height: stage.getHeight()
});

bgImg_2 = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imgBG_2,
    width: stage.getWidth(),
    height: stage.getHeight()
});

bgImg_3 = new Kinetic.Image({
    x: 0,
    y: 0,
    image: imgBG_3,
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
    if(keyboard[ARROW_BACK]) {
        character.walkBack();
    }
    if(keyboard[ARROW_FORWARD]) {
        character.walkForward();
    }
    if(keyboard[ARROW_UP] && character.count < 2) {
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
    let hit = false;

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

function moveBground() {
    const characterFurtherThanHalfOfTheStage = () => character.getX() > (stage.getWidth() / 2);
    if (characterFurtherThanHalfOfTheStage() && keyboard[ARROW_FORWARD]) {
        character.vx = 0;
        assets = gAssets.children;
        for (i in assets) {
            let asset = gAssets.children[i];
            asset.move(-8, 0);
        }
    } else {
        character.vx = 10;
    }
}

function moveEnemies() {
    let enemies = gAssets.children;
    for(i in enemies){
        let enemy = enemies[i];
        if(enemy instanceof Enemy || enemy instanceof Dog)
            enemy.move(0);
    }
}

function applyForces(){
    character.applyGravity(grav, bounce_value);
}

function applyForcesBottles() {
    let assets = gAssets.children;
    for (i in assets){
        if (assets[i] instanceof Bottle) {
            assets[i].applyThrow(grav);
        }
    }
}

function checkCollPlat(){
    let platforms = gAssets.children;
    for (i in platforms) {
        let platform = platforms[i];
        if (collision(platform, character)){
            if (platform instanceof Enemy || platform instanceof Dog) {
                if (character.vy > 2 && character.getY()<platform.getY()){
                    character.vy *= -0.8;
                    platform.remove();
                    game.score += 5;
                } else {
                    gAssets.removeChildren();
                    document.querySelector('#game-over').style.display = 'block';
                    document.querySelector('#game').style.display = 'none';
                    window.clearInterval(intv);
                    game.level=1;
                    flag = false;
                }
            }
            else if (platform instanceof Bottle) {
                gAssets.removeChildren();
                document.querySelector('#game-over').style.display = 'block';
                document.querySelector('#game').style.display = 'none';
                window.clearInterval(intv);
                window.clearInterval(intb);
                game.level=1;
                flag = false;
            }
            else if (platform instanceof Platform && character.getY() < platform.getY() && character.vy > 0) {
                character.count = 0;
                character.setY(platform.getY() - character.getHeight());
                character.vy *= bounce_value;
            }
            else if (platform instanceof Coin) {
                platform.remove();
                game.score += 1;
            }
            else if (platform instanceof Door && game.key) {
                if (game.level == 1) {
                    gAssets.removeChildren();
                    window.clearInterval(intv);
                    game.level = 2;
                    secondLevel();
                } else if (game.level == 2) {
                    gAssets.removeChildren();
                    window.clearInterval(intv);
                    game.level = 3;
                    thirdLevel();
                } else if (game.level == 3) {
                    gAssets.removeChildren();
                    window.clearInterval(intv);
                    game.level = 4;
                    bossLevel();
                } else if (game.level == 4) {
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

function checkColBoss() {
    if(collision(boss, character)){
        if(character.vy > 2 && character.getY()<boss.getY()){
            character.vy *= -0.8;
            boss.remove();
            console.log('Ganaste papu.');
            gAssets.removeChildren();
            document.querySelector('#win').style.display = 'block';
            document.querySelector('#game').style.display = 'none';
            document.querySelector('#score').innerHTML = game.score;
            window.clearInterval(intv);
            window.clearInterval(intb);
            game.level=1;
            flag = false;
        }else {
            gAssets.removeChildren();
            document.querySelector('#game-over').style.display = 'block';
            document.querySelector('#game').style.display = 'none';
            window.clearInterval(intv);
            game.level=1;
            flag = false;
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

function frameLoopb () {
    console.log("Hello");
    applyForces();
    applyForcesBottles();
    updateText();
    checkCollPlat();
    checkColBoss();
    moveCharacter();
    moveEnemies();
    stage.draw();
}

function bottleLoop() {
    boss.throwBottle(boss.random(-60, 60), gAssets)
}
