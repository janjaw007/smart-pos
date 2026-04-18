import MenuCard from "./components/MenuCard";
import type { MenuItem } from "./types";
import { fetchMenuItems, mockMenu } from "./data/mockData";
import { useEffect, useState } from "react";
import CategoryTabs from "./components/CategoryTabs";

function App() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ทั้งหมด");

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

  const categories = [
    "ทั้งหมด",
    ...new Set(menus.map((menu) => menu.category)),
  ];

  const filteredMenus = menus.filter((menu) => {
    const isMatchSearch = menu.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const isMatchCategory =
      selectedCategory === "ทั้งหมด" || menu.category === selectedCategory;

    return isMatchSearch && isMatchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tin's Thing Smart POS
        </h1>
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-gray-100">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              คุณกำลังหิวอะไรอยู่ ?
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:ring-2  focus:ring-orange-500"
              type="text"
              placeholder="พิมพ์ชื่อเมนูอาหารที่ต้องการ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        {isLoading ? (
          <p className="text-center text-xl text-gray-500 font-semibold py-20 animate-pulse">
            กำลังจัดเตรียมเมนูอาหาร... 👨‍🍳
          </p>
        ) : filteredMenus.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <p className="text-xl font-semibold mb-2">ไม่พบเมนูที่คุณค้นหา</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenus.map((menu) => {
              return <MenuCard key={menu.id} menu={menu} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
