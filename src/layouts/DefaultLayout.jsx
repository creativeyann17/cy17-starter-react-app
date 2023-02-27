import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingPage from '../pages/LoadingPage'

const ContextPage = React.lazy(() => import('../pages/ContextPage'))
const SimplePage = React.lazy(() => import('../pages/SimplePage'))
const PageWithParam = React.lazy(() => import('../pages/PageWithParam'))
const AxiosPage = React.lazy(() => import('../pages/AxiosPage'))
const NotFound = React.lazy(() => import('../pages/NotFoundPage'))

const DefaultLayout = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route exact path="/" element={<SimplePage />} />
          <Route path="/axios" element={<AxiosPage />} />
          <Route path="/context" element={<ContextPage />} />
          <Route path="/:id" element={<PageWithParam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default DefaultLayout
