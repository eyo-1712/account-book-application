type TPeriodValue = 'date' | 'week' | 'month' | 'year'

export interface IPeriod {
  text: string
  value: TPeriodValue
}

interface IPeriodData<T, U> {
  text: T
  value: U
}

type TWeekText =
  | '월요일'
  | '화요일'
  | '수요일'
  | '목요일'
  | '금요일'
  | '토요일'
  | '일요일'

type TWeekValue =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type TWeek = IPeriodData<TWeekText, TWeekValue>

type T31 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'

type TMonth3 = IPeriodData<T31, T31>
type T30 = Partial<TMonthValue, '31'>
type TMonth30 = IPeriodData<T30, T30>
type T29 = Partial<T30, '29', '30'>
type T28 = Partial<T29, '28'>
type TMonth2829 = T28 | T29

type TMonthText =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
