import { Box, Typography } from "@mui/material";
import React from "react";

const Breadcrumb = ({ pages }) => {
  return (
    <Box display='flex' gap={1} alignItems='center' justifyContent={"center"}>
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          <Typography color={"white"} variant='body1'>
            {page}
          </Typography>
          {index < pages.length - 1 && (
            <img src='/icons/breadCrumb.png' alt='' />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export const PageHeader = ({ pages, pageTitle }) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(22, 29, 57, 0.8), rgba(22, 29, 57, 0.8)), url(/images/pageHeader.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "400px",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant={"h3"} fontWeight={"bold"} color={"white"}>
            {pageTitle}
          </Typography>
          <Breadcrumb pages={pages} />
        </Box>
      </Box>
    </div>
  );
};
