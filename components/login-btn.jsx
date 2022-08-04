import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <span className="mr-2 text-gray-500 text-sm">Signed in as {session.user.email}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <span className="mr-2 text-gray-500 text-sm">Not signed in</span>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
