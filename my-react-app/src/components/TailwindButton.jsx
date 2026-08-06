import "./ButtonCSS";

const TailwindButton = ({ label }) => {
  return (
    <>
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded">
        {label}
      </button>
      {/* exemplo usando bootstrap
      <button className="btn btn-primary">{label}</button> */}
    </>
  );
};

export default TailwindButton;