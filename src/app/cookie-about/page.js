"use client";
import "../globals.css";

import useCart from "@/hooks/use-cart";

import { Fragment } from "react";

const AboutPage = () => {
  const { items } = useCart();
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://www.petlandflorida.com/wp-content/uploads/2019/09/Petland_Florida_Cavalier_King_Charles_Spaniel_puppy.jpg')",
    position: "absolute",
    width: "400px",
    height: "400px",
    right: "600px",
    border: "1px solid blue",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Fragment>
      <h1>About Mo</h1>

      <div
        style={{
          position: "absolute",
          width: "600",
          fontSize: "25px",
          right: "1200px",
        }}
      >
        Morgan Willford (Mo) was born on December 17, 2011. Right now she is 11
        years old. She goes to Pathfinder Academy. Mo likes piano, volleyball,
        babysitting, singing, and making cookies. She is trying to earn money by
        selling cookies so this is her website so you can buy and eat her
        delicious cookies! She promises that you will love and enjoy these. She
        is known for her chocolate-chip cookies and her snickerdoodles. She
        lives in Mesa, AZ and she is the oldest of 4 bothers: Parker, Greyson,
        Brigdon, and Cooper. And she has one sister who is only 1 years old:
        Raelynn. She has a golden doodle, Harry and he is so cute! Her cookies
        are really yummy. They will be worth it. She makes cookies almost every
        day and is trying to achieve her goal. So step right up and buy these
        delicious, scrumptious, awesome, home-made snickerdooldle and chocolate
        chip cookie dough!!
      </div>
    </Fragment>
  );
};

export default AboutPage;
