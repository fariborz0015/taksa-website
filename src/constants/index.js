import { v4 as uuidv4 } from 'uuid'
import * as Animations from './animations'
export const ApiConstants = {
  baseUrl: 'http://185.18.214.5/',
  timeOut: 25000,
  mediaBaseUrl: 'http://185.18.214.5/admin/land/media/',
  dashboardUrl: 'http://185.18.214.5:3001/',
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
  },
  {
    id: uuidv4(),
    title: ' تعرفه ها ',
  },
  {
    id: uuidv4(),
    title: 'تماس با اکسپوورس  ',
  },
]

export { Animations }
