import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer>
            <p>Все права защищены</p>
            <div>
                <img src={'/img/Facebook.png'} alt={"#"} />
                <img src={'/img/Twitter.png'} alt={"#"} />
                <img src={'/img/Linkedin.png'} alt={"#"} />
                <img src={'/img/GooglePlus.png'} alt={"#"} />
                <img src={'/img/Telegram.png'} alt={"#"} />
            </div>
        </footer>
    )
}

export default Footer;