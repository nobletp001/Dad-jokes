import React, { useEffect, useState , useCallback} from "react";
import { Box, Typography } from "@mui/material";
import Joke from "./joke";
import axios from "axios";

export default function JokesList() {
  
const [jokes, setJokes] = useState(null);
async function getJoke() {
  let newJokes = [];
  for (var i = 1; i < 50; i++) {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    newJokes.push({ id: i, text: res.data.joke, votes: 0 });
  }
  setJokes(newJokes);
}

useEffect(() => {
  getJoke();
}, []);

  const handleVote = useCallback(
    (id, offset) => {
      let filteredJokes = jokes.filter((joke) => joke.id !== id);
      let joke = jokes.find((joke) => joke.id === id);
      joke.votes += offset;
      filteredJokes.push(joke);
      filteredJokes.sort((a, b) => b.votes - a.votes);
      setJokes(filteredJokes);
    },
    [jokes, setJokes]
  );

 if(jokes){

      return (
        <Box
          style={{ display: "flex" }}
          sx={{
            width: { lg: "80%", sm: "90%", xs: "90%" },
            height: { lg: "80", sm: "90%", xs: "90%" },
          }}
        >
          <Box
            style={{
              backgroundColor: "#9575cd",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow:
                "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 2,
              borderRadius: 7,
            }}
            sx={{ width: { lg: "30%", sm: "20%", xs: "20%" } }}
          >
            <Typography
              style={{
                color: "#fff",
                fontWeight: 700,
                margin: 60,
                letterSpacing: 0,
              }}
              sx={{ fontSize: { lg: "3rem", sm: "1.5rem" } }}
            >
              Dad
              <br />
              Jokes
            </Typography>
            <img
              src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
              alt="im"
              style={{
                width: "50%",
                boxShadow:
                  "0 19px 38px rgba(0, 0, 0, 0.3) ,0 15px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box
            style={{
              height: "90%",
              background: "#fff",

              alignSelf: "center",
              boxShadow:
                "0 19px 38px rgba(0, 0, 0, 0.3) ,0 15px 12px rgba(0, 0, 0, 0.1)",
              borderTopRightRadius: 7,
              borderBottomRightRadius: 7,
              overflow: "scroll",
            }}
            sx={{ width: { lg: "70%", xs: "90%", sm: "90%" } }}
          >
            {jokes.map((joke) => {
              return (
                <Joke
                  votes={joke.votes}
                  text={joke.text}
                  upvote={() => {
                    handleVote(joke.id, 1);
                  }}
                  downvote={() => {
                    handleVote(joke.id, -1);
                  }}
                  key={joke.id}
                />
              );
            })}
          </Box>
        </Box>
      );
   
 }
 else{
   return(
     <h1>loading...</h1>
   )
 }
}
