import * as THREE from 'three';
import fragmentShader from '../shaders/fragment/sphereFragment.glsl'
import vertexShader from '../shaders/vertex/sphereVertex.glsl'

export default new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader
    })
)