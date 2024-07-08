import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { SubHeading } from "../../components/Typographies/SubHeading";

const ReachOutCard = ({ icon, heading, subHeading }) => {
  return (
    <Box display={"flex"} width={"100%"} mx={'auto'} flexDirection={"column"} alignItems={"center"} justifyContent={'center'}>
      <img height={"53px"} width={"56px"}  src={`/icons/${icon}.png`} alt='' />
      <Typography color={"black"} fontWeight={600} textAlign={"center"} mb={2} mt={1}>
        {heading}
      </Typography>
      <Typography
        color={"fontColor.subHeading"}
        fontWeight={400}
        textAlign={"center"}
        sx={{ maxWidth: "200px" }}
      >
        {subHeading}
      </Typography>
    </Box>
  );
};

export const ContactForm = () => {
  const formDefinition = [
    {
      name: "firstName",
      label: "First Name",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      required: true,
    },
    {
      name: "number",
      label: "Phone Number",
      required: true,
    },
  ];

  const reachOutDetails = [
    {
      icon: "locatedAt",
      mainHeading: "Our Office",
      subHeading:
        "1/45, Jitesh illam,Kancharampettai, Madurai,625014, Natham Main road. ",
    },
    {
      icon: "callUsAt",
      mainHeading: "Call Us At",
      subHeading: "+91 8056821077  0452918808",
    },
    {
      icon: "mailUs",
      mainHeading: "E-mail Us",
      subHeading: "mdkvl@rkjiconstruction.com",
    },
  ];
  return (
    <div>
      <Container>
        <Grid2 container my={10}>
          <Grid2 item xs={12} md={6}>
            {" "}
            <Box display={"flex "} gap={2} mb={2}>
              {formDefinition.slice(0, 2).map((formObj, i) => {
                return (
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#F8F8F8", borderRadius: 0 }}
                    key={i}
                    name={formObj.name}
                    label={formObj.label}
                  ></TextField>
                );
              })}
            </Box>
            <Box display={"flex "} gap={2} mb={2}>
              {formDefinition.slice(2, 4).map((formObj, i) => {
                return (
                  <TextField
                    fullWidth
                    sx={{ bgcolor: "#F8F8F8", borderRadius: 0 }}
                    key={i}
                    name={formObj.name}
                    label={formObj.label}
                  ></TextField>
                );
              })}
            </Box>
            <TextField
              placeholder='Message'
              label='Message'
              multiline
              fullWidth
              sx={{ bgcolor: "#F8F8F8" }}
              rows={2}
              maxRows={4}
            />
            <Button
              sx={{
                borderRadius: 0,
                mt: 3,
                color: "white",
                fontWeight: 500,
                px: 4,
                py: 1,

                backgroundColor: "backgrounds.navbar",
                "&:hover": {
                  backgroundColor: "fontColor.subHeading",
                },
              }}
            >
              Send
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={6}></Grid2>
        </Grid2>

        <Box display={"flex"} flexWrap={"wrap"} gap={3} justifyContent={"space-between"}>
          {reachOutDetails.map((item, i) => {
            return (
              <Box
                key={i}
                // borderRight={i < reachOutDetails.length - 1 && "1px solid fontColor.subHeading"}
                px={10}
              >
                <ReachOutCard
                  icon={item.icon}
                  heading={item.mainHeading}
                  subHeading={item.subHeading}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};
