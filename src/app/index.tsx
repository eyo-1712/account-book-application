import { AccountCalendarPage } from 'pages'
import { AccountFormPage } from 'pages/account-book/ui/form'
import { SummaryDetailPage } from 'pages/account-book/ui/summary-detail'
import { SummaryMonthPage } from 'pages/account-book/ui/summary-month'
import { LoginPage } from 'pages/auth/ui/login'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AccountCalendarPage />} />
      <Route path="/summary" element={<SummaryMonthPage />} />
      <Route path="/summary/:id" element={<SummaryDetailPage />} />
      <Route path="/account/form" element={<AccountFormPage />} />
      <Route path="/account/form/:id" element={<AccountFormPage />} />
      <Route />
    </Routes>
  </BrowserRouter>
)

export default App
