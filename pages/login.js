import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import CardContent from "../components/CardContent";
import JSONPretty from "react-json-pretty";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Card>
        <CardTitle title={`Welcome, ${session.user.email}`}>
          <button
            className="bg-red-500 inline-flex shrink-0 items-center px-4 py-2 text-sm border border-transparent font-medium rounded-md shadow-sm text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => signOut()}
          >
            Signout
          </button>
        </CardTitle>
        <CardContent>
          <JSONPretty id="json-pretty" data={session}></JSONPretty>
        </CardContent>
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
