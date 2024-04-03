import React,{useEffect} from 'react';
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Task(props) {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(()=>{
    alert(matches);
  },[])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          height:matches? "60vh":"100vh",
          background: "#3498db",
          marginTop: 50,
        }}
      >
        <Grid container spacing={1} style={{margin:matches? 50:10 }}>
          <Grid item xs={matches?4:12} style={{ color: "#fff" }}>
            <div style={{ fontSize: 30, fontWeight: "bold" }}>NewLetter</div>
            <div style={{ marginTop: 20,fontSize:14 }}>
              Want to know what we are up to? Sign up for the newsletter and
              join our tribe.
            </div>
            <div
              style={{
                marginTop: 20,
                height: 60,
                width: matches?400:280,
                background: "#fff",
                color: "#000",
                padding: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",

                  color: "#95a5a6",
                }}
              >
                {" "}
                Email address
              </div>
              <div>
                <Button
                  variant="contained"
                  style={{
                    background: "#3498db",
                    textTransform: "capitalize",
                    fontSize: 20,
                    height: 60,
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={matches?4:12} style={{ marginLeft: matches?100:0, color: "#fff" }}>
            <div style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>
              Schedule
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div>Monday-Sunday</div>
                <div>
                  Bar:<span style={{ fontWeight: 200 }}> 9am - 11pm</span>
                </div>
                <div>
                  Kitchen:<span style={{ fontWeight: 200 }}> 9am - 7pm</span>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              Address
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div>Monday-Sunday</div>
                <div>
                  <span style={{ fontWeight: 200 }}>
                    8 Stefan cel Mare, lasi <br></br> 700063
                  </span>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={matches?2:12} style={{color: "#fff" }}>
            <div style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>
              Follow us
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  fontWeight: 200,
                  textDecoration: "underline",
                }}
              >
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Tripadvisor</div>
              </div>
            </div>

            <div style={{ marginTop:10,fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>
              Contact 
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  fontWeight: 200,
                  textDecoration: "underline",
                }}
              >
                <div>T: <u>+40753353956</u></div>
                <div>E:<u>bistrolanoi@gmail.com</u></div>
               
              </div>
            </div>

          </Grid>
        </Grid>
      </div>
    </div>
  );
}
