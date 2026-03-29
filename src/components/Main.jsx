import { useState } from 'react';
import Button from './Button';
import Card from './Card';


export default function ButtonList(props) {
    const { languages } = props;

    const [activeId, setActiveId] = useState(languages[0].id);

    const activeLanguage = languages.find(
        (lang) => lang.id === activeId
    );

    return (
        <>
            <div className='main-content'>
                <div className="button-list">
                    {languages.map((lang) => (
                        <Button
                            key={lang.id}
                            lang={lang}
                            isActive={activeId === lang.id}
                            onClick={() => setActiveId(lang.id)}
                        />
                    ))}
                </div>

                <Card language={activeLanguage} />
            </div>
        </>
    )

}
