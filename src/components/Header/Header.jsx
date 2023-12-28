import styles from './Header.module.css';

const Header = () => {
    return(
        <header>
            <img src={'/img/Ellipse1.png'} alt="#" />
            <div>
                <p>Бодрящий<br/>апельсин</p>
                <p>Вкус утреннего<br/>пробуждения</p>
            </div>
            <button>Купить</button>
        </header>
    )
}

export default Header;