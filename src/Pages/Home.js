import Beef from "./Body/Beef";
import Area from "./Body/Area";
import Category from "./Body/Category";
import Search from "./Body/Search";
function Home() {
  return (
    <div className="page-home">
      <Search />
      <Area />
      <Category />
      <Beef />
    </div>
  );
}

export default Home;