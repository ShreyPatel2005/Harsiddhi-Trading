import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Interactive3DCake = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9ff);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 9000);
    camera.position.set(6, 6, 6);
    camera.lookAt(0, 0, 0);

    // Renderer with enhanced settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(800, 600);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Function to handle window resize
    const updateSize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    // Initial size setup and event listener
    updateSize();
    window.addEventListener('resize', updateSize);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 15, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    // Rim lighting
    const rimLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
    rimLight.position.set(-8, 5, -5);
    scene.add(rimLight);

    // Point light for extra glow
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 20);
    pointLight.position.set(0, 8, 0);
    scene.add(pointLight);

    // Cake group
    const cakeGroup = new THREE.Group();
    cakeGroup.position.y = 1.5; // Shift the entire cake group upwards
    scene.add(cakeGroup);

    // Animated color materials
    const bottomCakeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x87CEEB,
      shininess: 50,
      specular: 0x666666
    });

    const topCakeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffb6c1,
      shininess: 50,
      specular: 0x666666
    });

    const frostingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 100,
      specular: 0xaaaaaa,
      transparent: true,
      opacity: 0.95
    });

    const cherryMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff1493,
      shininess: 120,
      specular: 0xffffff
    });

    // Bottom cake layer (larger)
    const bottomCakeGeometry = new THREE.CylinderGeometry(3, 3, 1.5, 64);
    const bottomCake = new THREE.Mesh(bottomCakeGeometry, bottomCakeMaterial);
    bottomCake.position.y = 0.75;
    bottomCake.castShadow = true;
    bottomCake.receiveShadow = true;
    cakeGroup.add(bottomCake);

    // Top cake layer (smaller)
    const topCakeGeometry = new THREE.CylinderGeometry(2.2, 2.2, 1.2, 64);
    const topCake = new THREE.Mesh(topCakeGeometry, topCakeMaterial);
    topCake.position.y = 2.1;
    topCake.castShadow = true;
    topCake.receiveShadow = true;
    cakeGroup.add(topCake);

    // Bottom layer frosting
    const bottomFrostingGeometry = new THREE.CylinderGeometry(3.2, 3.2, 0.2, 64);
    const bottomFrosting = new THREE.Mesh(bottomFrostingGeometry, frostingMaterial);
    bottomFrosting.position.y = 1.6;
    bottomFrosting.castShadow = true;
    bottomFrosting.receiveShadow = true;
    cakeGroup.add(bottomFrosting);

    // Top layer frosting
    const topFrostingGeometry = new THREE.CylinderGeometry(2.4, 2.4, 0.15, 64);
    const topFrosting = new THREE.Mesh(topFrostingGeometry, frostingMaterial);
    topFrosting.position.y = 2.78;
    topFrosting.castShadow = true;
    topFrosting.receiveShadow = true;
    cakeGroup.add(topFrosting);

    // Dripping frosting for bottom layer
    for (let i = 0; i < 20; i++) {
      const dripGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const drip = new THREE.Mesh(dripGeometry, frostingMaterial);
      const angle = (i / 20) * Math.PI * 2;
      drip.position.x = Math.cos(angle) * (2.9 + Math.random() * 0.3);
      drip.position.z = Math.sin(angle) * (2.9 + Math.random() * 0.3);
      drip.position.y = 1.2 - Math.random() * 0.4;
      drip.scale.y = 1.5 + Math.random() * 1;
      drip.castShadow = true;
      cakeGroup.add(drip);
    }

    // Dripping frosting for top layer
    for (let i = 0; i < 14; i++) {
      const dripGeometry = new THREE.SphereGeometry(0.06, 16, 16);
      const drip = new THREE.Mesh(dripGeometry, frostingMaterial);
      const angle = (i / 14) * Math.PI * 2;
      drip.position.x = Math.cos(angle) * (2.1 + Math.random() * 0.2);
      drip.position.z = Math.sin(angle) * (2.1 + Math.random() * 0.2);
      drip.position.y = 2.4 - Math.random() * 0.3;
      drip.scale.y = 1.2 + Math.random() * 0.8;
      drip.castShadow = true;
      cakeGroup.add(drip);
    }

    // Animated sprinkles on both layers
    const sprinkleColors = [0xff69b4, 0xff1493, 0x00ff7f, 0xffd700, 0xff4500, 0x9370db, 0x00bfff];
    const sprinkles = [];

    // Bottom layer sprinkles
    for (let i = 0; i < 40; i++) {
      const sprinkleGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.2);
      const sprinkleMaterial = new THREE.MeshPhongMaterial({ 
        color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
        shininess: 150,
        specular: 0xffffff
      });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2.8;
      sprinkle.position.x = Math.cos(angle) * radius;
      sprinkle.position.z = Math.sin(angle) * radius;
      sprinkle.position.y = 1.7 + Math.random() * 0.1;
      sprinkle.rotation.x = Math.random() * Math.PI;
      sprinkle.rotation.y = Math.random() * Math.PI;
      sprinkle.rotation.z = Math.random() * Math.PI;
      sprinkle.castShadow = true;
      sprinkles.push(sprinkle);
      cakeGroup.add(sprinkle);
    }

    // Top layer sprinkles
    for (let i = 0; i < 25; i++) {
      const sprinkleGeometry = new THREE.BoxGeometry(0.04, 0.04, 0.15);
      const sprinkleMaterial = new THREE.MeshPhongMaterial({ 
        color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
        shininess: 150,
        specular: 0xffffff
      });
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2;
      sprinkle.position.x = Math.cos(angle) * radius;
      sprinkle.position.z = Math.sin(angle) * radius;
      sprinkle.position.y = 2.85 + Math.random() * 0.1;
      sprinkle.rotation.x = Math.random() * Math.PI;
      sprinkle.rotation.y = Math.random() * Math.PI;
      sprinkle.rotation.z = Math.random() * Math.PI;
      sprinkle.castShadow = true;
      sprinkles.push(sprinkle);
      cakeGroup.add(sprinkle);
    }

    // Cherries on both layers
    const cherryPositions = [
      // Bottom layer cherries
      { x: 2.2, z: 1.5, y: 1.8 }, { x: -1.8, z: 2.1, y: 1.8 }, { x: 1.5, z: -2.3, y: 1.8 }, 
      { x: -2.4, z: -1.2, y: 1.8 }, { x: 0.8, z: 2.6, y: 1.8 }, { x: -2.6, z: 0.5, y: 1.8 },
      // Top layer cherries
      { x: 1.3, z: 1.1, y: 2.95 }, { x: -1.1, z: 1.4, y: 2.95 }, { x: 1.0, z: -1.3, y: 2.95 }, 
      { x: -1.5, z: -0.8, y: 2.95 }
    ];
    
    cherryPositions.forEach((pos, index) => {
      // Cherry body
      const cherryGeometry = new THREE.SphereGeometry(0.15, 20, 20);
      const cherry = new THREE.Mesh(cherryGeometry, cherryMaterial);
      cherry.position.set(pos.x, pos.y, pos.z);
      cherry.castShadow = true;
      cakeGroup.add(cherry);

      // Cherry stem
      const stemGeometry = new THREE.CylinderGeometry(0.012, 0.012, 0.12, 8);
      const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22, shininess: 60 });
      const stem = new THREE.Mesh(stemGeometry, stemMaterial);
      stem.position.set(pos.x, pos.y + 0.18, pos.z);
      stem.rotation.z = (Math.random() - 0.5) * 0.3;
      cakeGroup.add(stem);
    });

    // Enhanced candle on top layer
    const candleGeometry = new THREE.CylinderGeometry(0.06, 0.07, 0.8, 16);
    const candleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xfffacd,
      shininess: 40
    });
    const candle = new THREE.Mesh(candleGeometry, candleMaterial);
    candle.position.y = 3.3;
    candle.castShadow = true;
    cakeGroup.add(candle);

    // Animated flame with glow effect
    const flameGeometry = new THREE.SphereGeometry(0.1, 12, 12);
    const flameMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffa500,
      transparent: true,
      opacity: 0.9
    });
    const flame = new THREE.Mesh(flameGeometry, flameMaterial);
    flame.position.y = 3.8;
    flame.scale.set(0.8, 1.6, 0.8);
    cakeGroup.add(flame);

    // Flame glow
    const glowGeometry = new THREE.SphereGeometry(0.2, 12, 12);
    const glowMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffff88,
      transparent: true,
      opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.y = 3.8;
    glow.scale.set(1.5, 2, 1.5);
    cakeGroup.add(glow);

    // Elegant plate
    const plateGeometry = new THREE.CylinderGeometry(4.5, 4.5, 0.15, 64);
    const plateMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1a1a1a,
      shininess: 200,
      specular: 0xffffff,
      reflectivity: 0.8
    });
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.position.y = 1.425; // Adjust plate position relative to the shifted cake group
    plate.receiveShadow = true;
    scene.add(plate);

    // Animation variables
    let time = 0;

    // Smooth animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.012;
      
      // Smooth cake rotation
      cakeGroup.rotation.y += 0.008;
      
      // Animated colors for cake layers
      const hue1 = (Math.sin(time * 0.5) + 1) * 0.5;
      const hue2 = (Math.sin(time * 0.7 + Math.PI) + 1) * 0.5;
      
      bottomCakeMaterial.color.setHSL(0.55 + hue1 * 0.1, 0.7, 0.7); // Blue variations
      topCakeMaterial.color.setHSL(0.9 + hue2 * 0.1, 0.6, 0.8); // Pink variations
      
      // Animated flame with realistic flicker
      if (flame && glow) {
        const flicker = Math.sin(time * 8) * 0.1 + Math.sin(time * 12) * 0.05;
        flame.scale.y = 1.6 + flicker;
        flame.material.opacity = 0.9 + flicker * 0.1;
        
        glow.scale.setScalar(1.5 + flicker * 0.3);
        glow.material.opacity = 0.3 + flicker * 0.1;
        
        // Flame color animation
        const flameHue = 0.1 + Math.sin(time * 3) * 0.02;
        flame.material.color.setHSL(flameHue, 1, 0.6);
      }
      
      // Animated sprinkles with color shifting and floating
      sprinkles.forEach((sprinkle, index) => {
        sprinkle.position.y += Math.sin(time * 2 + index) * 0.001;
        sprinkle.rotation.y += 0.003;
        sprinkle.rotation.x += 0.002;
        
        // Color animation for sprinkles
        const sprinkleHue = (time * 0.3 + index * 0.1) % 1;
        sprinkle.material.color.setHSL(sprinkleHue, 0.8, 0.6);
      });
      
      // Subtle frosting shimmer
      frostingMaterial.specular.setHSL(0, 0, 0.7 + Math.sin(time * 2) * 0.2);
      
      // Plate reflection animation
      if (plate) {
        plateMaterial.specular.setHSL(0, 0, 0.8 + Math.sin(time) * 0.1);
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction for camera
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Subtle camera movement based on mouse
      camera.position.x = 6 + mouseX * 2;
      camera.position.y = 6 + mouseY * 1;
      camera.lookAt(0, 1.5, 0);
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center items-center  bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div 
        ref={mountRef} 
        className="border-4 border-white  shadow-2xl overflow-hidden"
        style={{ width: '800px', height: '600px' }}
      />
    </div>
  );
};

export default Interactive3DCake;