import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import type { ContactInfo } from '../models/footerModel'


export const contacts: ContactInfo[] = [
  {
    Icon: LocationOnOutlinedIcon,
    label: 'Địa chỉ',
    value: '60/66 Lâm Văn Bền, phường Tân Kiểng, quận 7, HCM',
  },
  {
    Icon: LocalPhoneOutlinedIcon,
    label: 'Hotline',
    value: '096.203.6687 - 0705.266.768',
  },
  {
    Icon: MailOutlineOutlinedIcon,
    label: 'Email',
    value: 'hannguhoaviethung@gmail.com',
  },
]