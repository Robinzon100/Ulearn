
import cookie from 'cookie';


//? UTILS
import { redirect } from './redirect.utils';


export const ifTokenExpiered = (res,ctx) => {

    if (res.statusCode == 200) {
      ctx.res.setHeader("Set-Cookie", [
        cookie.serialize("auth_token_expiration", res.expiration, {
          httpOnly: true,
          path: "/",
        }),
        cookie.serialize("auth_access_token", res.accessToken, {
          httpOnly: true,
          path: "/",
        }),
      ]);
  
      // console.log("good refresh", res);
      return { props: { res: true } };
    } else {
      // console.log("bad refresh");
      return redirect("/login");
    }
};




export const bla = (accessRes,refreshRes,ctx) => {
    const { auth_token_expiration } = cookie.parse(ctx.req.headers.cookie || '')
    let date = new Date().getTime();

        
        if (date < +auth_token_expiration){
    
            if(accessRes.statusCode == 200) {
                return { props:{res:true} }
            
            }else {
                return ifTokenExpiered(refreshRes,ctx)
            }
    
        }else {
            //* token expiered
            return ifTokenExpiered(refreshRes,ctx)
        }
    
}