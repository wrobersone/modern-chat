import React from 'react'
import { Box, Stack, IconButton, InputAdornment, TextField } from '@mui/material'
import { useTheme, styled } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';

const StyledInput = styled(TextField)(({ theme }) => ({
    "&.MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    }
}));

const Footer = () => {
    const theme = useTheme();
  return (
    <Box p={2} sx={{ height: 100, width: "100%", backgroundColor: theme.palette.mode === "light" ? "white" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}>
        <Stack direction="row" alignItems="center" spacing={3}>
            <StyledInput fullWidth variant='filled' InputProps={{ 
                disableUnderline: true,
                startAdornment: (<InputAdornment>
                    <IconButton>
                        <LinkSimple />
                    </IconButton></InputAdornment>),
                endAdornment: (<InputAdornment>
                <IconButton>
                    <Smiley />
                </IconButton></InputAdornment>)
             }} />
            <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1 }}>
                <Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
                    <IconButton>
                        <PaperPlaneTilt color='white' />
                    </IconButton>
                </Stack>
            </Box>
        </Stack>
      </Box>
  )
}

export default Footer
