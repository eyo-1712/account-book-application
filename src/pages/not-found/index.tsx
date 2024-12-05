import { Container } from 'shared/ui'

export const NotFoundPage = () => (
  <Container>
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <p>찾을 수 없는 페이지입니다.</p>
      <br />
      <button type="button">뒤로가기</button>
    </main>
  </Container>
)
