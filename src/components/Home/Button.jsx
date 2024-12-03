// components/Button.js
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-black text-blue-500 font-semibold rounded hover:bg-red-700 hover:text-white transition"
    >
      {text}
    </button>
  );
};

export default Button;
