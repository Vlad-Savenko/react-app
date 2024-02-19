import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data,onDelete,onTogleIncrease,onTogleRise}) => {

    const elements = data.map(item => {
        const {id,...ItemProps} = item;
        return(
            <EmployersListItem 
                key={id} {...ItemProps}
                onDelete={() => onDelete(id)}
                onTogleIncrease ={() => onTogleIncrease(id)}
                onTogleRise = {() => onTogleRise(id)}
                
                />
        )
    });


    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;