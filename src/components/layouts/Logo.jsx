import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image className='w-auto h-auto' width={50} height={40} src={"/assets/logo.png"} alt='logo' />
        </Link>
    )
}

export default Logo