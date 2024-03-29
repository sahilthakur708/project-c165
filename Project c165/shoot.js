AFRAME.registerComponent("shoot", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
        
          var cam = document.querySelector("#camera-rig");
          pos = cam.getAttribute("position");
  
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y + 1,
            z: pos.z - 0.5,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          bullet.setAttribute("velocity", direction.multiplyScalar(-50));
  
          var scene = document.querySelector("#scene");
  
          //set the bullet as the dynamic entity
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
  

  
          scene.appendChild(bullet);
  

        }
      });
    },

  });
  
  