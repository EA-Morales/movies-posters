const Button = ({ type, className, name, children, onClick }) => {
  const primary =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

  const secondary =
    'bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded';

  const tertiary =
    'bg-pink-200 hover:bg-pink-300 text-gray-700 font-bold py-2 px-4 rounded';

  return (
    <button
      className={` ${
        className === 'tertiary'
          ? `${tertiary}`
          : `${className === 'primary'}`
          ? `${primary}`
          : `${secondary}`
      } `}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
