import React from 'react'
import { useTranslation } from 'react-i18next';
import { HeaderContainer } from './styles';

const lngs = {
  pt: { nativeName: 'Português' },
  en: { nativeName: 'Inglês' },
};

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <HeaderContainer>
        <h1>{ t('header.description') }</h1>

        <div>
          <select name="cars" id="cars" onChange={(e) => i18n.changeLanguage(e.target.value)}>
            {Object.keys(lngs).map((lng) => (
              <option value={lng} key={lng}>{lngs[lng].nativeName}</option>
            ))}
          </select>
        </div>
    </HeaderContainer>
  )
}

export default Header