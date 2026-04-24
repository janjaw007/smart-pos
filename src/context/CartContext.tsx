/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import type { CartItem, MenuItem } from "../types";
interface CartContextType {
  cart: CartItem[];
  addToCart: (menu: MenuItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const addToCart = (menu: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === menu.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prevCart, { ...menu, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  // ดักจับ Error กรณีลืมใส่ Provider (เป็น Best Practice ของ TypeScript)
  if (!context) {
    throw new Error("useCart ต้องถูกใช้งานอยู่ภายใต้ CartProvider เท่านั้น");
  }
  return context;
}
