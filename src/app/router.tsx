import {
  AccountDetailPage,
  AccountFormPage,
  AccountListPage,
  AnalysisPage,
  CategoryDetailPage,
  CategoryFormPage,
  CategoryListPage,
  LoginPage,
  NotFoundPage,
  SummaryCalendarPage,
  SummaryDetailPage,
  SummaryFormPage,
  SummaryMonthPage,
} from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* with no auth */}
      <Route path="/login" element={<LoginPage />} />

      {/* with auth */}
      <Route path="/" element={<SummaryCalendarPage />} />
      <Route path="/summary" element={<SummaryMonthPage />} />
      <Route path="/summary/:id" element={<SummaryDetailPage />} />
      <Route path="/summary/form" element={<SummaryFormPage />} />
      <Route path="/summary/form/:id" element={<SummaryFormPage />} />

      <Route path="/account" element={<AccountListPage />} />
      <Route path="/account/:id" element={<AccountDetailPage />} />
      <Route path="/account/form" element={<AccountFormPage />} />
      <Route path="/account/form/:id" element={<AccountFormPage />} />

      <Route path="/category" element={<CategoryListPage />} />
      <Route path="/category/:id" element={<CategoryDetailPage />} />
      <Route path="/category/form" element={<CategoryFormPage />} />
      <Route path="/category/form/:id" element={<CategoryFormPage />} />

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
