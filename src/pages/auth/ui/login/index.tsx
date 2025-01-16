import { AppBar, Body, Container } from 'shared/ui'
import { useLogic } from './logic'

export const LoginPage = () => {
  const { handler } = useLogic()

  return (
    <Container>
      <AppBar title="로그인" />
      <Body center>
        <p className="font-bold text">나만의 가계부 만들기</p>
        <p className="text-sm text-gray-400">J들 기절</p>
        <br />
        <img
          src="https://picsum.photos/200"
          alt="onboarding"
          className="w-1/2"
        />
        <br />
        <p>SNS로 빠른 시작</p>
        <br />
        <button type="button" onClick={handler.logIn}>
          구글 로그인
        </button>
      </Body>
    </Container>
  )
}
