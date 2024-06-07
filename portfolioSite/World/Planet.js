import Experience from "../Experience";
import * as THREE from "three";

export default class Planet{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene;
        
        const geometry = new THREE.BoxGeometry( 3,3,3 );
        const vickyTextute = new THREE.TextureLoader().load("./vicky.png")
        const material = new THREE.MeshStandardMaterial( { map:vickyTextute } );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.z = -5;
        cube.position.x = 2;
        this.animate = this.moveAnimation.bind(cube)

        this.scene.add( cube );
    }

    moveAnimation(){
        this.rotation.y += 0.01;
        this.rotation.z += 0.01;
    }
}