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
  console.log(Point)
  return(
    <li>
      <Image 
        src={service.image}
        alt={service.title}
        className="block mx-auto mb-4"
      />
      <h3 className="uppercase text-center font-bold text-xl mb-4">{service.title}</h3>
      <ul className="">
        {service.features.map(el =>(<li key={Date.now()} data-after={Point} className={`dot-yellow relative ml-8 text-left text-sm tracking-[1.5px] mb-4`}>{el}</li>))}
      </ul>
    </li>
  )
}