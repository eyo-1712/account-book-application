import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form } from 'shared/ui'
import { PERIOD } from './constant'

export const FixedFormPage = () => (
  <Container>
    <AppBar
      title="고정지출 추가"
      leading={<Back />}
      actions={<Button color="blue">추가</Button>}
    />
    <Body>
      <Form>
        <select id="period" className="p-2 border border-gray-400 rounded-md">
          {PERIOD.map((p) => (
            <option
              id={`period_${p.value}`}
              value={p.value}
              style={{ backgroundColor: 'white' }}
            >
              {p.text}
            </option>
          ))}
        </select>
      </Form>
    </Body>
  </Container>
)
