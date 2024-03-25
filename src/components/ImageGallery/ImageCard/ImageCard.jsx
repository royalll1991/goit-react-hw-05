import css from './ImageCard.module.css'

function ImageCard ({small,description,likes, onClick}) {

    return (<div onClick={onClick} className={css.box}>
        <img src={small} alt={description} className={css.card}/>
        <p >likes {likes}</p>
      </div>);
}
export default ImageCard;
