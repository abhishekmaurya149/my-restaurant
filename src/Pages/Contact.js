import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, TableContainer, TableRow, Table, Paper, TableCell, Typography, TableHead, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2
          },
        }}>
        <Typography
          variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          At [Restaurant Name], we believe that dining is not just about the food; it's about creating an unforgettable experience for our guests. Nestled in the heart of [City Name], our restaurant is a culinary destination that combines exquisite flavors, exceptional service, and a warm, inviting ambiance.

        </p>
      </Box>
      <Box sx={{
        m:3, 
        width:"600px", 
        ml:10,
    "@media (max-width:600px)":{
      width:"300px"
    },
    }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "#fff", }} align='center'>Contact us  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  8429558448(TollFee)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  maurya@gamil.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <AddIcCallIcon sx={{ color: "green", pt: 1 }} />
                  8429554884
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact