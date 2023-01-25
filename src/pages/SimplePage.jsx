import React from 'react'
import { useTranslation } from 'react-i18next'

const SimplePage = () => {
  const { t } = useTranslation()
  return (
    <div className="page">
      <h1>{t('page1')}</h1>
    </div>
  )
}

export default SimplePage
