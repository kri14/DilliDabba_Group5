import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Layers, Wind } from 'lucide-react';

export const ThreeDabbaScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isExploded, setIsExploded] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const [showSteam, setShowSteam] = useState(true);

  const isExplodedRef = useRef(false);
  isExplodedRef.current = isExploded;

  const isRotatingRef = useRef(true);
  isRotatingRef.current = isRotating;

  const showSteamRef = useRef(true);
  showSteamRef.current = showSteam;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.6);
    camera.lookAt(0, 0.2, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.2);
    scene.add(ambientLight);

    // Warm Key Light (Saffron warm glow)
    const keyLight = new THREE.DirectionalLight(0xffedd5, 2.2);
    keyLight.position.set(3, 4, 3);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    // Cool Rim Light (Teal contrast)
    const rimLight = new THREE.DirectionalLight(0x99f6e4, 1.5);
    rimLight.position.set(-3, 2, -2);
    scene.add(rimLight);

    // Soft Front Fill Light (Rani pink warm pop)
    const fillLight = new THREE.PointLight(0xfda4af, 1.0, 10);
    fillLight.position.set(0, -1, 3);
    scene.add(fillLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- MATERIALS ---
    // Stainless Steel Body
    const steelMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8e2ec,
      metalness: 0.92,
      roughness: 0.18,
    });

    // Brushed Steel Trim
    const steelTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.35,
    });

    // Brass Accent Material (Traditional Indian Pital / Brass)
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.90,
      roughness: 0.20,
    });

    // Food Materials
    const dalMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.45,
      metalness: 0.1,
    });

    const rotiMaterial = new THREE.MeshStandardMaterial({
      color: 0xfde68a,
      roughness: 0.85,
      metalness: 0.05,
    });

    const paneerGravyMaterial = new THREE.MeshStandardMaterial({
      color: 0xe11d48,
      roughness: 0.4,
      metalness: 0.1,
    });

    const paneerCubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      roughness: 0.3,
      metalness: 0.05,
    });

    const riceMaterial = new THREE.MeshStandardMaterial({
      color: 0xfafafa,
      roughness: 0.9,
      metalness: 0.0,
    });

    // --- 3-TIER PROCEDURAL TIFFIN DABBA ---
    const tierHeight = 0.52;
    const tierRadius = 0.85;

    const createCanister = (tierIndex: number, foodType: 'dal' | 'roti' | 'paneer') => {
      const tierGroup = new THREE.Group();

      // Outer Cylinder
      const cylinderGeo = new THREE.CylinderGeometry(tierRadius, tierRadius * 0.98, tierHeight, 48);
      const cylinderMesh = new THREE.Mesh(cylinderGeo, steelMaterial);
      cylinderMesh.castShadow = !isSoftwareGl;
      cylinderMesh.receiveShadow = !isSoftwareGl;
      tierGroup.add(cylinderMesh);

      // Top Rim Ring
      const rimGeo = new THREE.TorusGeometry(tierRadius * 0.99, 0.035, 16, 48);
      rimGeo.rotateX(Math.PI / 2);
      const rimMesh = new THREE.Mesh(rimGeo, steelTrimMaterial);
      rimMesh.position.y = tierHeight / 2;
      tierGroup.add(rimMesh);

      // Bottom Embossed Groove
      const bottomGrooveGeo = new THREE.TorusGeometry(tierRadius * 0.96, 0.025, 16, 48);
      bottomGrooveGeo.rotateX(Math.PI / 2);
      const bottomGrooveMesh = new THREE.Mesh(bottomGrooveGeo, brassMaterial);
      bottomGrooveMesh.position.y = -tierHeight / 2 + 0.04;
      tierGroup.add(bottomGrooveMesh);

      // Inside Food Layer
      if (foodType === 'dal') {
        const foodGeo = new THREE.CylinderGeometry(tierRadius * 0.94, tierRadius * 0.94, 0.05, 32);
        const foodMesh = new THREE.Mesh(foodGeo, dalMaterial);
        foodMesh.position.y = tierHeight / 2 - 0.06;
        tierGroup.add(foodMesh);

        // Tadka cumin flecks
        const jeeraGeo = new THREE.CapsuleGeometry(0.015, 0.06, 4, 8);
        const jeeraMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.7 });
        for (let i = 0; i < 7; i++) {
          const jeera = new THREE.Mesh(jeeraGeo, jeeraMat);
          jeera.position.set(
            (Math.random() - 0.5) * 0.9,
            tierHeight / 2 - 0.03,
            (Math.random() - 0.5) * 0.9
          );
          jeera.rotation.x = Math.PI / 2;
          jeera.rotation.z = Math.random() * Math.PI;
          tierGroup.add(jeera);
        }
      } else if (foodType === 'roti') {
        for (let r = 0; r < 3; r++) {
          const rotiGeo = new THREE.CylinderGeometry(0.72 - r * 0.02, 0.72 - r * 0.02, 0.04, 32);
          const rotiMesh = new THREE.Mesh(rotiGeo, rotiMaterial);
          rotiMesh.position.set((r - 1) * 0.04, tierHeight / 2 - 0.12 + r * 0.045, (r % 2 === 0 ? 0.03 : -0.03));
          rotiMesh.rotation.y = r * 0.8;
          tierGroup.add(rotiMesh);
        }
      } else if (foodType === 'paneer') {
        const gravyGeo = new THREE.CylinderGeometry(tierRadius * 0.94, tierRadius * 0.94, 0.05, 32);
        const gravyMesh = new THREE.Mesh(gravyGeo, paneerGravyMaterial);
        gravyMesh.position.y = tierHeight / 2 - 0.06;
        tierGroup.add(gravyMesh);

        const cubeGeo = new THREE.BoxGeometry(0.18, 0.12, 0.18);
        for (let p = 0; p < 4; p++) {
          const cube = new THREE.Mesh(cubeGeo, paneerCubeMaterial);
          cube.position.set(-0.25 + (p % 2) * 0.22, tierHeight / 2 - 0.01, -0.2 + p * 0.15);
          cube.rotation.y = Math.random() * 0.6;
          tierGroup.add(cube);
        }

        const riceGeo = new THREE.SphereGeometry(0.42, 16, 16);
        riceGeo.scale(1, 0.25, 1);
        const riceMesh = new THREE.Mesh(riceGeo, riceMaterial);
        riceMesh.position.set(0.28, tierHeight / 2 - 0.03, 0);
        tierGroup.add(riceMesh);
      }

      // Side latch clips
      const latchGeo = new THREE.BoxGeometry(0.08, 0.18, 0.05);
      const latchLeft = new THREE.Mesh(latchGeo, brassMaterial);
      latchLeft.position.set(-tierRadius - 0.02, 0, 0);
      tierGroup.add(latchLeft);

      const latchRight = new THREE.Mesh(latchGeo, brassMaterial);
      latchRight.position.set(tierRadius + 0.02, 0, 0);
      tierGroup.add(latchRight);

      return tierGroup;
    };

    const tierBottom = createCanister(0, 'paneer');
    const tierMiddle = createCanister(1, 'roti');
    const tierTop = createCanister(2, 'dal');

    masterGroup.add(tierBottom);
    masterGroup.add(tierMiddle);
    masterGroup.add(tierTop);

    // --- TOP LID WITH HANDLE ---
    const lidGroup = new THREE.Group();
    const lidDomeGeo = new THREE.CylinderGeometry(tierRadius * 0.92, tierRadius * 0.99, 0.14, 48);
    const lidDomeMesh = new THREE.Mesh(lidDomeGeo, steelMaterial);
    lidDomeMesh.position.y = 0.07;
    lidGroup.add(lidDomeMesh);

    const ringGeo = new THREE.TorusGeometry(0.18, 0.04, 16, 32);
    const ringMesh = new THREE.Mesh(ringGeo, brassMaterial);
    ringMesh.position.y = 0.24;
    lidGroup.add(ringMesh);

    masterGroup.add(lidGroup);

    // --- STEEL VERTICAL ARCH CARRIER FRAME & HANDLE ---
    const frameGroup = new THREE.Group();

    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-tierRadius - 0.06, -0.6, 0),
      new THREE.Vector3(-tierRadius - 0.06, 1.2, 0),
      new THREE.Vector3(-0.6, 1.6, 0),
      new THREE.Vector3(0, 1.7, 0),
      new THREE.Vector3(0.6, 1.6, 0),
      new THREE.Vector3(tierRadius + 0.06, 1.2, 0),
      new THREE.Vector3(tierRadius + 0.06, -0.6, 0),
    ]);

    const handleTubeGeo = new THREE.TubeGeometry(handleCurve, 40, 0.035, 12, false);
    const handleMesh = new THREE.Mesh(handleTubeGeo, steelMaterial);
    handleMesh.castShadow = !isSoftwareGl;
    frameGroup.add(handleMesh);

    const gripGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.45, 16);
    gripGeo.rotateZ(Math.PI / 2);
    const gripMesh = new THREE.Mesh(gripGeo, brassMaterial);
    gripMesh.position.set(0, 1.7, 0);
    frameGroup.add(gripMesh);

    const clampGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.18, 16);
    const clampMesh = new THREE.Mesh(clampGeo, brassMaterial);
    clampMesh.position.set(0, 1.35, 0);
    frameGroup.add(clampMesh);

    masterGroup.add(frameGroup);

    // --- CONTACT SHADOW DISK ---
    const shadowGeo = new THREE.CircleGeometry(tierRadius * 1.35, 32);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.22,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -0.78;
    scene.add(shadowMesh);

    // --- FLOATING INDIAN FUSION SPICE PARTICLES & STEAM ---
    const spiceCount = isSoftwareGl ? 8 : 22;
    const spiceGroup = new THREE.Group();

    const spiceGeo = new THREE.OctahedronGeometry(0.06, 0);
    const spiceColors = [0xff5a1f, 0xf59e0b, 0xf43f5e, 0x10b981];
    const spiceParticles: { mesh: THREE.Mesh; speedY: number; rotSpeed: number; radius: number; angle: number }[] = [];

    for (let i = 0; i < spiceCount; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: spiceColors[i % spiceColors.length],
        roughness: 0.3,
        metalness: 0.6,
      });
      const mesh = new THREE.Mesh(spiceGeo, mat);
      const angle = (i / spiceCount) * Math.PI * 2;
      const radius = 1.3 + Math.random() * 0.8;
      const y = -0.5 + Math.random() * 2.0;

      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      mesh.scale.setScalar(0.7 + Math.random() * 0.7);
      spiceGroup.add(mesh);

      spiceParticles.push({
        mesh,
        speedY: 0.004 + Math.random() * 0.008,
        rotSpeed: 0.01 + Math.random() * 0.02,
        radius,
        angle
      });
    }
    scene.add(spiceGroup);

    // Steam particles
    const steamCount = isSoftwareGl ? 6 : 14;
    const steamGroup = new THREE.Group();
    const steamGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const steamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
    });
    const steamParticles: { mesh: THREE.Mesh; startY: number; speedY: number; maxLife: number; life: number }[] = [];

    for (let s = 0; s < steamCount; s++) {
      const steamMesh = new THREE.Mesh(steamGeo, steamMat);
      steamMesh.position.set((Math.random() - 0.5) * 0.4, 0.8 + Math.random() * 0.4, (Math.random() - 0.5) * 0.4);
      steamGroup.add(steamMesh);
      steamParticles.push({
        mesh: steamMesh,
        startY: 0.7,
        speedY: 0.008 + Math.random() * 0.012,
        maxLife: 1.5 + Math.random() * 1.5,
        life: Math.random() * 1.5,
      });
    }
    scene.add(steamGroup);

    // Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.005;
      targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX));

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    dom.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    let animId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotatingRef.current && !isDragging) {
        targetRotationY += 0.008;
      }

      masterGroup.rotation.y = THREE.MathUtils.damp(masterGroup.rotation.y, targetRotationY, 8, delta);
      masterGroup.rotation.x = THREE.MathUtils.damp(masterGroup.rotation.x, targetRotationX, 8, delta);

      const exploded = isExplodedRef.current;
      const baseBottomY = -0.52;
      const baseMiddleY = 0.0;
      const baseTopY = 0.52;
      const baseLidY = 0.80;
      const baseFrameY = 0.0;

      const targetBottomY = exploded ? -0.85 : baseBottomY;
      const targetMiddleY = exploded ? 0.05 : baseMiddleY;
      const targetTopY = exploded ? 0.95 : baseTopY;
      const targetLidY = exploded ? 1.65 : baseLidY;
      const targetFrameY = exploded ? 0.35 : baseFrameY;

      tierBottom.position.y = THREE.MathUtils.damp(tierBottom.position.y, targetBottomY, 5, delta);
      tierMiddle.position.y = THREE.MathUtils.damp(tierMiddle.position.y, targetMiddleY, 5, delta);
      tierTop.position.y = THREE.MathUtils.damp(tierTop.position.y, targetTopY, 5, delta);
      lidGroup.position.y = THREE.MathUtils.damp(lidGroup.position.y, targetLidY, 5, delta);
      frameGroup.position.y = THREE.MathUtils.damp(frameGroup.position.y, targetFrameY, 5, delta);

      for (const spice of spiceParticles) {
        spice.angle += 0.015;
        spice.mesh.position.x = Math.cos(spice.angle) * spice.radius;
        spice.mesh.position.z = Math.sin(spice.angle) * spice.radius;
        spice.mesh.position.y += spice.speedY;
        if (spice.mesh.position.y > 2.0) spice.mesh.position.y = -0.6;
        spice.mesh.rotation.x += spice.rotSpeed;
        spice.mesh.rotation.y += spice.rotSpeed;
      }

      if (showSteamRef.current) {
        steamGroup.visible = true;
        for (const steam of steamParticles) {
          steam.life += delta;
          steam.mesh.position.y += steam.speedY;
          steam.mesh.position.x += Math.sin(steam.life * 2) * 0.003;
          const scale = 0.8 + steam.life * 0.8;
          steam.mesh.scale.set(scale, scale, scale);

          if (steam.life > steam.maxLife) {
            steam.life = 0;
            steam.mesh.position.y = exploded ? targetTopY + 0.3 : 0.8;
            steam.mesh.position.x = (Math.random() - 0.5) * 0.3;
            steam.mesh.position.z = (Math.random() - 0.5) * 0.3;
          }
        }
      } else {
        steamGroup.visible = false;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      dom.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[460px] rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-800/95 to-slate-900 text-white border-2 border-orange-500/40 shadow-2xl overflow-hidden flex flex-col justify-between group">
      
      {/* Background Indian Festive Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff5a1f]/30 to-[#f43f5e]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0d9488]/30 to-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top 3D Header & Badges */}
      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between border-b border-slate-700/60 bg-slate-900/40 backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a1f]" />
          <span className="text-xs font-black uppercase tracking-wider text-orange-300">
            Realtime 3D Dabba Explorer
          </span>
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            Indian Fusion 3D
          </span>
        </div>

        <div className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
          <RotateCw className="w-3.5 h-3.5 text-orange-400" />
          <span className="hidden sm:inline">Drag to Orbit 360°</span>
        </div>
      </div>

      {/* WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="relative flex-1 w-full cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
        title="Click and drag to rotate the 3D Stainless Steel Dabba"
      />

      {/* Food Tier Labels when Exploded */}
      {isExploded && (
        <div className="absolute left-4 top-20 z-10 space-y-2 pointer-events-none animate-in fade-in slide-in-from-left-3 duration-300">
          <div className="bg-slate-950/80 backdrop-blur-md border border-amber-400/80 px-3 py-1.5 rounded-xl shadow-lg text-xs font-extrabold text-amber-300 flex items-center gap-1.5">
            <span>🥘 Tier 1: Slow-Simmered Maa Ki Dal Tadka</span>
          </div>
          <div className="bg-slate-950/80 backdrop-blur-md border border-amber-200/80 px-3 py-1.5 rounded-xl shadow-lg text-xs font-extrabold text-amber-100 flex items-center gap-1.5 mt-8">
            <span>🫓 Tier 2: 3 Desi Ghee Chakki Phulkas</span>
          </div>
          <div className="bg-slate-950/80 backdrop-blur-md border border-rose-400/80 px-3 py-1.5 rounded-xl shadow-lg text-xs font-extrabold text-rose-300 flex items-center gap-1.5 mt-10">
            <span>🍛 Tier 3: Shahi Paneer &amp; Basmati Rice</span>
          </div>
        </div>
      )}

      {/* Bottom Control Dock */}
      <div className="relative z-10 p-3 sm:p-4 bg-slate-950/80 border-t border-slate-700/60 backdrop-blur-xs flex flex-wrap items-center justify-between gap-2.5">
        <button
          onClick={() => setIsExploded(!isExploded)}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md ${
            isExploded
              ? 'bg-gradient-to-r from-amber-400 to-[#ff5a1f] text-slate-950 shadow-orange-500/30'
              : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isExploded ? 'Close Dabba 🥫' : 'Explode 3 Tiers (Peek Food) 🔓'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSteam(!showSteam)}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-colors cursor-pointer ${
              showSteam
                ? 'bg-orange-500/20 text-orange-300 border-orange-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Toggle Hot Steam Animation"
          >
            <Wind className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Steam:</span>
            <span>{showSteam ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-colors cursor-pointer ${
              isRotating
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title="Toggle 360° Auto Rotation"
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Spin:</span>
            <span>{isRotating ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
