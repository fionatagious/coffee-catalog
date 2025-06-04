type SelectedOptionFilterProps = {
  selectedOption: string;
  onChange: (option: string) => void;
};

const SelectedOptionFilter: React.FC<SelectedOptionFilterProps> = ({
  selectedOption,
  onChange,
}) => {
  const handleClick = () => {
    onChange(""); // Clear the selected option
    // clear search params as well
  };

  return (
    <div className="inline-flex items-center bg-amber-900 text-white px-2 py-1 rounded-xl max-h-8">
      <span className="mx-2">{selectedOption}</span>
      <div onClick={handleClick} className="close-button">
        x
      </div>
    </div>
  );
};

export default SelectedOptionFilter;
