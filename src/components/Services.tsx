import { Service } from '@/components'
import { Ecommerce, Diseno, Fotografia, Marketing } from '@/images'

const servicios = [
  { 
    image: Ecommerce,
    title: 'Ecommerce en shopify',
    features: [
      'Desarrollo y migración de tiendas.',
      'Configuraciones generales',
      'Integraciones con aplicaciones',
      'Administración y soporte permanente.'
    ]
  },
  {
    image: Diseno,
    title: 'Diseño Gráfico',
    features: [
      'Branding de marca',
      'Identidad Visual',
      'Imagen de marca en redes sociales',
      'Diseño web',
      'Diseño email marketing'
    ]
  },
  {
    image: Fotografia,
    title: 'Fotografía',
    features: [
      'Fotografía profesional',
      'Set estudio fotográfico',
      'Formato de fotos para marketplace'
    ]
  },
  {
    image: Marketing,
    title: 'Marketing Digital',
    features: [
      'Estrategia marketing y publicidad',
      'Campañas de Facebook ADS',
      'Google ADS',
      'Email marketing con Klaviyo',
      'SMS Marketing',
      'Información de métricas'
    ]
  }
]

export const Servicios = () => {
  return(
    <section id="QueHacemos" className="my-6 py-4 lg:my-12 lg:py-8">
      <div className="wrapper">
        <h2 className="uppercase text-2xl lg:text-[35px] font-bold text-center my-4 lg:mt-8 lg:mb-12">
          Conoce nuestros servicios
        </h2>
        <ul tabIndex={-1} className="grid md:grid-cols-2 xl:grid-cols-4 items-start gap-8 lg:gap-4">
          { servicios.map((service, index)=>(
            <Service service={service} key={index}/>
          ))}
        </ul>
      </div>
    </section>
  )
}