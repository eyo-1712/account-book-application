import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Icon } from 'shared/ui'
import { useLogic } from './logic'
import { zForm } from './validation'

export const CategoryFormPage = () => {
  const { value, handler } = useLogic()

  return (
    <Container>
      <AppBar
        title="카테고리 추가"
        leading={<Back />}
        actions={
          <Button
            color="blue"
            type="submit"
            disabled={!zForm.safeParse(value.form).success}
          >
            추가
          </Button>
        }
      />
      <Body>
        <form className="flex flex-col w-full gap-4">
          {value.form.map((f) => (
            <div
              key={f.id}
              className="flex flex-row items-center justify-start w-full gap-2"
            >
              <button
                type="button"
                className="text-gray-600"
                onClick={handler.remove(f.id)}
              >
                <Icon type="remove-form" />
              </button>
              <input
                type="text"
                className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
                placeholder="카테고리 이름을 적어주세요."
                value={f.category}
                onChange={handler.category(f.id)}
              />
            </div>
          ))}
          <button
            type="button"
            className="flex flex-row items-center justify-center py-2 border rounded gap-4"
            onClick={handler.create}
          >
            <Icon type="create-category" />
            <p>카테고리 추가하기</p>
          </button>
        </form>
      </Body>
    </Container>
  )
}
