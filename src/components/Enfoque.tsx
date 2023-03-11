import { Enfoque as Photo } from '@/images/'
import Image from 'next/image'

export const Enfoque = () => {
  return( 
    <section className="my-12 lg:my-20">
      <div className="wrapper">
        <div className="flex flex-col-reverse md:flex-row md:items-row md:items-center gap-4 lg:gap-0">
          <div className="md:w-1/2">
             <Image src={Photo} alt="nuestro enfoque" className="w-full"/>   
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-4 lg:mb-8 uppercase leading-[1.2] font-extrabold text-[35px] lg:text-[45px] tracking-[2.5px]">Nuestro <br/><strong className="text-[#FFc400] font-extrabold">Enfoque</strong></h2>
            <p className="tracking-[1.5px]">Somos una Agencia Boutique con un servicio personalizado que te ayudará a crecer y concretar tus ventas online. Diseñamos y desarrollamos tu ecommerce a la medida de los objetivos de tu marca, brindando soluciones online para que logres conectar con tus clientes de manera eficiente y satisfactoria.</p>
          </div>
        </div>
      </div>
    </section>
  )
}