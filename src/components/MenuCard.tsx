import type { MenuItem } from "../types";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface MenuCardProps {
  menu: MenuItem;
}

function MenuCard({ menu }: MenuCardProps) {
  const context = useContext(CartContext);

  if(!context) return null;
  const { addToCart } = context;

  return (
    <div className="border border-gray-200  p-4 rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow bg-white">
      <img
        src={menu.image}
        alt={menu.name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h3 className="mt-4 mb-1 text-lg font-bold text-gray-800">{menu.name}</h3>
      <p className="text-orange-500 font-bold text-xl mb-4">
        ${menu.price.toFixed(2)}
      </p>

      <button
      onClick={()=>addToCart(menu)}
      className="bg-orange-500 hover:bg-amber-600 text-white w-full py-2 rounded-xl font-semibold transition-colors cursor-pointer">
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}

export default MenuCard;
