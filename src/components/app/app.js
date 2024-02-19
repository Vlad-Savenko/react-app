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
                {name:"Oleg N.",salary:"800",increase:false,rice:true,id: 1},
                {name:"Vlad S.",salary:"2000",increase:true,rice:false,id: 2},
                {name:"Anton N.",salary:"400",increase:false,rice:false,id: 3},
            ]
        }
        this.maxId = 4;
    }



    deleteItem = (id) => {
        this.setState (({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name,salary) => {

        const newItem = {
            name,
            salary,
            increase:false,
            rice:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data,newItem]
            return {
                data:newArr
            }
        })
    }

    onTogleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old,increase: !old.increase};
            const newArr = [...data.slice(0,index),newItem,...data.slice(index + 1)];
            return {
                data:newArr
            }
        })
    }

    onTogleRise = (id) => {
        console.log(`Rice this ${id}`);
    }
 

    render() {
        return  (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onTogleIncrease = {this.onTogleIncrease}
                onTogleRise = {this.onTogleRise}/>
                <EmployersAddForm
                onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;