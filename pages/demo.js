import Cookies from 'js-cookie';
import { parseCookies } from 'nookies';
import React from 'react'
import jwtDecode from 'jwt-decode';
const demo = (props) => {
    
console.log(jwtDecode(props.token));
  return (
    <div>demo</div>
  )
}

export default demo
export async function getServerSideProps(context) {
    let {token}=parseCookies(context)
    // console.log(token);
    const {res}=context
    if(!token){
    res.writeHead(302,{Location:"/login"});
    res.end()
    }
      return {
        props: {token:token},
      }
    }