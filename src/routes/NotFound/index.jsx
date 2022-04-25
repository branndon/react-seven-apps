import React from 'react'

import { useTranslation } from 'react-i18next';

import { PageNotFound } from './styles';

function NotFound() {
  const { t } = useTranslation();

  return (
    <PageNotFound>
      <h2>{t('notFound.title')}</h2>
      <p>{t('notFound.description')}</p>
    </PageNotFound>
  )
}

export default NotFound;
