import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Card>
        <div>Welcome, {session.user.email}</div>
        <button onClick={() => signOut()}>Signout</button>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardTitle title="You are not signed in ">
          <button
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => signIn()}
          >
            Signin
          </button>
        </CardTitle>
      </Card>
    );
  }
}
