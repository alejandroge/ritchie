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
    fill: '#222',
    fontFamily: 'Arial',
    fontSize: 20
});

function firstLevel() {
    if(flag) return;
    flag = true;
    game.score = 0;
    game.key = true;
    background = new Kinetic.Layer();

    /* Enemies */
    gAssets.add(new Enemy(200, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(850, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(550, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(550, stage.getHeight()/1.5-135, imgEnemy));
    gAssets.add(new Enemy(190, stage.getHeight()/3-135, imgEnemy));


    /* Platforms */
    var floor = new Platform(0, stage.getHeight()-15);
    floor.setWidth(stage.getWidth()*2);
    gAssets.add(floor);
    gAssets.add(new Platform(20, stage.getHeight()/1.5));
    gAssets.add(new Platform(190, stage.getHeight()/3));
    gAssets.add(new Platform(600, stage.getHeight()/1.5));

    /* Coins */
    gAssets.add(new Coin(350, stage.getHeight()/3-150, imgCoin));
    gAssets.add(new Coin(700, stage.getHeight()/1.5-150, imgCoin));
    gAssets.add(new Coin(400, stage.getHeight()-170, imgCoin));

    /* Door */
    gAssets.add(new Door(1200, stage.getHeight()-135));

    character = new Heroe(imgHeroe);
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg);
    background.add(character);
    background.add(gAssets);
    background.add(score);
    console.log(character);
    stage.add(background);

    intv = setInterval(frameLoop, 1000/20);
}

function secondLevel() {
    background = new Kinetic.Layer();
    game.key = true;
    console.log('Bienvenido al segundo nivel.');

    /* Enemies */
   gAssets.add(new Enemy(400, stage.getHeight()-128, imgEnemy));
   gAssets.add(new Enemy(410, stage.getHeight()/3.5-115, imgEnemy));
   gAssets.add(new Enemy(90, stage.getHeight()/1.5-115, imgEnemy));
   gAssets.add(new Enemy(610, stage.getHeight()/1.5-115, imgEnemy));
   gAssets.add(new Enemy(910, stage.getHeight()-128, imgEnemy));
   gAssets.add(new Enemy(1210, stage.getHeight()-128, imgEnemy));
   gAssets.add(new Enemy(1410, stage.getHeight()-128, imgEnemy));
    gAssets.add(new Enemy(810, stage.getHeight()/3.5-128, imgEnemy));
   gAssets.add(new Enemy(1110, stage.getHeight()/1.5-128, imgEnemy));
   gAssets.add(new Enemy(1310, stage.getHeight()/3.5-128, imgEnemy));
   gAssets.add(new Enemy(1610, stage.getHeight()/1.25-150, imgEnemy));
   /* Platforms */
   var floor = new Platform(0, stage.getHeight()-15);
   floor.setWidth(stage.getWidth()*2);
   gAssets.add(floor);
   gAssets.add(new Platform(90, stage.getHeight()/1.5));
   gAssets.add(new Platform(410, stage.getHeight()/3.5));
   gAssets.add(new Platform(610, stage.getHeight()/1.5));
   gAssets.add(new Platform(810, stage.getHeight()/3.5));
   gAssets.add(new Platform(1110, stage.getHeight()/1.5));
   gAssets.add(new Platform(1310, stage.getHeight()/3.5));
   gAssets.add(new Platform(1610, stage.getHeight()/1.35));
   gAssets.add(new Platform(1900, stage.getHeight()/2.15));

   /* Coins */
   gAssets.add(new Coin(350, stage.getHeight()/3-150, imgCoin));
   gAssets.add(new Coin(450, stage.getHeight()/1.5-50, imgCoin));
   gAssets.add(new Coin(750, stage.getHeight()/3-150, imgCoin));
   gAssets.add(new Coin(1150, stage.getHeight()/1.5-250, imgCoin));
   gAssets.add(new Coin(1650, stage.getHeight()/2.15-250, imgCoin));

   /* Door */
   gAssets.add(new Door(1970, stage.getHeight()/2.15-120));

    character = new Heroe(imgHeroe);
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg);
    background.add(character);
    background.add(gAssets);
    background.add(score);
    stage.add(background);

    intv = setInterval(frameLoop, 1000/20);
}

function thirdLevel() {
    background = new Kinetic.Layer();
    game.key = true;
    console.log('Bienvenido al Ultimo nivel.');
    /* Enemies */
    gAssets.add(new Enemy(400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(410, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(90, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(100, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(610, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(980, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(1100, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(1400, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(1400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(1550, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(1850, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(1950, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(1950, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(1550, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(1950, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(2100, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(2350, stage.getHeight()/1.5-115, imgEnemy));
    gAssets.add(new Enemy(2400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(2650, stage.getHeight()/3.5-115, imgEnemy));
    gAssets.add(new Enemy(2700, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(3100, stage.getHeight()/1.5-170, imgEnemy));
    gAssets.add(new Enemy(3150, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(3350, stage.getHeight()/3.5-185, imgEnemy));
    gAssets.add(new Enemy(3750, stage.getHeight()/1.5-245, imgEnemy));
    gAssets.add(new Enemy(3800, stage.getHeight()-135, imgEnemy));


    /* Platforms */
    var floor = new Platform(0, stage.getHeight()-15);
    floor.setWidth(stage.getWidth()*4);
    gAssets.add(floor);
    gAssets.add(new Platform(90, stage.getHeight()/1.5));
    gAssets.add(new Platform(410, stage.getHeight()/3.5));
    gAssets.add(new Platform(610, stage.getHeight()/1.5));
    gAssets.add(new Platform(920, stage.getHeight()/1.5));
    gAssets.add(new Platform(1020, stage.getHeight()/3.5));
    gAssets.add(new Platform(1100, stage.getHeight()/1.5));
    gAssets.add(new Platform(1350, stage.getHeight()/3.5));
    gAssets.add(new Platform(1500, stage.getHeight()/1.5));
    gAssets.add(new Platform(1800, stage.getHeight()/1.5));
    gAssets.add(new Platform(1900, stage.getHeight()/3.5));
    gAssets.add(new Platform(2300, stage.getHeight()/1.5));
    gAssets.add(new Platform(2600, stage.getHeight()/3.5));
    gAssets.add(new Platform(3000, stage.getHeight()/1.5-90));
    gAssets.add(new Platform(3300, stage.getHeight()/3.5-70));
    gAssets.add(new Platform(3700, stage.getHeight()/1.5-130));
    gAssets.add(new Platform(4000, stage.getHeight()/3.5));

    /* Coins */
    gAssets.add(new Coin(350, stage.getHeight()/3-130, imgCoin));
    gAssets.add(new Coin(450, stage.getHeight()/1.5-130, imgCoin));
    gAssets.add(new Coin(780, stage.getHeight()/1.5-130, imgCoin));
    gAssets.add(new Coin(1100, stage.getHeight()/1.5-130, imgCoin));
    gAssets.add(new Coin(1600, stage.getHeight()/1.5-130, imgCoin));
    gAssets.add(new Coin(1900, stage.getHeight()/3.5-130, imgCoin));
    gAssets.add(new Coin(2200, stage.getHeight()/3.5-130, imgCoin));
    gAssets.add(new Coin(2400, stage.getHeight()/1.5-130, imgCoin));
    gAssets.add(new Coin(2700, stage.getHeight()/3.5-130, imgCoin));
    gAssets.add(new Coin(3100, stage.getHeight()-128, imgCoin));
    gAssets.add(new Coin(3400, stage.getHeight()/3.5-130, imgCoin));

    /* Door */
    gAssets.add(new Door(4100, stage.getHeight()/3.5-120));


    character = new Heroe(imgHeroe);
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg);
    background.add(character);
    background.add(gAssets);
    background.add(score);
    stage.add(background);

    intv = setInterval(frameLoop, 1000/20);
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
