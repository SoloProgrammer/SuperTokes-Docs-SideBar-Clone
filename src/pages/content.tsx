import { useLocation } from "react-router-dom";

const Content = () => {
  const location = useLocation();
  console.log(location);

  return <h1>SuperTokens SideBar clone 🚀</h1>;
};

export default Content;
