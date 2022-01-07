import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{
        display:  'flex',
        /* position: 'absolute', */
        /* marginTop: "10rem", */
        bgcolor: "grey",
        width: '4em',
        height: '4em',
        /* zIndex: 3, */
      }} variant="rounded">
      </Avatar>
    </Stack>
  );
}
