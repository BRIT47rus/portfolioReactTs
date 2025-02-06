

import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li>Главная</li>
                <li>Увлечения</li>
                <li>Навыки</li>
                <li>Место работы</li>
                <li>Контакты</li>
            </ul>
        </header>
    )
}

