import styles from './Cards.module.css';
import Card from './Card/Card';

const Cards = () => {
    return(
        <div className={styles.Cards}>
            <Card CardImg = {'/img/Card1.jpg'} CardTitle = {'Грейпфрутовый сок'} CardText = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}></Card>
            <Card CardImg = {'/img/Card2.jpg'} CardTitle = {'Персиковый сок'} CardText = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}></Card>
            <Card CardImg = {'/img/Card3.jpg'} CardTitle = {'Манго сок'} CardText = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}></Card>
            <Card CardImg = {'/img/Card3.jpg'} CardTitle = {'Драгон сок'} CardText = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}></Card>
        </div>
    )
}

export default Cards;