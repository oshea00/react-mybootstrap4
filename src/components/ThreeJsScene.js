import React from 'react'
import * as THREE from 'three'

class ThreeJsScene extends React.Component {
    render() {
        return (
        <div 
            className="phone" 
            ref={ref=>(this.container = ref)} 
        />
        );
    }

    // Turn off update in DOM - not sure why this is needed...
    shouldComponentUpdate() {
        return false;
    }

    // Once component is mounted - we can do post-processing to
    // build the scene. For static scenes, we'll likely take in
    // a data structure describing the scene (like a tree!)
    // - then build/render it here.
    componentDidMount() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);
        const renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(this.props.height, this.props.width);
        const camera = new THREE.PerspectiveCamera(
            30, this.props.width / this.props.height,
            0.1,
            1000
        );
        camera.position.z = 15;

        const animate = ()=> {
            requestAnimationFrame(animate);
            renderer.render(scene,camera);
        };

        // Create and add scene objects *** BEGIN
        // GLOBE
        const geometry = new THREE.SphereGeometry(1.5,25,25);
        const material = new THREE.MeshNormalMaterial();
        const globe = new THREE.Mesh(geometry,material);
        scene.add(globe);
        // LIGHT
        const light_p = new THREE.PointLight(0xffffff);
        light_p.position.set(10,10,10);
        scene.add(light_p);
        // *** END

        // append renderer as child to
        // our scene div...
        this.container.appendChild(renderer.domElement);

        // start scene render animation
        animate();

        // 
        

    }
}

export default ThreeJsScene