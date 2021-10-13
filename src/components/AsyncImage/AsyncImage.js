import React from "react";
import Loading from "../Loading";
import "./AsyncImage.css";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);

  React.useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return <img {...props} />;
  }
  return (
    <div className="container-loading">
      <Loading></Loading>
    </div>
  );
};

export default AsyncImage;
