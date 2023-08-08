import { v4 as uuidv4 } from 'uuid'
import * as Animations from './animations'
export const ApiConstants = {
  baseUrl:  process.env.API_BASE_URL,
  timeOut:process.env.TIMEOUT,
  mediaBaseUrl: process.env.API_BASE_URL+"admin/land/media/",
  eventMediaBaseUrl: process.env.API_BASE_URL+"Admin/website/news/getmedia?uuid=",
  dashboardUrl: process.env.DASHBOARD_URL,
}

export const QUERY_KEYS = {
  chatUsers: 'CHAT_USERS_',
  chatMessages: 'CHAT_MESSAGES_',
}

export const NAV_ITEMS = [
  {
    id: uuidv4(),
    title: 'درباره اکسپوورس',
  },
  {
    id: uuidv4(),
    title: 'سرزمین های نمایشگاهی',
  },
  {
    id: uuidv4(),
    title: 'سرویس ها ',
    children: [
      {
        id: uuidv4(),
        title: ' تعرفه ها ',
      },
      {
        id: uuidv4(),
        title: '  برای کسب و کارها   ',
      },
      {
        id: uuidv4(),
        title: ' برای بازدید کنندگان  ',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'راهنما ',
    children: [
      {
        id: uuidv4(),
        title: ' پرسشهای متداول  ',
      },
      {
        id: uuidv4(),
        title: ' کاربردها ',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'اخبار و رویداد ها   ',
    href: '/events',
  },

  {
    id: uuidv4(),
    title: 'تماس با ما  ',
  },
]

export { Animations }
