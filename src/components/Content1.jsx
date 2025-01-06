import React from 'react';
import img1 from '../assets/mainImg1.png'
import img2 from '../assets/mainImg2.png'
const Content1 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center h-screen  mt-[250px] md:mt-[-100px] '>
      <div className='mx-[10px] md:mx-[-10px] mt-[60px] md:mt-[-100px]'>
            <h1 className='font-semibold text-3xl md:text-6xl p-5 md:p-10 text-center'>STUDIO GHIBLI</h1>
            <p className='text-center font-normal text-xl md:text-3xl'>-Exquisite Exhibition:
                <br />
                <span className='italic'>Artistry of Studio Ghibli</span>
                <br />
                <br />
                <a href="#artworks">Artworks</a>
            </p>
      </div>
      <div  className='mx-[20px] my-[20px] md:my-[0px]'>
        <img src={img1} alt="" className='h-[400px]' />
      </div>
      <div  className='mx-[20px] my-[20px] md:my-[0px]'>
        <img src={img2} alt="" className='h-[400px]' />
      </div>
    </div>
  );
};

export default Content1;

