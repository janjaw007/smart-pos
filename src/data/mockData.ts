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
  {
    id: "m5",
    name: "ข้าวผัดกุ้ง",
    price: 90,
    image: "/images/food5.jpg",
    category: "อาหารจานเดียว",
  },
  {
    id: "m6",
    name: "ส้มตำไทยไข่เค็ม",
    price: 65,
    image: "/images/food6.jpg",
    category: "กับข้าว",
  },
  {
    id: "m7",
    name: "คอหมูย่าง",
    price: 100,
    image: "/images/food7.jpg",
    category: "กับข้าว",
  },
  {
    id: "m8",
    name: "ไก่ทอดหาดใหญ่",
    price: 70,
    image: "/images/food8.jpg",
    category: "กับข้าว",
  },
  {
    id: "m9",
    name: "ยำวุ้นเส้นทะเล",
    price: 120,
    image: "/images/food9.jpg",
    category: "กับข้าว",
  },
  {
    id: "m10",
    name: "ข้าวเหนียวมะม่วง",
    price: 80,
    image: "/images/food10.jpg",
    category: "ของหวาน",
  },
  {
    id: "m11",
    name: "อเมริกาโน่เย็น",
    price: 55,
    image: "/images/food11.jpg",
    category: "เครื่องดื่ม",
  },
  {
    id: "m12",
    name: "น้ำแตงโมปั่น",
    price: 50,
    image: "/images/food12.jpg",
    category: "เครื่องดื่ม",
  },
  {
    id: "m13",
    name: "ปอเปี๊ยะทอด",
    price: 65,
    image: "/images/food13.jpg",
    category: "ของทานเล่น",
  },
  {
    id: "m14",
    name: "เฟรนช์ฟรายส์",
    price: 59,
    image: "/images/food14.jpg",
    category: "ของทานเล่น",
  },
  {
    id: "m15",
    name: "หมูกรอบคั่วพริกเกลือ",
    price: 140,
    image: "/images/food15.jpg",
    category: "กับข้าว",
  },
  {
    id: "m16",
    name: "ผัดซีอิ๊วหมู",
    price: 65,
    image: "/images/food16.jpg",
    category: "อาหารจานเดียว",
  },
  {
    id: "m17",
    name: "สุกี้ทะเล (แห้ง)",
    price: 90,
    image: "/images/food17.jpg",
    category: "อาหารจานเดียว",
  },
  {
    id: "m18",
    name: "บิงซูข้าวเหนียวมะม่วง",
    price: 189,
    image: "/images/food18.jpg",
    category: "ของหวาน",
  },
  {
    id: "m19",
    name: "ชามะนาว",
    price: 40,
    image: "/images/food19.jpg",
    category: "เครื่องดื่ม",
  },
  {
    id: "m20",
    name: "นักเก็ตไก่",
    price: 60,
    image: "/images/food20.jpg",
    category: "ของทานเล่น",
  },
];

export const fetchMenuItems = (): Promise<MenuItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMenu);
    }, 3000);
  });
};
