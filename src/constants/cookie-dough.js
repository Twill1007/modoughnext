//TODO: replace "oneDOzen", "twoDozen" with "basePrice"

const cookieDough = [
  {
    title: "Chocolate Chip Cookie",
    basePrice: 10,
  },
  {
    title: "Snickerdoodles",
    oneDozen: 10,
    twoDozen: 18,
  },
  {
    title: "Peanut Butter",
    oneDozen: 10,
    twoDozen: 18,
  },
  {
    title: "Sugar Cookies",
    oneDozen: 10,
    twoDozen: 18,
  },
];

export default cookieDough;

/*
  This is great. In regards to pricing, lets think about the shape of this object and how it will scale.
  If I want to add more pricing options, I have to explicitly define more on the object i.e.
  {
    title: Peanut Butter, 
    oneDozen: 10,
    twoDozen: 18,
    threeDozen: 27,
    fourDozen: 36,
    ...etc,
  }
  This creates a problem where, unless you have already explicitly defined the price for a specific "dozen", your customers can't order it. 
  There is another issue here that would be a good thought experiment for you:
  Imagine that each flavor of dough could have an any number of pricing options (i.e. oneDozen, twoDozen, ...ninetyDozen). And that each flavor could have a different number
  of pricing options (i.e. Chocolate Chip goes all the way to eightDozen, while Sugar Cookie only goes to twoDozen).

  How would you build a UI that displays a list of each cookie dough falvor and all of its available price options?
*/
