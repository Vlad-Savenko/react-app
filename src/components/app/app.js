import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


function app() {

    const data = [
        {name:"Oleg N.",salary:"800",increase:false,rice:false,id: 1},
        {name:"Vlad S..",salary:"2000",increase:true,rice:false,id: 2},
        {name:"Anton N.",salary:"400",increase:false,rice:false,id: 3},
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm/>

        </div>
    )
}

export default app;