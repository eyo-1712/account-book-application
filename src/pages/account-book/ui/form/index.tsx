import { BackButton } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { useLogic } from './logic'

export const AccountFormPage = () => {
  const { value, handler } = useLogic()

  return (
    <Container>
      <AppBar
        title={`${value.type} 내역 추가`}
        leading={<BackButton />}
        actions={<button type="submit">추가</button>}
      />
      <Body>
        <form className="flex flex-col w-full gap-4">
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-row gap-4 flex-1 justify-center">
              <label htmlFor="type" className="w-full">
                <input
                  type="radio"
                  id="type"
                  value="수입"
                  name="type"
                  checked={value.type === '지출'}
                  className="hidden"
                />
                <button
                  type="button"
                  className={`w-full font-bold ${value.type === '지출' ? 'text-blue-600' : 'text-gray-300'}`}
                  onClick={handler.type('지출')}
                >
                  지출
                </button>
              </label>
            </div>
            <div className="flex flex-row gap-4 flex-1 justify-center">
              <label htmlFor="type" className="w-full">
                <input
                  type="radio"
                  id="type"
                  value="수입"
                  name="type"
                  checked={value.type === '수입'}
                  className="hidden"
                />
                <button
                  type="button"
                  className={`w-full font-bold ${value.type === '수입' ? 'text-blue-600' : 'text-gray-300'}`}
                  onClick={handler.type('수입')}
                >
                  수입
                </button>
              </label>
            </div>
          </div>
          <br />
          <input
            type="number"
            placeholder="금액을 입력하세요."
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
            value={value.money}
          />
          <input
            type="text"
            placeholder="카테고리를 선택하세요."
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
          />
          <input
            type="datetime-local"
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
          />
        </form>
      </Body>
    </Container>
  )
}
