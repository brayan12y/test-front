import { useState } from 'react';
import './customSelect.scss';

interface DataSelection {
  name: string;
  value: string;
}

interface Props {
  selectedOption: DataSelection;
  setSelectedOption: Function;
  placeholder: string;
  dataSelection: DataSelection[];
}

const CustomSelect = ({
  selectedOption,
  setSelectedOption,
  dataSelection,
  placeholder,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClicked = (value: DataSelection) => {
    setSelectedOption(value);

    setIsOpen(false);
  };

  return (
    <div className='customSelect__container'>
      <span
        className='customSelect__container--dropDownHeader'
        role='button'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.name || placeholder}
      </span>
      {isOpen && (
        <div className='customSelect__container--dropDownListContainer'>
          <ul className='customSelect__container--dropDownList'>
            {dataSelection.map((data) => (
              <li
                key={`${data.value}`}
                onClick={() => handleOptionClicked(data)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
