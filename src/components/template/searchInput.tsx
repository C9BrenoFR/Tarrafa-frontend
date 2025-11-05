import { Search, X } from "lucide-react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    placeholder?: string;
}
const SearchInput = ({ searchTerm, setSearchTerm, placeholder = "Buscar" }: SearchInputProps) => {
    const clearSearch = () => {
        setSearchTerm('')
    }
    return (
        <div className="ml-auto flex items-center gap-2 border-2 rounded-sm border-gray-300 px-4 py-2">
            {!searchTerm ? (<Search />) : (<X className="cursor-pointer" onClick={clearSearch} />)}
            <input
                placeholder={placeholder}
                className="w-48 focus-visible:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;