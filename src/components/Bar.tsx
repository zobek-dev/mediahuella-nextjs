import Link from 'next/link'

export const Bar = () => {
  const content = {
    textLeft: "Nuestros planes de servicio",
    textRight: "Mediahuella entrega sus servicios a través de un cobro mensual dependiendo del servicio solicitado",
    url: "#Formulario",
    btnText: "Cotiza Aquí"
  }
  return(
    <section className="bg-[#FFC400] text-white">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row py-8 md:items-center">
          <div className="md:border-r-[2px] border-transparent md:border-white mb-4 md:py-8 md:pr-8">
            <h2 className="uppercase font-bold text-[25px] lg:text-[35px] max-w-[300px] tracking-[10px] leading-[1.3]" >{content.textLeft}</h2>  
          </div>
          <div className="md:pl-8">
            <p className="text-base lg:text-xl tracking-[2px] font-semibold mb-4 lg:mb-8">{content.textRight}</p>
            <Link href={content.url} className="block uppercase text-white border border-white py-2 px-4 tracking-[2px] w-max font-semibold">
              {content.btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
