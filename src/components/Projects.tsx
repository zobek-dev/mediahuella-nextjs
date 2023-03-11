import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { useRef, useEffect } from 'react'
import { Dummy } from '@/images/'
import { BtnPrev, BtnNext, ArrowRight } from '@/icons'

import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation])

interface IProject{
  title: string,
  image: StaticImageData,
  content: string,
  excerpt: string,
  url: string
}

const projects : IProject[] = [
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    image: Dummy,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, error voluptate! Ullam in dignissimos, facere non suscipit perferendis cum molestias ab deserunt ipsam sed iure enim sunt quos? Consequatur, a aspernatur eveniet repellendus id aperiam, nostrum eligendi aliquid doloribus nemo ratione officia assumenda obcaecati itaque facilis magni qui perferendis praesentium deleniti! Tenetur debitis illo quam aliquid, asperiores illum dolor perferendis quae est similique, repellat ea iure quidem pariatur earum aperiam eaque, saepe corrupti cumque sunt sequi soluta temporibus nam distinctio. Accusamus sed velit ex voluptatibus quibusdam cumque natus minima culpa, at alias excepturi fuga iusto optio voluptatem illum illo rerum?",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatibus expedita dolores natus esse magni consectetur, eaque maiores incidunt unde.",
    url:"/adffdafafa"
  }
]


export const Projects = () => {
  const prev = useRef<HTMLButtonElement>(null)
  const next = useRef<HTMLButtonElement>(null)

  return (
    <section id="Proyectos">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pb-4 lg:pb-12">
          <h2 className="uppercase font-extrabold text-[22px] lg:text-[30px] tracking-[2.5px] leading-[1.2] text-center lg:text-left mb-4 lg:mb-0">Algunos de nuestros <span className="text-[#FFC400]">proyectos</span></h2>
          <div className="flex gap-x-4 justify-end mb-4 lg:mb-0">
            <button ref={prev} aria-label="Anterior" name="prev" className="transition-opacity duration-200 ease-in-out hover:opacity-70">
              <BtnPrev/>
              <span className="sr-only">Anterior</span>
            </button>
            <button ref={next} aria-label="Siguiente" className="transition-opacity duration-200 ease-in-out hover:opacity-70" name="next">
              <BtnNext/>
              <span className="sr-only">Siguiente</span>
            </button>
          </div>
        </div>
        <Swiper 
          modules={[Navigation]}
          className="overflow-hidden"
          spaceBetween={16} 
          slidesPerView={1.2}
          breakpoints={{
            600: {
              slidesPerView: 2.2
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 35
            }
          }}
          navigation={{
            prevEl: prev.current,
            nextEl: next.current
          }}
          onSwiper={(swiper:any): void =>{
            setTimeout(()=> {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = prev.current
              swiper.params.navigation.nextEl = next.current

              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()  
            })
          }}
        >
          {
            projects.map((project,index) => (
              <SwiperSlide key={index} className="bg-[#E9E7E7] p-4">
                <Link href={project.url} className="group">
                  <Image src={project.image} alt={project.title} className="aspect-[4/3] object-cover object-center"/>
                  <h3 className="my-4 uppercase font-bold tracking-[2.5px] text-xl lg:text-[24px]">{project.title}</h3>
                  <p className="text-sm lg:text-base tracking-[1px] mb-4">{project.excerpt}</p>
                  <span role="link" className="whitespace-nowrap flex items-center uppercase font-semibold tracking-[1.5px] text-sm lg:text-base hover:underline hover:underline-offset-2">
                    Ver más&nbsp;
                    <ArrowRight/> 
                  </span>
                </Link>
              </SwiperSlide>
            ))
          }  
        </Swiper>
      </div>
    </section>
  )
};

