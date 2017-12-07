function firstLevel(x) {
    game.score = 0;
    if(flag) return;
    flag = true;
    game.key = true;
    background = new Kinetic.Layer();

    /* Enemies */
    gAssets.add(new Enemy(200, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(850, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(550, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(550, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy(190, stage.getHeight()/3-120, imgEnemy));

    /* Platforms */
    var floor = new Platform(0, stage.getHeight()-15);
    floor.setWidth(stage.getWidth()*2);
    gAssets.add(floor);
    gAssets.add(new Platform(20, stage.getHeight()/1.5));
    gAssets.add(new Platform(190, stage.getHeight()/3));
    gAssets.add(new Platform(550, stage.getHeight()/1.5));

    /* Coins */
    gAssets.add(new Coin(350, stage.getHeight()/3-150, imgCoin));
    gAssets.add(new Coin(700, stage.getHeight()/1.5-150, imgCoin));
    gAssets.add(new Coin(400, stage.getHeight()-170, imgCoin));

    /* Door */
    gAssets.add(new Door(1200, stage.getHeight()-135));
    GetSex(x);
    Selected = character;
    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg_1);
    background.add(character);
    background.add(gAssets);
    background.add(score);
    stage.add(background);

    intv = setInterval(frameLoop, 1000/20);
}

function secondLevel() {
    background = new Kinetic.Layer();
    game.key = true;
    console.log('Bienvenido al segundo nivel.');

    /* Enemies */
   gAssets.add(new Enemy(400, stage.getHeight()-135, imgEnemy));
   gAssets.add(new Enemy(410, stage.getHeight()/3.5-120, imgEnemy));
   gAssets.add(new Enemy(90, stage.getHeight()/1.5-120, imgEnemy));
   gAssets.add(new Enemy(610, stage.getHeight()/1.5-120, imgEnemy));
   gAssets.add(new Enemy(910, stage.getHeight()-135, imgEnemy));
   gAssets.add(new Enemy(1210, stage.getHeight()-135, imgEnemy));
   gAssets.add(new Enemy(1410, stage.getHeight()-135, imgEnemy));
   gAssets.add(new Enemy(810, stage.getHeight()/3.5-120, imgEnemy));
   gAssets.add(new Enemy(1110, stage.getHeight()/1.5-120, imgEnemy));
   gAssets.add(new Enemy(1310, stage.getHeight()/3.5-120, imgEnemy));
   gAssets.add(new Enemy(1610, stage.getHeight()/1.35-120, imgEnemy));

   /* Dogs */
   gAssets.add(new Dog(1200, stage.getHeight() - 75, imgDog));
   gAssets.add(new Dog(2000, stage.getHeight() - 75, imgDog));

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

   character.setX(0);
   character.setY(stage.getHeight()-character.getHeight());
   character.rightLimit = stage.getWidth() - character.getWidth();
   character.topLimit = stage.getHeight()-15;
   background.add(bgImg_1);
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
    gAssets.add(new Enemy(  90, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy( 100, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy( 400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy( 410, stage.getHeight()/3.5-120, imgEnemy));
    gAssets.add(new Enemy( 610, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy( 980, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy(1100, stage.getHeight()/3.5-120, imgEnemy));
    gAssets.add(new Enemy(1400, stage.getHeight()/3.5-120, imgEnemy));
    gAssets.add(new Enemy(1400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(1550, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy(1850, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy(1950, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(1950, stage.getHeight()/3.5-120, imgEnemy));
    gAssets.add(new Enemy(2100, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(2350, stage.getHeight()/1.5-120, imgEnemy));
    gAssets.add(new Enemy(2400, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(2650, stage.getHeight()/3.5-120, imgEnemy));
    gAssets.add(new Enemy(2700, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(3100, stage.getHeight()/1.5-170, imgEnemy));
    gAssets.add(new Enemy(3150, stage.getHeight()-135, imgEnemy));
    gAssets.add(new Enemy(3350, stage.getHeight()/3.5-185, imgEnemy));
    gAssets.add(new Enemy(3750, stage.getHeight()/1.5-250, imgEnemy));
    gAssets.add(new Enemy(3800, stage.getHeight()-135, imgEnemy));

    /* Dogs */
    gAssets.add(new Dog(1200, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(2000, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(3200, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(4200, stage.getHeight() - 75, imgDog));

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

    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg_2);
    background.add(character);
    background.add(gAssets);
    background.add(score);
    stage.add(background);

    intv = setInterval(frameLoop, 1000/20);
}

function bossLevel() {
    background = new Kinetic.Layer();
    game.key = true;
    console.log('Bienvenido al nivel del jefe.');

    /* Boss */
    boss = new Boss(620, stage.getHeight()/1.3-170, imgBoss);

    /* Enemies */
    gAssets.add(new Enemy(130, stage.getHeight()/1.3-170, imgEnemy));
    gAssets.add(new Enemy(950, stage.getHeight()/1.3-170, imgEnemy));

    /* Dogs */
    gAssets.add(new Dog(1200, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(2000, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(3200, stage.getHeight() - 75, imgDog));
    gAssets.add(new Dog(4200, stage.getHeight() - 75, imgDog));

    /* Platforms */
    var floor = new Platform(0, stage.getHeight()-15);
    floor.setWidth(stage.getWidth());
    gAssets.add(floor);
    gAssets.add(new Platform(130, stage.getHeight()/1.3-50));
    gAssets.add(new Platform(550, stage.getHeight()/1.3-50));
    gAssets.add(new Platform(950, stage.getHeight()/1.3-50));


    character.setX(0);
    character.setY(stage.getHeight()-character.getHeight());
    character.rightLimit = stage.getWidth() - character.getWidth();
    character.topLimit = stage.getHeight()-15;
    background.add(bgImg_3);
    background.add(character);
    background.add(boss);
    background.add(gAssets);
    background.add(score);
    stage.add(background);

    intb = setInterval(bottleLoop, 20000/20);
    intv = setInterval(frameLoopb, 1000/20);
}
