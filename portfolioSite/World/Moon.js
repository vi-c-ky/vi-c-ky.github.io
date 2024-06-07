import Experience from "../Experience";
import * as THREE from "three";

export default class Moon{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene;
        
        const geometry = new THREE.SphereGeometry(3, 32, 32);
        const moonTextute = new THREE.TextureLoader().load("./moon.jpg")
        const normalTexture = new THREE.TextureLoader().load('normal.jpg');
        const material = new THREE.MeshStandardMaterial( { map:moonTextute , normalMap:normalTexture} );
        const moon = new THREE.Mesh( geometry, material );
        moon.position.z = 20;
        moon.position.x = -10;
        this.animate = this.moveAnimation.bind(moon)

        this.scene.add( moon );
    }

    moveAnimation(){
        this.rotation.x += 0.05;
        this.rotation.y += 0.075;
        this.rotation.z += 0.05;
    }
}