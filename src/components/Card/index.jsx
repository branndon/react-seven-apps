import React from 'react'
import { useTranslation } from 'react-i18next';

import { CardContainer } from './styles';
function Card({ name, age }) {
  const { t } = useTranslation();

  const labelAge = (age) => {
    if (age === 0) {
      return '';
    }

    return age === 1 ? 'ano' : 'anos';
  };

  return (
    <CardContainer>
        <div>
          <span>{t('home.name')}:</span> {name}
        </div>
        <div>
          <span>{t('home.age')}:</span> {age} {labelAge(age)}
        </div>
    </CardContainer>
  )
}

export default Card;
