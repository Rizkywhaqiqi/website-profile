import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import gsap from "gsap";

// ✅ Komponen untuk Sphere (Agar bisa pakai useFrame & GSAP)
const AnimatedSphere = () => {
  const sphereRef = useRef();

  useEffect(() => {
    gsap.to(sphereRef.current.scale, {
      x: 2.5,
      y: 2.5,
      z: 2.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={5}>
        <MeshDistortMaterial color="#ff5733" attach="material" distort={0.6} speed={1.5} depthWrite={false} />
      </Sphere>
    </Float>
  );
};

const Home = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 });
    gsap.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 });
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* 🌌 Background Three.js */}
      <div className="absolute inset-0 -z-10">
        <Canvas className="w-full h-full" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          {/* Efek Bintang */}
          <Stars radius={40} depth={50} count={500} factor={4} fade />

          {/* Sphere sebagai Background */}
          <AnimatedSphere />

          {/* Efek Bloom */}
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* 🔥 Konten Utama */}
      <div ref={textRef} className="text-center space-y-4 opacity-0">
        <h2 className="text-5xl font-bold">Hi!</h2>
        <p className="text-lg text-gray-300">
          Saya Rizky Wahyu Haqiqi, seorang IT Support & Programmer.  
          Selamat datang di website portfolio saya!
        </p>
        <Link ref={buttonRef} to="/projects" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition opacity-0">
          Lihat Projek
        </Link>
      </div>
    </div>
  );
};

export default Home;
