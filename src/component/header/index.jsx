import logo from '../../assets/logo.png'
const index = () => {
    return (
        <div className="bg-[#5361E4] py-4 select-none" >
            <div className='flex items-center justify-between max-w-[1100px] mx-auto'>
                <a href="../index.html"><img src={logo} alt="logo" /></a>
                <ul className='flex items-center gap-12'>
                    <li><a href="#" className='text-white text-[18px] hover:un'>Vakansiyalar</a></li>
                    <li><a href="#" className='text-white text-[18px] hover:un'>Kandidatlar</a></li>
                    <li><a href="#" className='text-white text-[18px] hover:un'>Kompaniyalar</a></li>
                    <li><a href="#" className='text-white text-[18px] hover:un'>Xizmatlar</a></li>
                    <li><a href="#" className='text-white text-[18px] hover:un'>Ta’lim</a></li>
                </ul>
                <details className='cursor-pointer'>
                    <summary className='text-white'>O'zb</summary>
                </details>
                <button className='btn bg-[#fff] text-4 text-[#5361E4]'>Boshlash</button>
            </div>
        </div>
    )
}

export default index
