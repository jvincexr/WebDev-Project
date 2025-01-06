import React, { useState } from 'react';
import Modal from 'react-modal';
import img1 from '../assets/content1.jpg';
import img2 from '../assets/content2.jpg';
import img3 from '../assets/content3.jpg';
import img5 from '../assets/content5.jpg';
import img7 from '../assets/content7.jpg';
import img9 from '../assets/content9.jpg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Artworks = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="w-full h-1000 flex flex-col md:flex-row justify-center items-center">
      <div className="text-black">
        <h1 className="text-center mb-50 text-2xl font-bold">ARTWORKS</h1>
        <table className="">
          <tbody>
            <tr className="flex flex-col md:flex-row">
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img1)}>
                <img src={img1} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img2)}>
                <img src={img2} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img3)}>
                <img src={img3} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
            </tr>
            <tr className="flex flex-col md:flex-row">
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img5)}>
                <img src={img5} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img7)}>
                <img src={img7} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
              <td className="p-2 cursor-pointer hover:shadow-lg" onClick={() => openModal(img9)}>
                <img src={img9} alt="" className="h-[300px] w-[250px] transition-transform duration-300 hover:scale-105" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        {selectedImage && (
          <img src={selectedImage} alt="Enlarged Image" className="max-w-full max-h-[500px] m-[15px]" />
        )}
        <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}>
        < AiOutlineClose size={20}/>
        </button>
      </Modal>
    </div>
  );
};

export default Artworks;
