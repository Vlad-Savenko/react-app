import {Component} from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:  [
                {name:"Oleg N.",salary:"800",increase:false,rice:false,id: 1},
                {name:"Vlad S..",salary:"2000",increase:true,rice:false,id: 2},
                {name:"Anton N.",salary:"400",increase:false,rice:false,id: 3},
            ]
        }
    }



    deleteItem = (id) => {
        this.setState (({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
 

    render() {
        return  (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployersAddForm/>
    
            </div>
        )
    }
}

export default App;