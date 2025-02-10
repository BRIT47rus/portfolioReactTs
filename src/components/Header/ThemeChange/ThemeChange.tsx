
import { useEffect, useState } from 'react';
import styles from './ThemeChange.module.scss';

export const ThemeChange = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);
    }, [theme])

    const handleChangeTheme = () => {
        {
            setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
        }
    }
    return (
        <div className={styles.themeChange}
            onClick={handleChangeTheme}>chnge</div>
    )

}