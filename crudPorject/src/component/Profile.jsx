import { useEffect, useState } from "react"
import Layout from "../layout/Layout"

function Profile() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    useEffect(()=>{
          setName(localStorage.getItem("name"))  
          setEmail(localStorage.getItem("email"))  
    },[])
  return (
    <Layout>
        <h3 className="text-center pt-5">Hello,{name}</h3>
        <h5 className="text-center">{email} </h5>
    </Layout>
  )
}

export default Profile