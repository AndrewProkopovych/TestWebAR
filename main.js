// Define variables for the scene, camera, and renderer
var scene, camera, renderer;

// Initialize the scene
function init() {
    // Create a scene
    scene = new THREE.Scene();

    // Create a camera with perspective projection
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the 3D model
    var loader = new THREE.GLTFLoader();
    loader.load(
        'your-3d-model.gltf', // Replace with the path to your 3D model
        function (gltf) {
            var model = gltf.scene;

            // Position and scale the model as needed
            model.position.set(0, 0, 0);
            model.scale.set(0.1, 0.1, 0.1);

            // Add the model to the scene
            scene.add(model);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

    // Create an ambient light
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create a directional light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the 3D model (optional)
    scene.rotation.y += 0.005;

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

// Call the init function to set up the scene
init();

// Start the animation loop
animate();