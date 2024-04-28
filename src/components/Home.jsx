import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
// import BannerImage from '../assets/HomeImg.jpg'

const Home = () => {
  return <>
    <Box sx={{
      mt: { lg: '150px', xs: '70px' },
      ml: { sm: '50px' }
    }} position='relative' p='20px'>

      <Typography style={{ color: "#FF2625", fontWeight: '600', fontSize: '26px' }}>
        JIIT CAFETERIA
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Where every flavor
        <p>tells a story.</p>
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb='4px'>
        Discover the most satisfying dishes tailored to your taste buds!
      </Typography>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        CAFETERIA
      </Typography>

    </Box>
  </>
}

export default Home