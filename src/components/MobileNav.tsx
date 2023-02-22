// import 
import { Dispatch, SetStateAction } from 'react'

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
          
        </div>
      </div>
    </div>  
  )
}