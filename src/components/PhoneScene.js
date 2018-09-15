import React from 'react'

class PhoneScene extends React.Component {
    render() {
        return (
        <div 
            className="phone" 
            ref={ref=>(this.container = ref)} 
        />
        );
    }

    // Turn off update in DOM - not sure why this is needed...
    // shouldComponentUpdate() {
    //     return false;
    // }

    // Once component is mounted - we can do post-processing to
    // build the scene. For static scenes, we'll likely take in
    // a data structure describing the scene (like a tree!)
    // - then build/render it here.
    componentDidMount() {
        const THREE = window.THREE;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);
        const renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.props.height, this.props.width);
        const camera = new THREE.PerspectiveCamera(
            10, this.props.width / (this.props.height*0.6),
            0.1,
            1000
        );
        camera.position.set(-5,12,10);

        // Create and add scene objects *** BEGIN
        // GLOBE
        var iphone_color = '#FAFAFA';
        var ambientLight = new THREE.AmbientLight('#EEEEEE');
        var hemiLight    = new THREE.HemisphereLight(iphone_color,
            iphone_color,0);
        var light = new THREE.PointLight(iphone_color,1,100);
        hemiLight.position.set(0,50,0);
        light.position.set(0,20,10);
        scene.add(ambientLight);
        scene.add(hemiLight);
        scene.add(light);
        var axisHelper = new THREE.AxesHelper(1.25);
        scene.add(axisHelper);

        const renderPhone = ()=> {
            renderer.render(scene,camera);
        }

        const loadScene = (collada) => {
            const dae = collada.scene;
            dae.position.set(0.4,0,0.8);
            scene.add(dae);
            renderPhone();
        }

        var loader = new THREE.ColladaLoader();
        // loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/392/iphone6.dae',loadScene);
        loader.load('model.dae',loadScene);

        // *** END

        // CONTROLS
        const controls = new THREE.TrackballControls(camera);
        controls.rotateSpeed = 5.0;
        controls.zoomSpeed = 3.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = false;
        controls.dynaicDampingFactor = 0.2;
        controls.addEventListener('change',renderPhone);

        // append renderer as child to
        // our scene div...
        this.container.appendChild(renderer.domElement);

        const animate = ()=> {
            requestAnimationFrame(animate);
            controls.update();
        };

        // start scene render animation
        animate();

        // 
        

    }
}

export default PhoneScene