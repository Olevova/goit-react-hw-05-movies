import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [search, setSearch] = React.useState('');

  const onChangeSearch = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const onHandel = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <Box
      component="form"
      onSubmit={onHandel}
      sx={{
        '& > :not(style)': {
          marginTop: '10px',
          width: '45ch',
          display: 'grid',
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="search"
        value={search}
        onChange={onChangeSearch}
        id="outlined-basic"
        color="success"
        label="film name"
        variant="outlined"
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
      </Stack>
      <Outlet />
    </Box>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
