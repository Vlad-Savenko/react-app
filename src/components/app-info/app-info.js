import './app-info.css';

const AppInfo = (props) => {
    const {employers,inceased} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компанії фоксіОлег</h1>
            <h2>Загальна кількість працівників:{employers}</h2>
            <h2>Премію отримають: {inceased}</h2>
        </div>
    )
}
 export default AppInfo;
