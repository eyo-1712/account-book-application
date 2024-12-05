import {
  AccountCalendarPage,
  AccountFormPage,
  LoginPage,
  NotFoundPage,
  SummaryDetailPage,
  SummaryMonthPage,
} from 'pages'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/*  */}
      <Route path="/" element={<AccountCalendarPage />} />
      <Route path="/summary" element={<SummaryMonthPage />} />
      <Route path="/summary/:id" element={<SummaryDetailPage />} />
      <Route path="/account/form" element={<AccountFormPage />} />
      <Route path="/account/form/:id" element={<AccountFormPage />} />
      {/*  */}
      <Route path="*" element={<NotFoundPage />} />
      <Route />
    </Routes>
  </BrowserRouter>
)

export default App
