import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form, Icon, Input } from 'shared/ui'
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
        <Form>
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
              <Input
                type="text"
                placeholder="카테고리 이름을 적어주세요."
                value={f.category}
                onChange={handler.category(f.id)}
              />
            </div>
          ))}
          <button
            type="button"
            className="flex flex-row items-center justify-center gap-4 py-2 border rounded"
            onClick={handler.create}
          >
            <Icon type="create-category" />
            <p>카테고리 추가하기</p>
          </button>
        </Form>
      </Body>
    </Container>
  )
}
