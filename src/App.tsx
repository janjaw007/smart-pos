import MenuCard from "./components/MenuCard";
import { mockMenu } from "./data/mockData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tin's Thing Smart POS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMenu.map((menu) => {
            return <MenuCard key={menu.id} menu={menu} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
