import React, { useState, useEffect } from "react";

function Background() {
  const [imageUrl, setImageUrl] = useState("");
  const [photographer, setPhotographer] = useState("");
  const [imageDownload, setImageDownload] = useState("");

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random/?client_id=lySrYWSkFa-grefviOdEISNvDVXdiQBkXog9Pgq-WAI"
    )
      .then((res) => res.json())
      .then((json) => {
        setImageUrl(json.urls.regular);
        setPhotographer(json.user.name);
        setImageDownload(json.links.html);
      });
  });
  useEffect(() => {
    document.body.style.backgroundImage = `url("${imageUrl}")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, [imageUrl]);
  return (
    <p style={{ fontSize: "20px", color: "black" }}>
      Photo by{" "}
      <a
        style={{ textDecoration: "none" }}
        href={imageDownload}
        target="_blank"
        rel="noreferrer"
      >
        <em>{photographer}</em>
      </a>
      <a
        style={{ textDecoration: "none" }}
        href="https://unsplash.com/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        on Unsplash
      </a>
    </p>
  );
}
export default Background;
