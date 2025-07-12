import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const gitfollowers = useLoaderData();
  //   const [gitfollowers, setGitfollowers] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sumrankhan")
  //       .then((response) => response.json())
  //       .then((gitfollowers) => {
  //         console.log(gitfollowers);
  //         setGitfollowers(gitfollowers);
  //       });
  //   }, []);

  return (
    <div className="text-center m-1 bg-blue-700 text-white text-3xl">
      Github Followers :{gitfollowers.followers}
      <img src={gitfollowers.avatar_url} alt="git pic" width={300} />
    </div>
  );
  //This will show github followers
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sumrankhan");
  return response.json();
};
