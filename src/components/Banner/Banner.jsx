import styles from './Banner.module.css';

const Banner = () => {
    return(
        <div className={styles.Banner}>
            <div>
                <p>О пользе сока</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Banner;