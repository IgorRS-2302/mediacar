import React from 'react'
import Header from '../components/header'
import Image from 'next/image'
import Tablet from '../assets/images/Tablet_mediacar.jpeg'
import Avaliacao from '../assets/images/icons/melhor-experiencia-do-cliente.png'
import Satisfacao from '../assets/images/icons/satisfacao.png'
import Beneficios from '../assets/images/icons/incentivo.png'
import video from '../assets/images/video-Photoroom.png'
import cadastro from '../assets/images/icons/cadastro.png'
import contato from '../assets/images/icons/contato.png'
import instalacao from '../assets/images/icons/suporte-ao-cliente.png'





        export default function page() {
        return (
            <div className='text-white'>
                <Header/>
            <div>
                <Image src={Tablet} alt='Tablet do anunciante' className='object-cover w-full h-[80vh] '/>
            </div>
            <div className='text-black'>
                <h1 className='text-3xl text-center py-8 font-medium'>Vantagens</h1>
                <div className='grid grid-flow-col grid-cols-3 my-8'>
                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[12vh] w-[12vh]' src={Avaliacao} alt=''/>
                        <h3 className='text-lg font-bold pt-2'>Melhora Avaliações</h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[12vh] w-[12vh]' src={Satisfacao} alt=''/>
                        <h3 className='text-lg font-bold pt-2'> Aumenta Satisfação </h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[12vh] w-[12vh]' src={Beneficios} alt=''/>
                        <h3 className='text-lg font-bold pt-2'>Benefícios</h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>
            <div className='bg-cor-laranja text-black pb-10'>
                <h1 className='text-center text-3xl font-medium pt-10'>COMO FUNCIONA</h1>
                <div className='flex justify-center'>
                    <Image src={video} alt='' className='max-w-[80%]'/>
                </div>
                <div className='grid grid-flow-col grid-cols-3'>
                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[10vh] w-[10vh]' src={cadastro} alt=''></Image>
                        <h3 className='text-lg font-bold pt-2' >Cadastro</h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[10vh] w-[10vh]' src={contato} alt=''></Image>
                        <h3 className='text-lg font-bold pt-2' >Contato</h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <div className=' flex flex-col justify-center items-center'>
                        <Image className='h-[10vh] w-[10vh]' src={instalacao} alt=''></Image>
                        <h3 className='text-lg font-bold pt-2' >Instalação</h3>
                        <p className='text-center w-[40vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

            </div>
            <div className='bg-gradient-to-br from-gray-500 from-96% to-black'>
                <h1 className='text-center text-3xl py-8'>DEPOIMENTOS</h1>
                <div className='flex flex-col justify-center items-center overscroll-auto'>
                    <div className='h-[12vh] w-[60%] bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg'>
                        <h2>Nome</h2>
                    </div>
                    <div className='h-[12vh] w-[60%] bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg'>
                        <h2>Nome</h2>
                    </div>
                    <div className='h-[12vh] w-[60%] bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg'>
                        <h2>Nome</h2>
                    </div>
                    <div className='h-[12vh] w-[60%] bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg'>
                        <h2>Nome</h2>
                    </div>
                </div>
            </div>
        </div>
        )
        }
