import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Playlists from "./Playlists"; // Importing the existing Playlists component
import "../styles/AboutPage.css"; // CSS for the About page styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <div style={{ marginBottom: "2%" }}>
        <Playlists />{" "}
      </div>
      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            Biography
          </Typography>
          <Typography variant="body1" className="about-text">
            Disco Stranger is a 4 piece jam band blended with a touch of
            indie/alt rock. The band resides in Oklahoma City, where they are no
            stranger to the local live music scene. In 2022, the band released
            their 6 track self-titled EP, recorded at Blackwatch Studios in
            Norman, Oklahoma. <br></br>
            <br></br> We never really know what else to say for these things,
            but when words fail, music speaks. Or whatever that book is called.
            Anyway, check out Disco Stranger on all streaming platforms. Better
            yet, come to a show and buy some merch!
          </Typography>
        </CardContent>
      </Card>

      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            From the Beginning
          </Typography>
          <Typography variant="body1" className="about-text">
            After years of band attempts and projects dating back to high school
            days, a career in music for the members of Disco Stranger didn’t
            look so promising. After a few long months and a little bit of luck
            the origin of the group was born. Disco Stranger originally started
            out as a cover band under the name "Steve French and Company" until
            they heard one too many “PLAY KID ROCK!” requests and decided to
            write our own original material. <br></br>
            <br></br>The band name is an ode to the Eagles and their song “Disco
            Strangler”, a band they covered quite a bit and grew up on. The
            years of playing together have allowed them to blend their favorite
            influences from songs they have learned in the past into their own
            form of music, which are warm, catchy songs with elements of spacey
            reverb, tape delay, and explosive jam sets.
          </Typography>
        </CardContent>
      </Card>

      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            What's Next?
          </Typography>
          <div className="next-steps-grid">
            <div className="next-step-card">
              <Typography variant="body1" className="about-text">
                <strong>Spread the Word:</strong> Tell your friends, family,
                neighbors, and even that guy who always plays air guitar at the
                bus stop about us. We promise he'll thank you later.
              </Typography>
            </div>
            <div className="next-step-card">
              <Typography variant="body1" className="about-text">
                <strong>Follow Us:</strong> Like, subscribe, and follow us on
                social media. We're pretty funny online (or at least, we think
                we are), and you don't want to miss out on our latest antics and
                music updates.
              </Typography>
            </div>
            <div className="next-step-card">
              <Typography variant="body1" className="about-text">
                <strong>Buy Our Merch:</strong> Deck yourself out in our awesome
                merch. Not only will you look incredibly cool, but you'll also
                be directly supporting our quest for{" "}
                <span className="strike-through">world domination</span>
                world touring.
              </Typography>
            </div>
            <div className="next-step-card">
              <Typography variant="body1" className="about-text">
                <strong>Come to Our Shows:</strong> Let's face it. We aren't big
                enough to make big-time money off of streams. However, the more
                shows you come to, the more money we can spend in the studio.
                And who doesn't like new Disco Stranger music?
              </Typography>
            </div>
            <div className="next-step-card">
              <Typography variant="body1" className="about-text">
                <strong>Stream Our Music:</strong> Put our songs on repeat, add
                them to your playlists, and share them with everyone. Your
                streams help us climb the charts and reach more ears. And who
                knows? Maybe one day, you'll overhear someone humming our tune
                in an elevator.
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
