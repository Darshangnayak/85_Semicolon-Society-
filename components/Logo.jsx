import LogoIcon from '../assets/images/icons/Logo.svg'

const Logo = () => {
    return (
        <div className='flex h-15 items-center gap-3 m-0 px-5 text-2xl font-light bg-stone-900 text-white'>
            <LogoIcon className='w-8' />
            <span>
                <strong className='font-medium'>3D Car  </strong>Customizer
            </span>
        </div>
    )
}

export default Logo
