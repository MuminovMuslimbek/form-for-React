import React, { useState } from 'react'
import CircleImg from './assets/userImg.png'
import Header from './component/header'
import earth from './assets/earth.svg'
import instagram from './assets/instagram.svg'
import telegram from './assets/telegram.svg'
import facebook from './assets/facebook.svg'
import github from './assets/github.svg'
const App = () => {
  const [url, setUrl] = useState(null)
  const [fData, setFData] = useState(null)
  const[users,setUsers]=useState([])
  return (
    <>
      <Header />
      <div className='bg-white rounded-lg shadow-md p-[23px]  flex flex-col gap-5 max-w-[778px] mx-auto my-[60px] '>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold mb-2 text-2xl text-[#2A2941] text-[32px] '>Kompaniya ma’lumotlari</h1>
          <p className='text-[16px]'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
          const fromData = new FormData(e.target)
          const result = {}
          fromData.entries().forEach(([key, value]) => {
            result[key] == value
          });
          setFData((prev) => {
            return { ...prev, result }
          })
        }}
          className='flex flex-col w-full gap-5'>
          <div className='flex items-center gap-5'>
            <img className='w-[84px] h-[84px] rounded-full'
              src={url || CircleImg}
              alt="no img"
            />
            <label className='text-sky-600 font-medium text-xl cursor-pointer hover:underline'>
              Yuklash
              <input onChange={(e) => {
                const img = e.target.files[0]
                const url = URL.createObjectURL(img)
                setUrl(url)
                setFData((prev) => {
                  return { ...prev, url }
                })
              }}
                className='hidden' type="file" name='url' />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Kompaniya nomi:</span>
            </div>
            <input
              name='kompanyName'
              type="text"
              placeholder="Kompaniya nomi"
              className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Email:</span>
            </div>
            <input
              name='email'
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Telefon raqami:</span>
            </div>
            <input
              name='phone'
              type="tel"
              placeholder="UZ +9989"
              className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Linklar:</span>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300'>
                <img src={earth} /></div>
              <div className='p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300'>
                <img src={instagram} /></div>
              <div className='p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300'>
                <img src={telegram} /></div>
              <div className='p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300'>
                <img src={facebook} /></div>
              <div className='p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300'>
                <img src={github} /></div>
            </div>
          </label>
          <div className='flex items-center gap-4'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Davlat:</span>
              </div>
              <input
                name='country'
                type="text"
                placeholder="Davlat"
                className="input input-bordered w-full bg-white" />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Shahar:</span>
              </div>
              <input
                name='city'
                type="text"
                placeholder="Shahar"
                className="input input-bordered w-full bg-white" />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Yashash joyi:</span>
            </div>
            <input
              name='place'
              type="text"
              placeholder="Joy"
              className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Hodimlar soni:</span>
            </div>
            <input
              name='countUser'
              type="text"
              placeholder="Hodimlar soni"
              className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Izoh:</span>
            </div>
            <textarea
              name='description'
              type="text"
              placeholder="Kompaniya haqida izoh qoldiring"
              className="input input-bordered w-full bg-white py-2" />
          </label>
          <button className='btn w-full max-w-56 mx-auto bg-[#5361E4] text-[#fff]' type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
