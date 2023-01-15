AFRAME.registerComponent("enemy", {
    init: function () {
      setInterval(this.shootEnemyBullet, 2000);
    },
    shootEnemyBullet: function () {
      //get all enemies using className
      var els = document.querySelectorAll(".enemy");
   var e= document.querySelector('enemy1')
   e.addEventListener('hit',{
      
    })
      
      for (var i = 0; i < els.length; i++) {
        //enemyBullet entity

     
       
  
        var position = els[i].getAttribute("position");
  
     
  
        var scene = document.querySelector("#scene");
        scene.appendChild(els);
  
        //Three.js Vector Variables
        var position1 = new THREE.Vector3();
        var position2 = new THREE.Vector3();
  
        //Get enemey and player position using Three.js methods
        var enemy = els[i].object3D;
        var player = document.querySelector("#weapon").object3D;
  
        player.getWorldPosition(position1);
        enemy.getWorldPosition(position2);
  
        var direction = new THREE.Vector3();
  
        direction.subVectors(position1, position2).normalize();
  
        //set the velocity and it's direction
  
        els.setAttribute("velocity", direction.multiplyScalar(10));
  
        //Set dynamic-body attribute
        els.setAttribute("dynamic-body", {
          
          mass: "0",
        });
  
      }
    },
  });
  