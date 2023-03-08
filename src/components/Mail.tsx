import { MailIcon} from '@/icons'

const emailInfo = {
  mail: 'hola@mediahuella.com'
}

export const Mail = () => {
  return(
    <>
      <span className="flex items-center gap-x-1">
        <MailIcon/>
        <a href={`mailto:${emailInfo.mail}`}>{emailInfo.mail}</a>
      </span>  
    </>
  )
}