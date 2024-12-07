import { BackButton } from 'features/router'
import { AccountTypeMapper, IAccountType } from 'shared/lib'
import { AppBar, Body, Container } from 'shared/ui'
import { useLogic } from './logic'
import { zForm } from './validation'

export const AccountFormPage = () => {
  const { value, handler } = useLogic()

  return (
    <Container>
      <AppBar
        title={`${AccountTypeMapper[value.type as IAccountType]} 내역 추가`}
        leading={<BackButton />}
        actions={
          <button
            type="submit"
            disabled={!zForm.safeParse(value).success}
            className="font-bold text-blue-600 disabled:text-gray-300"
          >
            추가
          </button>
        }
      />
      <Body>
        <form className="flex flex-col w-full gap-4">
          <div className="flex flex-row justify-evenly">
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
                  className={`w-full font-bold ${value.type === 'expenditure' ? 'text-blue-600' : 'text-gray-300'}`}
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
                  className={`w-full font-bold ${value.type === 'income' ? 'text-blue-600' : 'text-gray-300'}`}
                  onClick={handler.type('income')}
                >
                  수입
                </button>
              </label>
            </div>
          </div>
          <br />
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
