import { Service } from '@/components'
import { Ecommerce, Diseno, Fotografia, Marketing } from '@/images'

const servicios = [
  { 
    image: Ecommerce,
    title: 'Ecommerce en shopify',
    features: [
      'Desarrollo y migración de tiendas online en Shopify',
      'Configuraciones generales',
      'Integraciones con aplicaciones',
      'Administración con soporte permanente.'
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
      'Fotografía profesional producto/ambientadas',
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
        <h2 className="uppercase text-2xl lg:text-[35px] font-bold text-center my-4 lg:my-8">
          Conoce nuestros servicios
        </h2>
        <ul tabIndex={-1} className="grid lg:grid-cols-4 items-center">
          { servicios.map((service)=>(
            <Service service={service} key={Date.now()}/>
          ))}
        </ul>
      </div>
    </section>
  )
}