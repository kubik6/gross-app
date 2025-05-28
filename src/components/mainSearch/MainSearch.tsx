import React, { useState, useRef, useEffect } from 'react';
import '@/components/mainSearch/mainSearch.scss';
import { JobCategories } from '@/enums/JobCategories'; // adjust the import path
import { useSelector } from 'react-redux';

const options = [
  { value: '', label: 'Select a category' },
  ...Object.values(JobCategories).map((category) => ({
    value: category,
    label: category,
  })),
];

export default function SearchWithSelect() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
   const { searchTerm } = useSelector((state: any) => state.vacancies);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => opt.value === selected)?.label || 'Select a category';

  return (
    <div className="search-select">
      <input
        type="text"
        className="search-select__input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search input"
      />

      <div
        className={`search-select__dropdown ${isOpen ? 'search-select__dropdown--open' : ''}`}
        ref={dropdownRef}
      >
        <button
          type="button"
          className="search-select__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedLabel}
          <span className="search-select__arrow">&#9662;</span>
        </button>

        {isOpen && (
          <ul className="search-select__options" role="listbox">
            {options
              .filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
              .map(({ value, label }) => (
                <li
                  key={value}
                  className={`search-select__option ${
                    selected === value ? 'search-select__option--selected' : ''
                  }`}
                  onClick={() => {
                    setSelected(value);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={selected === value}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelected(value);
                      setIsOpen(false);
                    }
                  }}
                >
                  {label}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}