import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner2 from '../assets/images/banner2.png'
import video from '../assets/images/video.jpg'
import Image from 'next/image'
import kit from '../assets/svgs/kit.svg'

export default function Anunciantes() {
  
  return (
    <div className=' min-h-screen flex-col items-center justify-between w-full'>
      <Header/>
      <div>
        <div className='absolute top-[15rem] right-1 text-white '>
          <h1 className='text-4xl font-bold ml-5'> Atraia a atenção do seu público-alvo.</h1>
          <h3 className='text-xl ml-5 mt-2'>Anuncie conosco na MediaCar!</h3>
        </div>
      <Image src={Banner2} alt={""} className='object-fill w-full max-h-[80vh]'/>

        <h2 className='text-2xl text-center text-black my-8 font-bold'>PRESS KIT</h2>
        <div className='grid grid-flow-col grid-cols-2 max-w-[90%]'>
          <div className='flex justify-center'>
            <div>
              <Image src={video} alt='Video'/>
            </div>
          </div>
          <div className=' text-center text-black font-bold'>
            <p className='mt-10 mb-[12rem] text-xl'>Alcance novos clientes e impulsione seu negócio.</p>
            <div className='flex justify-center items-baseline mt-15'>
              <Image src={kit} alt='kit' className='max-w-20'/>
            </div>
              <p >Baixe o nosso Press Kit</p>
          </div>

        </div>
          <h2 className='text-center text-xl text-black font-bold'>Perguntas Frequentes</h2>
      
        <div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
