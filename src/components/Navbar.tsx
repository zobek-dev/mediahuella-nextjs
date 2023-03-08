// import Head from "next/head"
import Link from "next/link"
import { Burger, Logo } from "@/icons"
import { navigation } from "@/helpers"
import { useState } from "react"
import { MobileNav } from "./MobileNav"

export const NavBar = ()=> {
  const [open, setOpen]= useState(false)
  return(
    <header className="bg-white">
      <div className="wrapper">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="w-[200px] sm:w-[280px] lg:w-[350px] block">
            <Logo/>
          </Link>
          <nav className="hidden md:block">
            <ul tabIndex={-1} className="flex gap-x-8 items-center justify-end">
              {navigation.map((el,index) => (
                <li key={index}>
                  <Link href={el.url} className="uppercase whitespace-nowrap tracking-[0.17em] font-semibold text-13px lg:text-[15px] transition-all duration-200 ease-in-out hover:underline hover:underline-offset-6 leading-[2]">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="block md:hidden" onClick={()=>setOpen(true)}>
            <Burger/>
          </button>
        </div>
      </div>
      <MobileNav open={open} setOpen={setOpen}/>
    </header>
  )
}