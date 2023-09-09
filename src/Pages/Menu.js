import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/Data'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'center',
        mt:1
      }}>
        {
          MenuList.map(menu => (
            <Card sx={{
              maxWidth: "360px",
              display: "flex",
              m: 2
            }}>
              <CardActionArea>
                <CardMedia sx={{
                  minHeight: '400px'
                }}
                  component={'img'}
                  src={menu.image}
                  alt={menu.name} />
                <Typography variant='h5'  gutterBottom component={"div"} sx={{mx:1}}>
                  {menu.name}
                </Typography>
                <Typography variant='body2' sx={{p:1}}>{menu.description}</Typography>
              </CardActionArea>

            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu