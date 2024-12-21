import { withAuth, withNoAuth } from 'features/user'
import { AnalysisPage as analysisPage } from './analysis/ui'
import { LoginPage as loginPage } from './auth/ui/login'
import { CategoryDetailPage as categoryDetailPage } from './category/ui/detail'
import { CategoryFormPage as categoryFormPage } from './category/ui/form'
import { CategoryListPage as categoryListPage } from './category/ui/list'
import { FixedDetailPage as fixedDetailPage } from './fixed/detail'
import { FixedFormPage as fixedFormPage } from './fixed/form'
import { FixedListPage as fixedListPage } from './fixed/list'
import { SummaryCalendarPage as summaryCalendarPage } from './summary/ui/calendar'
import { SummaryFormPage as summaryFormPage } from './summary/ui/form'
import { SummaryDetailPage as summaryDetailPage } from './summary/ui/summary-detail'
import { SummaryMonthPage as summaryMonthPage } from './summary/ui/summary-month'

// common
export { NotFoundPage } from './not-found'

// no auth
export const LoginPage = withNoAuth(loginPage)

// auth
export const SummaryCalendarPage = withAuth(summaryCalendarPage)
export const SummaryFormPage = withAuth(summaryFormPage)
export const SummaryDetailPage = withAuth(summaryDetailPage)
export const SummaryMonthPage = withAuth(summaryMonthPage)
export const CategoryListPage = withAuth(categoryListPage)
export const CategoryFormPage = withAuth(categoryFormPage)
export const CategoryDetailPage = withAuth(categoryDetailPage)
export const FixedListPage = withAuth(fixedListPage)
export const FixedDetailPage = withAuth(fixedDetailPage)
export const FixedFormPage = withAuth(fixedFormPage)
export const AnalysisPage = withAuth(analysisPage)
