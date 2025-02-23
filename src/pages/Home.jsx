import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Float } from "@react-three/drei";

const Home = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 text-white px-6">
      {/* Bagian Kiri (Teks) */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-4xl font-bold">Hi!</h2>
        <p className="text-lg text-gray-300">
          Saya Rizky Wahyu Haqiqi, seorang IT Support & Programmer.  
          Selamat datang di website portfolio saya!
        </p>
        <a href="/projects" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition">
          Lihat Projek
        </a>
      </div>

      {/* Bagian Kanan (Three.js) */}
      <div className="lg:w-1/2 flex justify-center">
        <Canvas className="w-full h-80 lg:h-full">
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />

          {/* Efek Bintang */}
          <Stars radius={100} depth={50} count={5000} factor={4} fade />

          {/* Sphere dengan efek float dan distort */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#ff5733"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Float>

          {/* Efek Bloom */}
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
