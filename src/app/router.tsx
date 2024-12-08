import {
  AccountCalendarPage,
  AccountFormPage,
  CategoryDetailPage,
  CategoryFormPage,
  CategoryListPage,
  FixedDetailPage,
  FixedFormPage,
  FixedListPage,
  LoginPage,
  NotFoundPage,
  SummaryDetailPage,
  SummaryMonthPage,
} from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* with no auth */}
      <Route path="/login" element={<LoginPage />} />

      {/* with auth */}
      <Route path="/" element={<AccountCalendarPage />} />
      <Route path="/summary" element={<SummaryMonthPage />} />
      <Route path="/summary/:id" element={<SummaryDetailPage />} />
      <Route path="/account/form" element={<AccountFormPage />} />
      <Route path="/account/form/:id" element={<AccountFormPage />} />

      <Route path="/category" element={<CategoryListPage />} />
      <Route path="/category/form" element={<CategoryFormPage />} />
      <Route path="/category/:id" element={<CategoryDetailPage />} />

      <Route path="/fixed" element={<FixedListPage />} />
      <Route path="/fixed/form" element={<FixedFormPage />} />
      <Route path="/fixed/:id" element={<FixedDetailPage />} />

      {/* common */}
      <Route path="*" element={<NotFoundPage />} />
      <Route />
    </Routes>
  </BrowserRouter>
)
