import Experience from "../Experience";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"


export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes =  this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.canvas = this.experience.canvas


        this.createPerspectiveCamera()
        this.createOrthographicCamera()
        this.setOrbitControls();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(75,this.sizes.aspect,0.1,1000)
        
        this.scene.add(this.perspectiveCamera)
    }

    createOrthographicCamera(){
        this.frustrum = 5
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum),
            (this.sizes.aspect * this.sizes.frustrum),
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -100,
            100
        )
        this.scene.add(this.orthographicCamera)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
    }


    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix()

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum);
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum);
        this.orthographicCamera.top = this.frustrum
        this.orthographicCamera.bottom = -this.frustrum
        this.orthographicCamera.updateProjectionMatrix
    }

   

    update(){
        this.controls.update();
    }

     moveCamera() {
        console.log(this)
        const t = document.body.getBoundingClientRect().top;
      
        this.camera.position.z = t * -0.01;
        this.camera.position.x = t * -0.0002;
        this.camera.rotation.y = t * -0.0002;
      }


}