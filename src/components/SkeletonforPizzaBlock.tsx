import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={464.667}
    viewBox="0 0 280 464.667"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="87" />
    <rect x="0" y="420" rx="10" ry="10" width="100" height="44" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="27" />
    <rect x="145" y="420" rx="10" ry="10" width="135" height="44" />
  </ContentLoader>
);

export default Skeleton;
