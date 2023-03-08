// import 
import { Dispatch, SetStateAction } from 'react'
import { Close, LogoMenu } from '@/icons'
import { Mail } from '@/components'
import { navigation } from '@/helpers'

interface IProps {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}
export const MobileNav = ({ open, setOpen }: IProps) => {
  return(
    <div className={`drawer-menu ${ open ? "active" : ""} fixed z-[9999] w-[100vw] h-full top-0 left-0 flex justify-start bg-[rgba(10,10,10,.5)] transition-[visibility] duration-[250ms] ease-linear`}>
      <div className="block">
        <div className="fixed top-0 left-0 right-0 bottom-0" onClick={()=> setOpen(false)}></div>
        <div className="menu-inner bg-white h-full w-[420px] px-4 flex flex-col z-[9999] transition-transform duration-[250ms] ease-linear" style={{ maxWidth: 'calc(100vw - 3rem)'}}>
          <header className="justify-between flex items-center py-4">
            {/* Logo */}
            <span aria-label="logo">
              <LogoMenu/>
            </span>
            {/* Cerrar*/}
            <button 
              aria-label="Cerrar el menú" 
              onClick={()=>setOpen(false)} 
              className="transition-opacity duration-200 ease-in-out hover:opacity-70"
            >
              <Close/>
            </button>
          </header>
          <div className="flex-1 flex justify-start items-center">
            <ul tabIndex={-1} className="flex flex-col gap-4">
              { navigation.map((el, index) => (
                  <li key={index}>
                    <a href={el.url} 
                      onClick={()=> setOpen(false)} 
                      className="uppercase tracking-[1.5px] font-semibold text-sm transition-opacity duration-200 ease-in-out hover:underline hover:underline-offset-4 hover:opacity-70"
                    > 
                      {el.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <footer className="py-4 border-t border-black mb-4">
            <Mail/>
          </footer>
        </div>
      </div>
    </div>  
  )
}