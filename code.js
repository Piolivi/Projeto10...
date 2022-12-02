var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","cf0d998f-cd7e-40bd-b9a0-5463c2f0d0c2","fb745f82-47c4-452b-b82d-b153b55dc576","695f6bc0-59d2-4369-a47b-08b9e9cbd1c8"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"1u4KCSU6W0zCErAGP_2mGA3AoHWgtI6D","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"zTkYGuGIGCwsKpK.j_75f1E3JmEH99h4","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"MzJLUmiJ0qePsBuUdeUoptJiYzQ08Pm7","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":".ou5tWt.uuhlxc99Z8FYMTF8.yKBA5_r","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"o6B_Lqgq3fhUvn7boV4pxAJB69HADAGK","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"cf0d998f-cd7e-40bd-b9a0-5463c2f0d0c2":{"name":"animalhead_chick_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R/category_animals/animalhead_chick.png","frameSize":{"x":268,"y":336},"frameCount":1,"looping":true,"frameDelay":2,"version":"5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5HVhgKMjWOBXHX_ce7zDr35W6rKKzF5R/category_animals/animalhead_chick.png"},"fb745f82-47c4-452b-b82d-b153b55dc576":{"name":"animalhead_chicken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LlqJ0xkmQ3WMNhLFgGoJwVqt8I90jkbd/category_animals/animalhead_chicken.png","frameSize":{"x":286,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"LlqJ0xkmQ3WMNhLFgGoJwVqt8I90jkbd","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":286,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LlqJ0xkmQ3WMNhLFgGoJwVqt8I90jkbd/category_animals/animalhead_chicken.png"},"695f6bc0-59d2-4369-a47b-08b9e9cbd1c8":{"name":"egg_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BNTjQDNQvtSTqQgKO.TcBSlh7K94t7By/category_food/egg.png","frameSize":{"x":267,"y":377},"frameCount":1,"looping":true,"frameDelay":2,"version":"BNTjQDNQvtSTqQgKO.TcBSlh7K94t7By","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":267,"y":377},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BNTjQDNQvtSTqQgKO.TcBSlh7K94t7By/category_food/egg.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    playerPaddle.setAnimation("animalhead_chick_1");
    playerPaddle.scale=0.5;400;
    
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    computerPaddle.setAnimation("animalhead_chicken_1");
    computerPaddle.scale=0.5;400;
    
    var ball= createSprite(200,200,10,10);
    ball.setAnimation("egg_1");
    ball.scale=0.1;2;

function draw() {
  background("Green");
  if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle))
  {
  playSound("assets/category_animals/chick.mp3", false);
  }
  
  ///quando apertar a seta mova-se para...
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=4;
     ball.velocityY=5;
  }
  
  computerPaddle.y=ball.y;

  drawnet();
    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  
  drawSprites();
  
}

function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
