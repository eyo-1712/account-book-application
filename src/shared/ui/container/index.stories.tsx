import { Container } from '.'
import { AppBar } from '../appbar'

export default {
  component: Container,
  title: 'Container',
  tags: ['Shared'],
}

export const Default = {
  args: {
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
        <p className="text-3xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
      </>
    ),
  },
}

export const WithAppBar = {
  args: {
    children: (
      <>
        <AppBar title="APP BAR" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          perspiciatis error, quaerat, non nobis, quia veritatis illo eos iusto
          cum quae nihil in repudiandae quibusdam voluptatibus repellat quis
          rerum minima.
        </p>
      </>
    ),
  },
}
