import React, { useEffect, useState } from 'react';
import CircleImg from './assets/userImg.png';
import Header from './component/header';
import earth from './assets/earth.svg';
import instagram from './assets/instagram.svg';
import telegram from './assets/telegram.svg';
import facebook from './assets/facebook.svg';
import github from './assets/github.svg';

const App = () => {
  const [url, setUrl] = useState(null);
  const [fData, setFData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('card') || '[]'));
  }, []);

  function validate(form) {
    if (form.companyName.length <= 3) {
      alert("Iltimos, kompaniya nomini to'liq kiriting!");
      return false;
    }
    if (form.email.length <= 7) {
      alert("Iltimos, emailni to'liq kiriting!");
      return false;
    }
    if (!form.phone) {
      alert("Iltimos telefon raqamini kiriting!");
      return false;
    }
    if (form.country.length <= 3) {
      alert("Iltimos, davlatingizni nomini to'liq kiriting!");
      return false;
    }
    if (form.city.length <= 5) {
      alert("Iltimos, shaharingizni nomini to'liq kiriting!");
      return false;
    }
    if (form.locetion.length <= 5) {
      alert("Iltimos, manzilingizni to'liq kiriting!");
      return false;
    }
    if (form.countUser.length <= 0) {
      alert("Iltimos, hodimlar sonini kiriting!");
      return false;
    }
    return true;
  }

  function setToLocalStorage(data) {
    localStorage.setItem('card', JSON.stringify(data));
  }

  return (
    <>
      <Header />
      <div className="bg-white rounded-lg shadow-md p-[30px] flex flex-col gap-5 max-w-[778px] mx-auto my-[60px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold mb-2 text-2xl text-[#2A2941] text-[32px]">Kompaniya ma’lumotlari</h1>
          <p className="text-[16px]">Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formObj = Object.fromEntries(formData.entries());

            if (!validate(formObj)) {
              return;
            }

            const result = { ...formObj, url };
            const updatedUsers = [...users, result];
            setUsers(updatedUsers);
            setToLocalStorage(updatedUsers);
            setFData({});
            setUrl(null);
            e.target.reset();
          }}
          className="flex flex-col w-full gap-5"
        >
          <div className="flex items-center gap-5">
            <img className="w-[84px] h-[84px] rounded-full" src={url || CircleImg} alt="user" />
            <label className="text-sky-600 font-medium text-xl cursor-pointer hover:underline">
              Yuklash
              <input
                onChange={(e) => {
                  const img = e.target.files[0];
                  if (img) {
                    const imgUrl = URL.createObjectURL(img);
                    setUrl(imgUrl);
                    setFData((prev) => ({ ...prev, url: imgUrl }));
                  }
                }}
                className="hidden"
                type="file"
                name="urlImg"
              />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Kompaniya nomi <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <input name="companyName" type="text" placeholder="Kompaniya nomi" className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Email <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Telefon raqami <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <input name="phone" type="tel" placeholder="UZ +9989" className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Linklar <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <div className="flex gap-2 items-center">
              {[earth, instagram, telegram, facebook, github].map((icon, index) => (
                <div
                  key={index}
                  onClick={() => {
                    const modal = document.getElementById('myDialog');
                    if (modal?.showModal) {
                      modal.showModal();
                    } else {
                      alert("Bular vaqtinchalik ishlamaydi!!");
                    }
                  }}
                  className="p-[19.5px] border border-[#E3E3E3] max-w-14 rounded-[12px] cursor-pointer select-none active:scale-[0.7] duration-300"
                >
                  <img src={icon} alt="icon" />
                </div>
              ))}
            </div>
          </label>
          <div className="flex items-center gap-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Davlat <span className='text-red-400 text-[18px]'>*</span></span>
              </div>
              <input name="country" type="text" placeholder="Davlat" className="input input-bordered w-full bg-white" />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-[#2A2941]">Shahar <span className='text-red-400 text-[18px]'>*</span></span>
              </div>
              <input name="city" type="text" placeholder="Shahar" className="input input-bordered w-full bg-white" />
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Yashash joyi <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <input name="locetion" type="text" placeholder="Joy" className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Hodimlar soni <span className='text-red-400 text-[18px]'>*</span></span>
            </div>
            <input name="countUser" type="number" placeholder="Hodimlar soni" className="input input-bordered w-full bg-white" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-[#2A2941]">Izoh:</span>
            </div>
            <textarea
              name="description"
              placeholder="Kompaniya haqida izoh qoldiring"
              className="input input-bordered w-full bg-white py-2"
            />
          </label>
          <button className="btn w-full bg-[#43434a] text-[#fff]" type="submit">
            Submit
          </button>
        </form>
      </div>
      {users.length === 0 && <p className="text-center py-5">Ma'lumot mavjud emas!!</p>}

      <div className="flex flex-wrap gap-6 max-w-[1200px] mx-auto" id='wrapper'>
        {users.map((user, index) => (
          <div
            key={index}
            className="card w-96 shadow-lg bg-[#f0f0f0] text-blue-950">
            <div className="card-body items-center">
              <img
                className="w-[84px] h-[84px] rounded-full"
                src={user.url || CircleImg}
                alt="User"
              />
              <h2 className="card-title">Kompaniya nomi: {user.companyName}</h2>
              <a
                href='#'
              >
                Email: <span className='underline text-blue-600'>{user.email}</span>
              </a>
              <p>Tel: {user.phone}</p>
              <p>Davlat: {user.country || "Ma'lumot yo'q"}</p>
              <p>Shahar: {user.city || "Ma'lumot yo'q"}</p>
              <p>Yashash joyi: {user.locetion || "Ma'lumot yo'q"}</p>
              <p>Hodimlar soni: {user.countUser || "Ma'lumot yo'q"}</p>
              <p>Izoh: {user.description || "Izoh yo'q"}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          const wrapper = document.getElementById('wrapper');
          if (wrapper.innerHTML !== '') {
            const isTrue = confirm('Rastanham siz barcha kardlarni o\'chirmoqchimisiz??')
            if (isTrue) {
              localStorage.removeItem('card');
              if (wrapper) {
                wrapper.innerHTML = '';
              }
            }
          }
        }}
        className="btn flex mx-auto mt-[90px]"
      >
        Delete all cards
      </button >

    </>
  );
};

export default App;
