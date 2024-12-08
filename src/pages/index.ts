import { withAuth, withNoAuth } from 'features/user'
import { AccountCalendarPage as accountCalendarPage } from './account-book/ui/calendar'
import { AccountFormPage as accountFormPage } from './account-book/ui/form'
import { SummaryDetailPage as summaryDetailPage } from './account-book/ui/summary-detail'
import { SummaryMonthPage as summaryMonthPage } from './account-book/ui/summary-month'
import { LoginPage as loginPage } from './auth/ui/login'
import { CategoryDetailPage as categoryDetailPage } from './category/ui/detail'
import { CategoryFormPage as categoryFormPage } from './category/ui/form'
import { CategoryListPage as categoryListPage } from './category/ui/list'
import { FixedListPage as fixedListPage } from './fixed/list'

// common
export { NotFoundPage } from './not-found'

// no auth
export const LoginPage = withNoAuth(loginPage)

// auth
export const AccountCalendarPage = withAuth(accountCalendarPage)
export const AccountFormPage = withAuth(accountFormPage)
export const SummaryDetailPage = withAuth(summaryDetailPage)
export const SummaryMonthPage = withAuth(summaryMonthPage)
export const CategoryListPage = withAuth(categoryListPage)
export const CategoryFormPage = withAuth(categoryFormPage)
export const CategoryDetailPage = withAuth(categoryDetailPage)
export const FixedListPage = withAuth(fixedListPage)
