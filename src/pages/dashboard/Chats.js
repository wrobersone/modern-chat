import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material'
import React from 'react'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import {styled, alpha, useTheme} from '@mui/material/styles'
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data'
import SimpleBarStyle from '../../components/Scrollbar'
import { Search, SearchIconWrapper, StyledInputBase} from "../../components/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", borderRadius: 1, backgroundColor: theme.palette.mode === "light" ? "white" : theme.palette.background.default }} p={2}>
      <Stack direction="row" spacing={2} alignItems={"center"} justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {online ? <StyledBadge overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">
            <Avatar src={faker.image.avatar()} />
          </StyledBadge> : <Avatar src={faker.image.avatar()} />}
          
          <Stack spacing={0.3}>
            <Typography variant='subtitle2'>{name}</Typography>
            <Typography variant='caption'>{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant='caption'>{time}</Typography>
          <Badge color='primary' badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  )
}

const Chats = () => {
  const theme = useTheme();
  return (
    <Box sx={{ 
        position: "relative", 
        height: "100vh", 
        width: 320, 
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper, 
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", 
        }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>
                Chats
            </Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
        </Stack> 
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='"#709CE6' />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction="column" spacing={2} sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                Pinned
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />
                })}
              </Typography>
            </Stack>
            <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                All Chats
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />
                })}
              </Typography>
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Chats
