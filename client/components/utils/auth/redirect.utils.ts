import cookie from "cookie";



export const redirect = (destination: string, permanent: boolean = false) => {
  return {
    redirect: {
      destination: destination,
      permanent: permanent,
    },
  };
};




//* თუ იუზერს უნდა დალოგინება ან დარეგისტრირება
//* გამოიყენება მხოლოდ რეგისტრაციასა და ლოგინის გვერდზე
export const ifUserLoginOrRegister = (ctx) => {
  const {auth_access_token,auth_refresh_token,auth_token_expiration} = cookie.parse(ctx.req.headers.cookie || "");

  //* კარგად მუშაობდა როცა ყველა ტოკენი გქონდა მაგრამ,თუ ერთი მაინც აკლდა,ან
  //* საერთოდ არ იყო, მაშინ შეცდომას აგდებდა რადგან არაფერს აბრუნდებდა false შემთხვევაში.
  //* getServerSideProps ყოველთვის რაღაცა უნდა დააბრუნე,ამიტომ ასე მომიწია გაკეთება.

  if (auth_access_token && auth_refresh_token && auth_token_expiration) {
    return redirect("/");
  } else {
    return {
      props: {},
    };
  }
};



//* თუ იუზერი უკვე დალოგინებულია.
//* გამოიყენება ყველგან გარდა რეგისტრაციასა და ლოგინის გვერდისა
export const ifUserIsAuthenticated = (ctx) => {
    const {auth_access_token,auth_refresh_token,auth_token_expiration} = cookie.parse(ctx.req.headers.cookie || "");

    if (!auth_access_token || !auth_refresh_token || !auth_token_expiration) {
        return redirect("/login")
    }else {
        return {
          props: {},
        }
    }
}





