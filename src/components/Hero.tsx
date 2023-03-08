import Link from 'next/link'
import Image from 'next/image'
import { ImageHero } from '@/images'
import { ArrowRight } from '@/icons'


export const Hero = ()=> {
  return(
    <section>
      <div className="wrapper">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="font-bold uppercase text-2xl lg:text-[35px] leading-[1.2] my-4 lg:my-8">Entregamos soluciones<br/> simples y efectivas para<br/> tu e-commerce</h2>
            <p className="mb-4 lg:mb-8 text-sm tracking-[1.5px]">Diseñamos y desarrollamos tu ecommerce desde cero en shopify</p>
            <a href="#Contacto" className="flex gap-x-1 items-center transition-opacity duration-200 ease-in-out hover:opacity-70 hover:underline hover:underline-offset-4">
              <span className="text-sm tracking-[1.5px] font-semibold whitespace-nowrap">Hablemos aquí</span>
              <ArrowRight/>
            </a>
          </div>
          <div>
            <Image
              src={ImageHero}
              alt="Damos soluciones simples y efectivas para tu e-commerce"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}