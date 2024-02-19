
import './employers-list-item.css';

const EmployersListItem = (props) =>  {


    const {name,salary,onDelete,onTogleIncrease,onTogleRise,increase,rice} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if(increase) {
        classNames += ' increase'
    }
    if (rice){
        classNames += ' like'
    }
    return (
        <li className={classNames}>
            <span onClick={onTogleRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onTogleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    ) 
}
export default EmployersListItem;