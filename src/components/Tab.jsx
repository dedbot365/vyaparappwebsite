const Tab = ({ label, isSelected, onClick }) => (
    <div
      className={`tab-v px-4 py-2 cursor-pointer rounded-full transition-colors duration-200 ${
        isSelected ? 'bg-red-100 text-red-600 font-semibold border border-red-600' : 'text-gray-500'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
  
  export default Tab;
  