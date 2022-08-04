import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <div>Welcome, {session.user.email}</div>
        <button onClick={() => signOut()}>Signout</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>You are not signed in </div>
        <button onClick={() => signIn()}>Signin</button>
      </div>
    );
  }
}
