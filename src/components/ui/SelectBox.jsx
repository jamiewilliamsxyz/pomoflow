export const SelectBox = ({ settingName, settingAction, setting }) => {
  return (
    <div>
      <label htmlFor={setting}>{settingName}</label>
      <select id={setting} defaultValue={settingAction} className="select">
        <option disabled={true}>{settingAction}</option>
        <option>Map render options, have as props? - probably not</option>
        <option>Amber</option>
        <option>Velvet</option>
      </select>
    </div>
  );
};
