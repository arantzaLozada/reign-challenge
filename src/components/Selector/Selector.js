import { useFilterName } from '../../context/filterContext';
import angularIcon from '../../assets/angular-icon.png';
import './selector.css';

export function Selector() {
  const { valueName, setValueName } = useFilterName();

  const handleChange = (e) => {
    setValueName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="selector-container">
        <select
          className="select-css"
          value={valueName}
          onChange={handleChange}
        >
          <option value="reactjs">React</option>
          <option value="angular">Angular</option>
          <option value="vuejs">Vue</option>
        </select>
      </div>
    </>
  );
}
