import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form, Input, Select } from 'shared/ui'
import { useLogic } from './logic'
import { zForm } from './validation'

export const SummaryFormPage = () => {
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
        <Form>
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
          <Input
            type="datetime-local"
            value={value.datetime}
            onChange={handler.datetime}
          />
          <Select
            placeholder="계좌를 선택하세요"
            options={[{ label: '국민은행', value: 'kb-bank' }]}
          />
          <Select
            placeholder="카테고리를 선택하세요"
            options={[{ label: '국민은행', value: 'kb-bank' }]}
          />
          <Input
            type="number"
            placeholder="금액을 입력하세요."
            value={value.money}
            onChange={handler.money}
          />
        </Form>
      </Body>
    </Container>
  )
}
