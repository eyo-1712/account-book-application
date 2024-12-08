import { BackButton } from 'features/router'
import { AppBar, Body, Container, Icon } from 'shared/ui'

export const CategoryFormPage = () => (
  <Container>
    <AppBar
      title="카테고리 추가"
      leading={<BackButton />}
      actions={
        <button
          type="submit"
          // disabled={!zForm.safeParse(value).success}
          className="font-bold text-blue-600 disabled:text-gray-300"
        >
          추가
        </button>
      }
    />
    <Body>
      <form className="flex flex-col w-full gap-4">
        <div className="flex flex-row items-center justify-start w-full gap-2">
          <button type="button" className="text-gray-600">
            <Icon type="remove-form" />
          </button>
          <input
            type="text"
            placeholder="카테고리 이름을 적어주세요."
            className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
          />
        </div>
        <button
          type="button"
          className="flex flex-row items-center justify-center py-2 border rounded gap-4"
        >
          <Icon type="create-category" />
          <p>카테고리 추가하기</p>
        </button>
      </form>
    </Body>
  </Container>
)
