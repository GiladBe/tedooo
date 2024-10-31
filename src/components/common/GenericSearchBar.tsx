import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    onSearch: (query: string) => void; // Function that takes a string and returns void
    width: number
    height: number
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, width, height }) => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        position="start"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor: '#f4f5f5',
                borderRadius: '32px',
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '& input': {
                    padding: '10px 14px',

                },
            }}
        />
    );
};

export default SearchBar;