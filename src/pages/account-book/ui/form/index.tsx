import { Back } from 'features/router'
import { AppBar, Body, Button, Container } from 'shared/ui'
import { useLogic } from './logic'
import { zForm } from './validation'

export const AccountFormPage = () => {
  const { value, handler } = useLogic()

  return (
    <Container>
      <AppBar
        title="거래 내역 추가"
        leading={<Back />}
        actions={
          <Button
            color="blue"
            type="submit"
            disabled={!zForm.safeParse(value).success}
          >
            추가
          </Button>
        }
      />
      <Body>
        <form className="flex flex-col w-full gap-6 text-lg">
          <div className="flex flex-row p-2 bg-gray-100 rounded-lg justify-evenly">
            <div className="flex flex-row justify-center flex-1 gap-4">
              <label htmlFor="type" className="w-full">
                <input
                  type="radio"
                  id="type"
                  value="expenditure"
                  name="type"
                  checked={value.type === 'expenditure'}
                  className="hidden"
                  readOnly
                />
                <button
                  type="button"
                  className={[
                    `w-full font-bold py-2`,
                    `${value.type === 'expenditure' ? 'bg-white rounded-lg' : 'text-gray-400'}`,
                  ].join(' ')}
                  onClick={handler.type('expenditure')}
                >
                  지출
                </button>
              </label>
            </div>
            <div className="flex flex-row justify-center flex-1 gap-4">
              <label htmlFor="type" className="w-full">
                <input
                  type="radio"
                  id="type"
                  value="income"
                  name="type"
                  checked={value.type === 'income'}
                  className="hidden"
                  readOnly
                />
                <button
                  type="button"
                  className={[
                    `w-full font-bold py-2`,
                    `${value.type === 'income' ? 'bg-white rounded-lg' : 'text-gray-400'}`,
                  ].join(' ')}
                  onClick={handler.type('income')}
                >
                  수입
                </button>
              </label>
            </div>
          </div>
          <input
            type="datetime-local"
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
            value={value.datetime}
            onChange={handler.datetime}
          />
          <input
            type="number"
            placeholder="금액을 입력하세요."
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
            value={value.money}
            onChange={handler.money}
          />
          <input
            type="text"
            placeholder="카테고리를 선택하세요."
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
            value={value.category}
            onChange={handler.category}
          />
        </form>
      </Body>
    </Container>
  )
}
