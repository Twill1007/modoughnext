import { useRouter } from "next/router";

function CookieOrder() {
  const router = useRouter();
  const { cookieType } = router.query; //Access the dynamic route parameter.

  return <h1>Order Page for</h1>;
  //Add logic dependent on cookie type
}

export default CookieOrder;
