import * as THREE from 'three';
import {OrbitControls} from "three/addons";
import {GLTFLoader} from "three/addons";
import sphere from "./components/sphere";
const innerWidth = window.innerWidth
const innerHeight = window.innerHeight
const mouse = {
    x: undefined,
    y: undefined
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer({
    antialias: true
})
scene.add(sphere)
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

document.body.appendChild(renderer.domElement)

function animate() {
    requestAnimationFrame(animate)
}

animate()