import { AppBar, Body, Container } from 'shared/ui'

export const AccountFormPage = () => (
  <Container>
    <AppBar actions={<button type="submit">추가</button>} />
    <Body>
      <form className="flex flex-col w-full gap-4">
        <input
          type="number"
          placeholder="금액을 입력하세요."
          className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
        />
        <input
          type="text"
          placeholder="카테고리를 선택하세요."
          className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
        />
        <input
          type="text"
          placeholder="지출일시"
          className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
        />
      </form>
    </Body>
  </Container>
)
