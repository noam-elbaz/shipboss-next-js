import React from "react";
import { useSession, getSession } from "next-auth/react";
import Card from "../components/Card";

export default function Account() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Card>
        <div>Welcome {session.user.email}</div>
      </Card>
    );
  } else {
    <div>You are not signed in</div>;
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: { destination: "/login" },
    };
  return { props: { session } };
};
