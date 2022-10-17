import React, { useState } from "react";
import UserCards from "./components/UserCards";
import DefaultUserCard from "./components/DefaultUserCard";
import axios from "axios";

const user = {
  firstname: "John",
  lastname: "Doe",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
  email: "john.doe@random.com",
};

function App() {
  const [profile, setProfile] = useState();

  const generateUser = () => {
    axios("https://randomuser.me/api").then((response) =>
      setProfile(response.data.results[0])
    );
  };

  return (
    <div className="App">
      <button onClick={() => generateUser()}>USER</button>
      {profile ? <UserCards {...profile} /> : <DefaultUserCard {...user} />}
    </div>
  );
}
export default App;
