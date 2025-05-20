import { useState } from "react";

const projects = [
  {
    title: "Uttar Space Web Profile",
    description: "website profile salah satu coffeshop di kayong utara",
    image: "/assets/uttar.png",
    preview: "https://uttar.space/",
    link: "https://uttar.space/",
  },
  {
    title: "Website Survei Kepuasan Masyarakat",
    description: "Website dibangun untuk mengelola SKM dan menghasilkan output IKM",
    image: "/assets/skm.png",
    preview: "https://rsudsmjamaludin.kayongutarakab.go.id/surveikm/",
    link: "https://rsudsmjamaludin.kayongutarakab.go.id/surveikm/",
  },
  {
    title: "Gallery Hijabkuu Web Profile",
    description: "Gallery Hijabkuu adalah website toko online yang menjual hijab, fashion muslimah, dan aksesoris wanita dengan tampilan modern dan responsif. Dilengkapi fitur katalog produk, testimoni pelanggan, serta halaman tentang kami dan kontak, website ini dirancang untuk memberikan pengalaman belanja yang mudah dan nyaman secara online.",
    image: "/assets/hijabkuu.png",
    preview: "https://galleryhijabkuu.ryneproject.space/",
    link: "https://galleryhijabkuu.ryneproject.space/",
  },
  {
    title: "Images Converter to GIF",
    description: "Image to GIF Converter adalah aplikasi berbasis web untuk mengonversi berbagai format gambar (PNG, JPG, JPEG) menjadi GIF dengan fitur drag & drop dan pengaturan urutan frame.",
    image: "/assets/tes.png",
    preview: "https://imagesconverting-othkodylinz.up.railway.app/",
    link: "https://imagesconverting-othkodylinz.up.railway.app/",
  },
  {
    title: "Potolok (photobooth) ",
    description: "potolok adalah website yang dibuat untuk berfoto ala photobooth dengan pilihan bebrapa template",
    image: "/assets/poto.png",
    preview: "https://othkodylinz-potolok.vercel.app/",
    link: "https://othkodylinz-potolok.vercel.app/",
  }, 
  {
    title: "ryne project ",
    description: "website penjualan jasa buat website profile, website gift & design kartu",
    image: "/assets/ryne.png",
    preview: "https://ryneproject.space/",
    link: "https://ryneproject.space/",
  }, 
  
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 pt-20">
      <h2 className="text-3xl md:text-4xl uppercas font-bold text-center mb-8">Projek</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-400 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold transition w-full"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 p-4 rounded-lg w-full max-w-2xl relative shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedProject.preview}
              title="Preview Website"
              className="w-full h-72 sm:h-96 border-4 border-gray-500 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            ></iframe>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="bg-gray-500 hover:bg-red-600 px-4 py-2 text-white rounded-lg w-full"
                onClick={() => setSelectedProject(null)}
              >
                Tutup
              </button>
              <a
                href={selectedProject.link}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-lg text-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kunjungi Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
