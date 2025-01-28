import React, {
  useState,
  useEffect,
  type ReactNode,
  type JSX,
  useRef,
} from "react";
import Modal1 from "~/blocks/modal/Modal1"; // Ensure the correct path
import List1 from "~/blocks/list/List1";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // Make the children prop optional
  data: {
    icon: JSX.Element;
    category: string;
    description: string;
    year: number;
    offer: string;
    segment: string;
  }[]; // Define the data prop type
  onSearchResults: (results: any) => void; // Define the callback prop type
}

const SearchModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  data,
  onSearchResults,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState(data);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSearchResults(data); // Reset results when modal closes
    } else {
      // Focus the search input when modal opens
      searchInputRef.current?.focus();
    }
  }, [isOpen, data, searchInputRef]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredResults = data.filter((item) => {
      return item.description.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredResults); // Update the search results state
    onSearchResults(filteredResults); // Pass the filtered results
  };

  return (
    <Modal1 isOpen={isOpen} onClose={onClose}>
      <div
        className="w-auto max-h-96 overflow-y-auto" // Add padding to the bottom
      >
        <h2 className="text-2xl mb-4">Search</h2>
        <div className="px-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Type your search here..."
            onChange={handleSearch}
            value={searchTerm}
            ref={searchInputRef} // Assign the ref to the input element
          />
        </div>
        {/* Conditionally render List1 based on searchTerm length */}
        {searchTerm.length >= 3 && <List1 data={searchResults} />}
      </div>
    </Modal1>
  );
};

export default SearchModal;
