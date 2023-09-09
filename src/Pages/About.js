import React from 'react'
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <Layout>
       <Box 
       sx={{my:5,
       textAlign:"center",
       p:3,
       "& h4":{
        fontWeight:'bold',
        my:2,
        fontSize: "2rem"        
       },
       "& p":{
        textAlign:"justify"
       },
       "@media (max-width:600px)":{
        mt: 0,
        "& h4" :{
          fontSize: "1.5rem",
        },
       },
       }}>
        <Typography 
        variant='h4'
        >
          Welcome To My Restaurant
        </Typography>
        <p>
        At [Restaurant Name], we believe that dining is not just about the food; it's about creating an unforgettable experience for our guests. Nestled in the heart of [City Name], our restaurant is a culinary destination that combines exquisite flavors, exceptional service, and a warm, inviting ambiance.

Our journey began with a passion for gastronomy and a commitment to providing a dining experience like no other. Since our establishment, we have been dedicated to crafting a menu that celebrates the finest ingredients, sourced from local farmers and trusted suppliers. Our talented team of chefs takes pride in creating innovative dishes that tantalize the taste buds and showcase the diversity of flavors from around the world.

Step inside [Restaurant Name], and you will be greeted by a charming and stylish setting designed to stimulate your senses. Our thoughtfully curated décor blends contemporary elements with a touch of rustic charm, creating an atmosphere that is both elegant and comfortable. Whether you're joining us for a romantic dinner, a family celebration, or a business gathering, we have the perfect space to accommodate your needs.

But it's not just our exceptional food and beautiful surroundings that set us apart. Our attentive and knowledgeable staff are passionate about delivering personalized service, ensuring that every visit to [Restaurant Name] is a memorable one. From the moment you walk through our doors until the time you leave, we strive to exceed your expectations and create an experience that will linger in your memories.

At [Restaurant Name], we are committed to sustainability and supporting local communities. We strive to minimize our environmental footprint by using eco-friendly practices and partnering with suppliers who share our values. We believe that by making responsible choices, we can contribute to a better future for generations to come.

Whether you're a culinary enthusiast seeking bold flavors, a connoisseur of fine wines, or simply someone looking for an exceptional dining experience, we invite you to join us at [Restaurant Name]. Indulge in our carefully crafted menu, savor our delightful cocktails, and immerse yourself in an atmosphere of warmth, sophistication, and culinary artistry.

Thank you for choosing [Restaurant Name]. We look forward to serving you and creating a truly memorable experience.

Bon appétit!

[Restaurant Name] Management and Staff
        </p> <br/>
        <p>
        At [Restaurant Name], we believe that dining is not just about the food; it's about creating an unforgettable experience for our guests. Nestled in the heart of [City Name], our restaurant is a culinary destination that combines exquisite flavors, exceptional service, and a warm, inviting ambiance.

Our journey began with a passion for gastronomy and a commitment to providing a dining experience like no other. Since our establishment, we have been dedicated to crafting a menu that celebrates the finest ingredients, sourced from local farmers and trusted suppliers. Our talented team of chefs takes pride in creating innovative dishes that tantalize the taste buds and showcase the diversity of flavors from around the world.

Step inside [Restaurant Name], and you will be greeted by a charming and stylish setting designed to stimulate your senses. Our thoughtfully curated décor blends contemporary elements with a touch of rustic charm, creating an atmosphere that is both elegant and comfortable. Whether you're joining us for a romantic dinner, a family celebration, or a business gathering, we have the perfect space to accommodate your needs.

But it's not just our exceptional food and beautiful surroundings that set us apart. Our attentive and knowledgeable staff are passionate about delivering personalized service, ensuring that every visit to [Restaurant Name] is a memorable one. From the moment you walk through our doors until the time you leave, we strive to exceed your expectations and create an experience that will linger in your memories.


[Restaurant Name] Management and Staff
        </p>
       </Box>
    </Layout>
  )
}

export default About