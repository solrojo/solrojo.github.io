
import Image from 'next/image'
import cross from '../public/img/cross.svg'

export default () => (
  <Image
    src={cross}
    alt="Close menu icon"
    priority
    width={22}
    height={22}
  />
)
