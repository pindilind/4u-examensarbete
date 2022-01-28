import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { FaSearch } from 'react-icons/fa';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#75A488',
  color: "#ffffff",
  '&:hover': {
    backgroundColor: '#75A488',
    color: "#ffffff"
  },
  marginLeft: 0,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({ //Stylar iconen
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1,}}>
     
          <Search>
            <SearchIconWrapper>
              <FaSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Sök..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
  );
}
