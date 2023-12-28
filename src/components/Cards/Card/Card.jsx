import styles from './Card.module.css';

const Card = ({CardImg, CardTitle, CardText}) => {
    return(
        <div className={styles.Card}>
            <img src={CardImg} alt={""} />
            <div>
                <p>{CardTitle}</p>
                <p>{CardText}</p>
            </div>
        </div>
    )
}

export default Card;