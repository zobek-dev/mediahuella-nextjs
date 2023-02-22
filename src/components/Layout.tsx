import { NavBar, Footer } from "./"
import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export const Layout = ({ children, ...props }: Props)=>{
  return(
    <>
      <NavBar/>
      <main {...props}>
        {children}
      </main>
      <Footer/>
    </>
  )
}