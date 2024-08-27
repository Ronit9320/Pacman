import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'

const PacmanIcon = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();
        
        // Set up a camera with a perspective view
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create a renderer and set its size
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create the Pac-Man geometry (a yellow sphere with a wedge removed)
        const pacmanGeometry = new THREE.SphereGeometry(1, 32, 32, 0.35 * Math.PI, 1.3 * Math.PI);
        const pacmanMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const pacmanMesh = new THREE.Mesh(pacmanGeometry, pacmanMaterial);
        scene.add(pacmanMesh);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate Pac-Man
            pacmanMesh.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Clean up on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '200px', height: '200px' }} />;
}

export default PacmanIcon