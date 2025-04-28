import style from './Card.module.css';

export function Card({ name, image, ki, maxKi, race, gender, affiliation }) {
  return (
    <div className={style.card}>
      <div className={style.cardImageContainer}>
        <img src={image} alt={name} className={style.cardImage} />
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{name}</h3>
          <div className={style.cardDetails}>
            <p><strong>Raça: </strong> {race}</p>
            <p><strong>Gênero: </strong> {gender}</p>
            <p><strong>KI: </strong> {ki}</p>
            <p><strong>KI Máximo: </strong>{maxKi}</p>
            <p><strong>Afiliação: </strong>{affiliation}</p>
          </div>
        </div>
      </div>
    </div>
    )
}