import { useState, useRef, useEffect, FC } from 'react';
import '@/components/mainSearch/mainSearch.scss';
import { JobCategories } from '@/enums/JobCategories';
import { CompaniesName } from '@/enums/CompaniesName';

// Generic option type
interface Option {
  value: string;
  label: string;
}

// DropdownSelect uses original .search-select structure for styling
const DropdownSelect: FC<{ options: Option[]; placeholder: string }> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayLabel = options.find(opt => opt.value === selected)?.label || placeholder;

  return (
    <div className="search-select" ref={dropdownRef}>
      <div
        className={`search-select__dropdown ${isOpen ? 'search-select__dropdown--open' : ''}`}
      >
        <button
          type="button"
          className="search-select__toggle"
          onClick={() => setIsOpen(prev => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {displayLabel} <span className="search-select__arrow">▼</span>
        </button>

        <ul className="search-select__options" role="listbox">
          {options.map(opt => (
            <li
              key={opt.value}
              className={`search-select__option ${opt.value === selected ? 'search-select__option--selected' : ''}`}
              role="option"
              aria-selected={opt.value === selected}
              tabIndex={0}
              onClick={() => { setSelected(opt.value); setIsOpen(false); }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelected(opt.value);
                  setIsOpen(false);
                }
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// MainSearch: one search input plus two DropdownSelects inline
export const MainSearch: FC = () => {
  const [search, setSearch] = useState('');

  const jobOptions: Option[] = [
    { value: '', label: 'Select a category' },
    ...Object.values(JobCategories).map(c => ({ value: c, label: c })),
  ];
  const companyOptions: Option[] = [
    { value: '', label: 'Select a company' },
    ...Object.values(CompaniesName).map(c => ({ value: c, label: c })),
  ];

  return (
    <div className="main-search-container">
      <input
        type="text"
        className="search-select__input"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="Search"
      />
      <DropdownSelect options={jobOptions} placeholder="Select a category" />
      <DropdownSelect options={companyOptions} placeholder="Select a company" />
    </div>
  );
};

export default MainSearch;