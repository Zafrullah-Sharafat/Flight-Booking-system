export default function DateFeild({ title, changeHandler, selectName, value }) {
  return (
    <div className="des-from">
      <p>{title}</p>
      <input
        type="date"
        className="outline-none px-2 py-2 w-full date"
        name="date"
        id="lws-date"
        onChange={(e) => {
          changeHandler(selectName, e.target.value);
        }}
        value={value}
        required
      />
    </div>
  );
}
