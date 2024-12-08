import {
  AccountCalendarPage,
  AccountFormPage,
  CategoryDetailPage,
  CategoryFormPage,
  CategoryListPage,
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
      <Route path="/category/:id" element={<CategoryDetailPage />} />
      <Route path="/category/form" element={<CategoryFormPage />} />

      <Route path="/fixed" element={<FixedListPage />} />

      {/* common */}
      <Route path="*" element={<NotFoundPage />} />
      <Route />
    </Routes>
  </BrowserRouter>
)
