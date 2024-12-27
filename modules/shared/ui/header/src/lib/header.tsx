import React from 'react';

import {
  Breadcrumbs,
  Grid2,
  Link,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';

import { Link as RouterLink, useMatches } from 'react-router-dom';

export function Header() {
  return (
    <Paper className="mt-6 flex flex-col p-2 shadow ">
      <button style={{ backgroundColor: 'yellow', borderRadius: '30px' }}>
        click me
      </button>
    </Paper>
  );
}

export default Header;
