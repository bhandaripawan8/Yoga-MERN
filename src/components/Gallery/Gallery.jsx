import React, { useState } from "react";
import { GalleryImages } from "../../data";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GalleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-[70vh] h-[70vh] bg-white rounded-lg flex items-center justify-center">
                        <button
                            className="w-[35px] h-auto bg-black rounded-lg absolute top-0 right-0  m-3  text-white text-4xl"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
      </div>
    </>
  );
};

export default Gallery;
