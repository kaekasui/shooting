enchant();

window.onload = function() {
    var game = new Game(320, 320);
    game.keybind(90, 'a');
    game.fps = 24;
    game.preload('chara1.gif');
    game.preload('icon0.gif');
    // The images used in the game should be preloaded

    game.onload = function() {
        var bear = new Sprite(32, 32);
        bear.x = 8;
        bear.y = 8;
        bear.image = game.assets['chara1.gif'];
        bear.time = 0;

        bear.addEventListener('enterframe', function(e) {
            // check input (from key or pad) on every frame
            if (game.input.right) {
                bear.x += 2;
            }
            if (game.input.left) {
                bear.x -= 2;
            }

            if (game.input.up) {
                bear.y -= 2;
            }
            if (game.input.down) {
                bear.y += 2;
            }
            if (game.input.a) {
                bear.time += 1;
                if (bear.time >= 5) {
                  create_bullet(game, bear.x, bear.y);
                  bear.time = 0;
                }
            }
        });

        // add bear to rootScene (default scene)
        game.rootScene.addChild(bear);

        //create_generator(game);    
    };
    game.start();
};

function create_bullet(game, x, y) {
  var bullet = new Sprite(16, 16);
  bullet.x = x;
  bullet.y = y;
  bullet.image = game.assets['icon0.gif'];
  bullet.frame = 62;
  bullet.addEventListener('enterframe', function(e) {
    // check input (from key or pad) on every frame
    bullet.x += 8;
  });

  // add bear to rootScene (default scene)
  game.rootScene.addChild(bullet);
}

function create_enemy(game, x, y) {
  var obj = new Sprite(16, 16);
  obj.x = x;
  obj.y = y;
  obj.image = game.assets['icon0.gif'];
  obj.frame = 24;
  obj.addEventListener('enterframe', function(e) {
    // check input (from key or pad) on every frame
    obj.x += 8;
  });

  // add bear to rootScene (default scene)
  game.rootScene.addChild(obj);
}

function create_generator(game) {
  var obj = new Sprite(16, 16);
  obj.time = 0;
  obj.addEventListener('enterframe', function(e) {
    // check input (from key or pad) on every frame
    obj.time += 1;
    if (obj.time >= 48) {
      var x = 320;
      var y = 320;//rand(320);
      create_enemy(game, x, y);
      obj.time = 0;
    }
  });

  // add bear to rootScene (default scene)
  game.rootScene.addChild(obj);
}
