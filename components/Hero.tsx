"use client";

import { useState, useEffect } from "react";

const BASE_URL = "https://api.heygen.com";
const apiKey = "";

export function Hero() {
  const [vidUrl, setVidUrl] = useState("");
  const [isLoading, setLoading] = useState(true);

  const videoID = "360cd4c3de42415c9aa17e2ed63e8a27";

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-api-key": apiKey,
      },
    };

    fetch(
      `https://api.heygen.com/v1/video_status.get?video_id=${videoID}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
        setVidUrl(response.data.video_url);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <p>Loading .....</p>;

  return (
    <div>
      <section className="flex justify-around items-center mt-5">
        <article className="">
          <h3 className="font-space font-bold">Agustin N. R. Ramirez</h3>
          <h5 className="font-space">Frontend Developerrr</h5>
        </article>
        <video
          height={512}
          width={512}
          src={vidUrl ? vidUrl : ""}
          autoPlay
          controls
        ></video>
      </section>
    </div>
  );
}
