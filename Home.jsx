import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Productcard from "./src/Productcard";

const Home = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleShowAll = () => {
    setSelectedCategory('');
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: "20px",
        backgroundColor: "#f4f6f8",  
        minHeight: "100vh"
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#3f51b5" }}>
        Category
      </Typography>
      <Box 
        sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "center", 
          paddingTop: "40px", 
          gap: "20px" 
        }}
      >
        <Button 
          variant="contained" 
          onClick={() => handleCategory('electronics')}
          sx={{ 
            backgroundColor: "#3f51b5", 
            color: "#fff",
            '&:hover': {
              backgroundColor: "#303f9f"
            },
            padding: "10px 20px", 
            textTransform: "none" 
          }}
        >
          Electronics
        </Button>
        <Button 
          variant="contained"
          onClick={() => handleCategory('jewelery')} 
          sx={{ 
            backgroundColor: "#ff4081", 
            color: "#fff",
            '&:hover': {
              backgroundColor: "#f50057"
            },
            padding: "10px 20px", 
            textTransform: "none" 
          }}
        >
          Jewelery
        </Button>
        <Button 
          variant="contained"
          onClick={() => handleCategory("men's clothing")} 
          sx={{ 
            backgroundColor: "#4caf50", 
            color: "#fff",
            '&:hover': {
              backgroundColor: "#388e3c"
            },
            padding: "10px 20px", 
            textTransform: "none" 
          }}
        >
          Men's Clothing
        </Button>
        <Button 
          variant="contained" 
          onClick={() => handleCategory("women's clothing")}
          sx={{ 
            backgroundColor: "#ff9800", 
            color: "#fff",
            '&:hover': {
              backgroundColor: "#f57c00"
            },
            padding: "10px 20px", 
            textTransform: "none" 
          }}
        >
          Women's Clothing
        </Button>
        <Button
          variant="contained"
          onClick={handleShowAll}
          sx={{
            backgroundColor: "#9e9e9e",
            color: "#fff",
            '&:hover': {
              backgroundColor: "#757575"
            },
            padding: "10px 20px",
            textTransform: "none"
          }}
        >
          Show All
        </Button>
      </Box>
      <h2 style={{color:"#3f51b5",fontSize:"40px",fontWeight:"200"}}>Products</h2>
      <Productcard selectedCategory={selectedCategory}/>
    </Box>
  );
};

export default Home;
