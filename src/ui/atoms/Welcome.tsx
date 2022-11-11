interface Profile {
  name: string;
}

function Welcome(profile: Profile) {
  return <h1 className="mb-4">Hello, {profile.name}</h1>;
}

export default Welcome;
