import Card from './Card';
import data from '../datas/datas.json';
console.table(data);
function CardLocker(){
    return(
        <div className="cardlocker">
            {data.map((index)=> (
                <Card cover={index.cover}  id={index.id} key={index}></Card>
            ))}
        </div>
    )
}

export default CardLocker;