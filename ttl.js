AFRAME.registerComponent("ttl",
  {
      schema: {
          time: {type: "number", default: 100}
      },
      init: function(){
          this.ticks = 0;
          this.lifetime = this.data.time
      },
      tick: function(){
          this.lifetime--
          if(this.lifetime <= 0){
              //TTL has expired remove the entity 
              this.el.sceneEl.removeChild(this.el)
          }
      }
    

  })