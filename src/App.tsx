import MenuCard from "./components/MenuCard";
import type { MenuItem } from "./types";
import { fetchMenuItems, mockMenu } from "./data/mockData";
import { useEffect, useState } from "react";

function App() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    const loadMenus = async () => {
      setIsloading(true);
      try {
        const data = await fetchMenuItems();
        setMenus(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      } finally {
        setIsloading(false);
      }
    };

    loadMenus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tin's Thing Smart POS
        </h1>
        {isLoading ? (
          <p className="text-center text-xl text-gray-500 font-semibold py-20 animate-pulse">
            กำลังจัดเตรียมเมนูอาหาร... 👨‍🍳
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMenu.map((menu) => {
              return <MenuCard key={menu.id} menu={menu} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
