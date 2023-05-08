import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{display:"flex", gap: "10px"}}>
        <span style={{fontSize:"1.5rem", }}>{user.name}</span>
        <img style={{borderRadius:"50%", height:"30px", width:"30px"}} src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;