import Image, { StaticImageData } from "next/image"
import { Point } from "@/icons"

interface service {
  image: StaticImageData,
  title: string,
  features: string[]
}
interface Iprop{
  service: service
}

export const Service = ({service}:Iprop) => {
  return(
    <li>
      <Image 
        src={service.image}
        alt={service.title}
        className="block mx-auto mb-4"
        width={200}
        style={{ objectFit: 'contain', objectPosition: 'center', aspectRatio: '1/1'}}
      />
      <h3 className="uppercase text-center font-bold text-xl mb-4">{service.title}</h3>
      <ul>
        {service.features.map((feature, index) =>(<li key={index} className={`text-center`}>
          <Point className="w-max inline-block align-middle mr-2"/>
          <span className="inline-block align-middle text-sm tracking-[1.5px]">{feature}</span>
        </li>))}
      </ul>
    </li>
  )
}