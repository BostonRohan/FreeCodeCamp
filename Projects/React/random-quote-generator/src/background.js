import React, { useState, useEffect } from "react";

function background() {
  const [imageUrl, setImageUrl] = useState(null);
  const [photographer, setPhotographer] = useState("");
  const [imageDownload, setImageDownload] = useState("");
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random/?client_id=lySrYWSkFa-grefviOdEISNvDVXdiQBkXog9Pgq-WAI"
    )
      .then((res) => res.json())
      .then((json) => {
        setImage(json.urls.full);
        setPhotographer(json.user.name);
        setImageDownload(json.links.self);
      });
  }, []);
}
export default background;
