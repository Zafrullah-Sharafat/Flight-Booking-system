export default function SelectFeild({
  title,
  icon,
  selectClassName,
  selectName,
  selectId,
  value,
  changeHandler,
  children,
}) {
  return (
    <div className={`des-from ${selectClassName}`}>
      <p>{title}</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <select
          className={`outline-none px-2 py-2 w-full ${selectClassName || ""}`}
          name={selectName}
          id={selectId}
          onChange={(e) => {
            changeHandler(selectName, e.target.value);
          }}
          value={value}
          required
        >
          {children}
        </select>
      </div>
    </div>
  );
}
