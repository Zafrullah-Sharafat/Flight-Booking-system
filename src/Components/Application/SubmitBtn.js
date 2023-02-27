export default function SubmitBtn() {
  return (
    <button className="addCity" type="submit" id="lws-addCity">
      <svg
        width="15px"
        height="15px"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="text-sm">Book</span>
    </button>
  );
}
