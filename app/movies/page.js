import { CgHome, CgMenu, CgAirplane, CgAdd, CgAddR } from 'react-icons/cg';

export default function Page(){
    return(
        <section className="nav">
            <nav>
                <i> 
                    <CgMenu className='icon' />
                    <img className='logo' src='https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg' />
                </i>
                <i> 
                    <CgHome className='icon' />
                    <a>Home</a>
                </i>
                <i> 
                    <CgAdd className='icon' />
                    <a>Explore</a>
                </i>
                <i> 
                    <CgAddR className='icon' />
                    <a>shorts</a>
                </i>
                <i> 
                    <CgAirplane className='icon' />
                    <a>Suscription</a>
                </i>
            </nav>
            <nav className=' navResponsive '>
                <CgMenu className='icon' />
            </nav>
        </section>
    )
}