const Profile = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
        <div className="max-w-3xl text-center space-y-6">
          {/* Foto Profil */}
          <img
  src="/assets/1.jpeg"
  alt="Rizky Wahyu"
  className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mx-auto object-cover object-top"
/>

          {/* Nama & Deskripsi */}
          <h2 className="text-4xl font-bold">Rizky Wahyu Haqiqi</h2>
          <p className="text-lg text-gray-300">
             <span className="text-blue-400">IT Support</span> dan <span className="text-blue-400">Programmer</span> 
            
          </p>
  
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">IT Support</span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">Networking</span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">React.js</span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">ThreeJS</span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">Tailwind </span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">Linux</span>
            <span className="bg-blue-500 px-4 py-2 rounded-lg text-sm font-semibold">Cloud Computing</span>
          </div>
  
          {/* Tombol CV & LinkedIn */}
          <div className="mt-6 space-x-4">
            <a href="/cv.pdf" className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-semibold transition">
              Download CV
            </a>
            <a href="https://linkedin.com/in/rizkywahyuhaqiqi" className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-lg font-semibold transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  