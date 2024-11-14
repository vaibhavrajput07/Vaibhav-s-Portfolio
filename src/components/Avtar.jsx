
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="./src/components/videos/vaibhav.jpg"
        sx={{ width: 45, height: 45 }}
      />
    </Stack>
  );
}
