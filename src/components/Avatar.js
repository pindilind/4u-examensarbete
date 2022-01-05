import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{
        marginTop: "2rem",
        bgcolor: "grey",
        width: '6em',
        height: '6em'
      }} variant="rounded">
      </Avatar>
    </Stack>
  );
}
