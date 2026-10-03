import Background from '../../assets/Background.png'
import HeroCon from '../../assets/HeroCon.png'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'

const Conditions = () => {
  return (
    <div
      id='conditions'
      className="w-full mt-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-6 py-12 items-center">
        {/* 1. Title */}
        <div className="flex flex-col text-center md:text-left md:col-start-2 md:row-start-1 ">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-950">
            AI NÊN THAM GIA
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900">
            KHÓA HỌC TIẾNG ANH
          </h2>
        </div>

        {/* 2. Image */}
        <div className="md:col-start-1 md:row-start-1 md:row-span-2 flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-115 md:h-115">
            <div className="absolute inset-0 rounded-full" />
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src={HeroCon}
                alt="Student"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* 3. Details */}
        <ul className="md:col-start-2 md:row-start-2 flex flex-col gap-4 text-white text-left">
          <li className="flex items-start gap-3">
            <CheckCircleOutlinedIcon className="text-amber-950 shrink-0 mt-1" />
            <span>
              Người yêu thích Tiếng Anh: đam mê văn hóa, du lịch. Kết bạn Năm
              Châu - Nối liền Địa Cầu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleOutlinedIcon className="text-amber-950 shrink-0 mt-1" />
            <span>
              Học Sinh, Sinh Viên: Lợi thế vượt trội trong tương lai nghề nghiệp,
              cơ hội học bổng du học với một ngôn ngữ toàn cầu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleOutlinedIcon className="text-amber-950 shrink-0 mt-1" />
            <span>
              Doanh nhân và Chuyên Gia Kinh Doanh: Tìm kiếm cơ hội kinh doanh và
              mở rộng thị trường, Tiếng Anh giúp kết nối với các đối tác và nhà
              cung cấp quốc tế.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleOutlinedIcon className="text-amber-950 shrink-0 mt-1" />
            <span>
              Nhân Viên, Hướng Dẫn Viên Du Lịch: Với hơn 1.4 tỷ người sử dụng
              Tiếng Anh, Tiếng Anh tốt giúp tiếp cận khách du lịch dễ dàng và uy
              tín hơn.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Conditions