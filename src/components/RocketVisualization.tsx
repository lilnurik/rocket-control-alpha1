import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RocketVisualization = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ff66, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create rocket body (simplified)
    const geometry = new THREE.CylinderGeometry(0.5, 1, 4, 32);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0xcccccc,
      emissive: 0x00ff66,
      emissiveIntensity: 0.2,
    });
    const rocket = new THREE.Mesh(geometry, material);
    scene.add(rocket);

    // Position camera
    camera.position.z = 8;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      rocket.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
};

export default RocketVisualization;