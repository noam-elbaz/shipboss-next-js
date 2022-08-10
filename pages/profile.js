import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function update() {
    const { user, error } = await supabase.auth.update({
      data: {
        city: "Los Angeles",
      },
    });
    console.log("user:", user);
  }

  async function fetchProfile() {
    const profileData = await supabase.auth.user();

    console.log("profileData: ", profileData);

    if (!profileData) {
      router.push("/signin");
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/signin");
  }

  if (!profile) return null;
  return (
    <div>
      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={update}>Set Attribute</button>
    </div>
  );
}
