import React from 'react'

const App = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-[23px] '>
      <div>
        <h1 className='font-bold mb-2 text-2xl text-[#2A2941] '>Kompaniya ma’lumotlari</h1>
        <p className='text-[16px]'>Kompaniya haqidagi ma’lumotlarni kiriting</p>
      </div>
      <form>
        <div>
          <label className='text-sky-600 font-medium text-xl cursor-pointer hover:underline'> 
            Yuklash
            <input className='hidden' type="file" />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-[#2A2941]">Kompaniya nomi:</span>
          </div>
          <input
            type="text"
            placeholder="Kompaniya nomi"
            className="input input-bordered w-full bg-white" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-[#2A2941]">Email:</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-white" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-[#2A2941]">Telefon raqami:</span>
          </div>
          <input
            type="tel"
            placeholder="UZ +9989"
            className="input input-bordered w-full bg-white" />
        </label>
      </form>
    </div>
  )
}

export default App
