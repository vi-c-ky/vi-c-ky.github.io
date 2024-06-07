import * as THREE from "three";
import Sizes from "./utilities/Sizes.js";
import Camera from "./utilities/Camera.js";
import Renderer from "./utilities/Renderer.js";
import Time from "./utilities/Time.js";
import World from "./World/World.js";

export default class Experience{
    static instance
    constructor(canvas){
        console.log("experience");
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.sizes = new Sizes();
        this.Time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();
        console.log(this)
        document.body.onscroll = this.moveCamera.bind(this)


        this.Time.on("update",()=>{this.update()})
    
    
    }
    update(){
        console.log("updated")
        this.camera.update()
        this.renderer.update()
    }

    moveCamera() {
        const t = document.body.getBoundingClientRect().top;
      
        this.camera.perspectiveCamera.position.z = t * -0.01;
        this.camera.perspectiveCamera.position.x = t * -0.0002;
        this.camera.perspectiveCamera.rotation.y = t * -0.0002;
        this.world.cube.animate()
        this.world.venus.animate()
        this.world.moon.animate()
    
      }

   
}