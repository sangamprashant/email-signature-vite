import Home from "./Home";

const ManageHome = () => {
  return (
    <div className="main-home-bg">
      <Home />
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img src="map.png" alt="" />
      </div>
    </div>
  );
};

export default ManageHome;
