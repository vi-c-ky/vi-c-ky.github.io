import Experience from "../Experience";
import * as THREE from "three";
import Planet from "./Planet";
import Moon from "./Moon";
import Venus from "./Venus";


export default class World{
    constructor(){
        this.experience = new Experience()
        this.cube = new Planet()
        this.moon = new Moon()
        this.venus = new Venus()

        const spaceTexture = new THREE.TextureLoader().load('./space.jpg');
        this.experience.scene.background = spaceTexture;

        //this.plannet2 = new Planet()
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.experience.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.experience.scene.add(directionalLight);

        Array(200).fill().forEach(this.addStar.bind(this));

        
    }

    addStar(){
        
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        this.experience.scene.add(star);
    }
}