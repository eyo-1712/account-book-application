import { useApiAuthInfo } from 'entities'
import {
  AccountCreateFormPage,
  AccountDetailPage,
  AccountListPage,
  AccountTransferPage,
  AccountUpdateFormPage,
  AnalysisPage,
  CategoryDetailPage,
  CategoryListPage,
  CreateCategoryFormPage,
  CreateSummaryFormPage,
  LoginPage,
  NotFoundPage,
  SummaryCalendarPage,
  SummaryDetailPage,
  SummaryMonthPage,
  UpdateCategoryFormPage,
} from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router'

export const Router = () => {
  useApiAuthInfo()

  return (
    <BrowserRouter>
      <Routes>
        {/* with no auth */}
        <Route path="/login" element={<LoginPage />} />

        {/* with auth */}
        <Route path="/" element={<SummaryCalendarPage />} />
        <Route path="/summary" element={<SummaryMonthPage />} />
        <Route path="/summary/:id" element={<SummaryDetailPage />} />
        <Route path="/summary/form" element={<CreateSummaryFormPage />} />
        <Route path="/summary/form/:id" element={<CreateSummaryFormPage />} />

        <Route path="/account" element={<AccountListPage />} />
        <Route path="/account/:id" element={<AccountDetailPage />} />
        <Route path="/account/form" element={<AccountCreateFormPage />} />
        <Route path="/account/form/:id" element={<AccountUpdateFormPage />} />
        <Route path="/account/:id/transfer" element={<AccountTransferPage />} />

        <Route path="/category" element={<CategoryListPage />} />
        <Route path="/category/:id" element={<CategoryDetailPage />} />
        <Route path="/category/form" element={<CreateCategoryFormPage />} />
        <Route path="/category/form/:id" element={<UpdateCategoryFormPage />} />

        {/* <Route path="/fixed" element={<FixedListPage />} />
            <Route path="/fixed/:id" element={<FixedDetailPage />} />
            <Route path="/fixed/form" element={<FixedFormPage />} />
            <Route path="/fixed/form/:id" element={<FixedFormPage />} /> */}

        <Route path="/analysis" element={<AnalysisPage />} />

        {/* common */}
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
