import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';


const EmployersList = ({data,onDelete,onTogleProp}) => {

    const elements = data.map(item => {
        const {id,...ItemProps} = item;
        return(
            <EmployersListItem 
                key={id} {...ItemProps}
                onDelete={() => onDelete(id)}
                onTogleProp ={(e) => onTogleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });


    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;