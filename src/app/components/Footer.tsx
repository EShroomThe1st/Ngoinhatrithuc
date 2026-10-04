import { useNavigate } from 'react-router-dom'
import icon from '../../assets/icon.png'
import { socials } from '../data/socialsData'
import { contacts } from '../data/footerData'


const Footer = () => {
  const navigate = useNavigate()

  return (
    <div id='footer' className='w-full bg-amber-950 mt-10 py-10 px-10'>
      <div className='my-5 xl:mx-25 2xl:mx-80 xl:my-0'>
        <img
          src={icon}
          className='rounded-full cursor-pointer border-2 border-transparent transition-all duration-200 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]'
          onClick={() => navigate('/')}
          alt='Home'
        />
      </div>

      <div className='flex flex-col my-5 lg:my-0 lg:flex-row justify-around text-white'>
        <div>
          <h1 className='text-left text-2xl font-bold'>
            TRUNG TÂM ANH NGỮ NGÔI NHÀ TRI THỨC
          </h1>
          {contacts.map(({ Icon, label, value }) => (
            <div key={label} className='flex text-left items-center'>
              <Icon className='text-amber-600 my-2 shrink-0' />
              <p>
                {label}: {value}
              </p>
            </div>
          ))}
        </div>

        <div className='my-5 lg:my-0'>
          <h1 className='text-left text-2xl font-bold'>
            Kết nối với Ngôi Nhà Tri Thức
          </h1>
          <div className='flex'>
            {socials.map((s) => (
              <img
                key={s.alt}
                src={s.src}
                alt={s.alt}
                onClick={() => navigate('/')}
                className={`mx-2 rounded-full cursor-pointer border-2 border-transparent transition-all duration-200 ${s.hover}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer