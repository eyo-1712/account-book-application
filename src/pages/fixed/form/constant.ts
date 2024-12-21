import { IPeriod, TWeek } from './type'

export const PERIOD: IPeriod[] = [
  { text: '매일', value: 'date' },
  { text: '매주', value: 'week' },
  { text: '매월', value: 'month' },
]

export const WEEK: TWeek[] = [
  { text: '월요일', value: 'monday' },
  { text: '화요일', value: 'tuesday' },
  { text: '수요일', value: 'wednesday' },
  { text: '목요일', value: 'thursday' },
  { text: '금요일', value: 'friday' },
  { text: '토요일', value: 'saturday' },
  { text: '일요일', value: 'sunday' },
]
