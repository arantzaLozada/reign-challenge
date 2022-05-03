import { useFilterName } from '../context/filterContext';

export function Selector() {
  const { valueName, setValueName } = useFilterName();

  const handleChange = (e) => {
    setValueName(e.target.value);
    // await apiFetch(`${e.target.value}`, page);
    console.log(e.target.value);
  };

  return (
    <>
      <div>
        <select value={valueName} onChange={handleChange}>
          <option value="reactjs">React</option>
          <option value="angular">Angular</option>
          <option value="vuejs">Vue</option>
        </select>
      </div>
    </>
  );
}
