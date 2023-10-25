import React, { useState } from 'react';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Profile', 'Home', 'Chats', 'Log Out'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <svg  className={`${isOpen ? 'rotate-180' : 'rotate-0'} w-6 ml-10 transition-all duration-150 hover:rotate-180 hover:p-0.5 hover:drop-shadow-lg`} 
                    onMouseEnter={() => setIsOpen(true)}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

      {isOpen && (
        <div 
            onMouseLeave={() => setIsOpen(false)}
            className={`text-sm transition-all origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
