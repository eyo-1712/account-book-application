import { AppBar } from '../../../../shared/ui/appbar'
import { Container } from '../../../../shared/ui/container'
import { Calendar } from '../../../../widgets/calendar/ui'

export const AccountCalendarPage = () => (
  <Container>
    <AppBar title="가계부" />
    <Calendar />
  </Container>
)
