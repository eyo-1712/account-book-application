import { Summary } from 'entities/summary'

export const generateSummaryGroup = (data: Summary[] | undefined) => {
  const groupedData = Array.from({ length: 31 }, () => [] as Summary[])

  data?.forEach((item) => {
    const localDate = new Date(item.datetime)
    localDate.setHours(localDate.getHours() + 9) // UTC+9로 변환
    const day = localDate.getDate() // 변환된 한국 날짜의 '일(day)' 값

    groupedData[day - 1].push(item) // 배열은 0부터 시작하므로 day-1 인덱스에 추가
  })

  // 결과 객체 생성
  const result = Object.fromEntries(
    groupedData.map((items, index) => [index + 1, items]),
  )

  return result
}
