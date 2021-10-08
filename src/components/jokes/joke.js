import React,{useCallback} from 'react'
import { Box, Typography } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Joke(props) {

const { votes, text, upvote, downvote } = props;

 const getEmoji = useCallback((votes) => {
   if (votes >= 9) {
     return "em em-rolling_on_the_floor_laughing";
   } else if (votes >= 6) {
     return "em em-laughing";
   } else if (votes >= 3) {
     return "em em-slightly_smiling_face";
   } else if (votes >= 0) {
     return "em em-neutral_face";
   } else {
     return "em em-angry";
   }
 }, []);
      return (
        <Box
          style={{
            display: "flex",
            borderBottom: "2px solid #eeeeeeee",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 400,
          }}
        >
          <Box
            style={{
              display: "flex",
              marginRight: "1rem",
              justifyContent: "center",
              // backgroundColor: "red",
              alignItems: "center",
            }}
            sx={{
              width: { lg: "20%", xs: "10%", sm: "10%" },
              marginLeft: { xs: 4 },
            }}
          >
            <ArrowUpwardOutlinedIcon
              style={{ fontSize: "2rem", margin: 10, cursor: "pointer" }}
              onClick={() => {
                upvote();
              }}
            />

            <Typography style={{ fontSize: 20 }}>{votes}</Typography>
            <ArrowDownwardOutlinedIcon
              style={{ fontSize: "2rem", margin: 10, cursor: "pointer" }}
              onClick={() => {
                downvote();
              }}
            />
          </Box>
          <Box
            style={{ fontSize: "1.2rem", textOverflow: "wrap" }}
            sx={{
              width: { lg: "70%", xs: "80%", sm: "80%" },
              marginLeft: { xs: 3 },
              margingTop:3
            }}
          >
            <Card elevation={4}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.primary"
                  gutterBottom
                >
                {text}
                </Typography>
                
              </CardContent>
            
            </Card>
          </Box>
          <Box
            sx={{
              width: { lg: "10%", xs: "10%", sm: "10%" },
              marginLeft: { xs: 2 },
            }}
          >
            <i
              className={getEmoji(votes)}
              style={{
                fontSize: "3rem",
                borderRadius: "50%",
                marginLeft: "auto",
                boxShadow:
                  "0 19px 38px rgba(0, 0, 0, 0.3) ,0 15px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Box>
      );
 
}
