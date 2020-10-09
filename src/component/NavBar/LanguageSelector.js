import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useTranslations } from 'context-multi-language';

const LanguageSelector = () => {
    const { changeLanguage, languages } = useTranslations();

    let lang = localStorage.getItem('lang') || '';
    const setLanguage = (language) =>{
        changeLanguage(language)
        localStorage.setItem('lang', language)
        lang = language
    }

    return (
            <ButtonGroup style={{margin: 'auto'}}>
                {languages.map((language) => (
                    <Button key={language} onClick={() => setLanguage(language)}
                            style={{color: '#FFF', borderColor: '#FFF',
                                backgroundColor: language === lang? 'rgba(200,200,200,0.5)' : 'rgba(200,200,200,0.2)'}}>
                        {language}
                    </Button>
                ))}
            </ButtonGroup>
    );
};

export default LanguageSelector;
