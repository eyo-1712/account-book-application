import { withAuth, withNoAuth } from 'features/user'
import { AccountCreateFormPage as accountCreateFormPage } from './account/ui/create-form'
import { AccountDetailPage as accountDetailPage } from './account/ui/detail'
import { AccountListPage as accountListPage } from './account/ui/list'
import { AccountTransferPage as accountTransferPage } from './account/ui/transfer'
import { AnalysisPage as analysisPage } from './analysis/ui'
import { LoginPage as loginPage } from './auth/ui/login'
import { CreateCategoryFormPage as createCategoryFormPage } from './category/ui/create-form'
import { CategoryDetailPage as categoryDetailPage } from './category/ui/detail'
import { CategoryListPage as categoryListPage } from './category/ui/list'
import { UpdateCategoryFormPage as updateCategoryFormPage } from './category/ui/update-form'
import { FixedDetailPage as fixedDetailPage } from './fixed/ui/detail'
import { FixedFormPage as fixedFormPage } from './fixed/ui/form'
import { FixedListPage as fixedListPage } from './fixed/ui/list'
import { SummaryCalendarPage as summaryCalendarPage } from './summary/ui/calendar'
import { SummaryFormPage as summaryFormPage } from './summary/ui/form'
import { SummaryDetailPage as summaryDetailPage } from './summary/ui/summary-detail'
import { SummaryMonthPage as summaryMonthPage } from './summary/ui/summary-month'

// common
export { NotFoundPage } from './not-found/ui'

// no auth
export const LoginPage = withNoAuth(loginPage)

// auth
export const SummaryCalendarPage = withAuth(summaryCalendarPage)
export const SummaryFormPage = withAuth(summaryFormPage)
export const SummaryDetailPage = withAuth(summaryDetailPage)
export const SummaryMonthPage = withAuth(summaryMonthPage)
export const CategoryListPage = withAuth(categoryListPage)
export const CreateCategoryFormPage = withAuth(createCategoryFormPage)
export const UpdateCategoryFormPage = withAuth(updateCategoryFormPage)
export const CategoryDetailPage = withAuth(categoryDetailPage)
export const FixedListPage = withAuth(fixedListPage)
export const FixedDetailPage = withAuth(fixedDetailPage)
export const FixedFormPage = withAuth(fixedFormPage)
export const AnalysisPage = withAuth(analysisPage)
export const AccountListPage = withAuth(accountListPage)
export const AccountFormPage = withAuth(accountCreateFormPage)
export const AccountDetailPage = withAuth(accountDetailPage)
export const AccountTransferPage = withAuth(accountTransferPage)
