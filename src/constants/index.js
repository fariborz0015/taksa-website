import { v4 as uuidv4 } from 'uuid'

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
    title: 'صفحه اصلی',
    href:'/',
    children: [
      {
        id: uuidv4(),
        title: 'درباره نمایشگاه مجازی',
      },
      {
        id: uuidv4(),
        title: 'ثبت نام و شرکت در نمایشگاه',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'درباره نمایشگاه مجازی',
    children: [
      {
        id: uuidv4(),
        title: 'شرایط و ضوابط شرکت در نمایشگاه',
      },
      {
        id: uuidv4(),
        title: 'جوایز و مزایای شرکت در نمایشگاه',
      },
      {
        id: uuidv4(),
        title: 'پشتیبانی و ارتباط با ما',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'ثبت نام و شرکت در نمایشگاه',
  },
  {
    id: uuidv4(),
    title: 'جوایز و مزایای شرکت در نمایشگاه',
  },
  {
    id: uuidv4(),
    title: 'پشتیبانی و ارتباط با ما',
  },
]
