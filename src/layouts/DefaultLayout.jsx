import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'

const SimplePage = React.lazy(() => import('../pages/SimplePage'))
const PageWithParam = React.lazy(() => import('../pages/PageWithParam'))
const NotFound = React.lazy(() => import('../pages/NotFoundPage'))

const DefaultLayout = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route exact path="/" element={<SimplePage />} />
          <Route exact path="/:id" element={<PageWithParam />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default DefaultLayout
