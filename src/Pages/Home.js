import Beef from "./Body/Beef";
import Area from "./Body/Area";
import Category from "./Body/Category";
function Home() {
  return (
    <div className="page-home">
      <Category />
      <Area />
      <Beef />
    </div>
  );
}

export default Home;