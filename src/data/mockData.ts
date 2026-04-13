import type { MenuItem } from "../types";

export const mockMenu: MenuItem[] = [
  {
    id: "m1",
    name: "ข้าวกระเพราหมูสับไข่ดาว",
    price: 60,
    image: "/images/food1.jpg",
    category: "อาหารจานเดียว",
  },
  {
    id: "m2",
    name: "ผัดไทยกุ้งสด",
    price: 80,
    image: "/images/food2.jpg",
    category: "อาหารจานเดียว",
  },
  {
    id: "m3",
    name: "ต้มยำกุ้งน้ำข้น",
    price: 150,
    image: "/images/food3.jpg",
    category: "กับข้าว",
  },
  {
    id: "m4",
    name: "ชาเย็น",
    price: 45,
    image: "/images/food4.jpg",
    category: "เครื่องดื่ม",
  },
];

export const fetchMenuItems = (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMenu);
    }, 3000);
  });
};
