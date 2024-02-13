import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="Button">
                Всі працівники
            </button>
            <button 
            className="btn btn-outline-light"
            type="Button">
                На підвищення
            </button>
            <button 
            className="btn btn-outline-light"
            type="Button">
                З/П більше 100outline-light
            </button>
        </div>
    ); 
}

export default AppFilter