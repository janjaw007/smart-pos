# 🍽️ Tin's Thing Smart POS

แอปพลิเคชันระบบจัดการจุดขาย (Point of Sale) สำหรับร้านอาหารและคาเฟ่ พัฒนาขึ้นด้วย React และ TypeScript โดยเน้นการออกแบบ UI ที่ใช้งานง่ายและประสบการณ์ผู้ใช้ (UX) ที่ลื่นไหล โครงงานนี้เป็นส่วนหนึ่งของการเรียนรู้การพัฒนา Web Application แบบครบวงจร

🔗 **[คลิกเพื่อดูเว็บไซต์ (Live Demo)]**([ใส่ลิงก์เว็บไซต์ของคุณถ้ามี])
🎬 **[คลิกเพื่อดูวิดีโอสาธิตการใช้งาน]**([ใส่ลิงก์วิดีโอของคุณ])

---

## ✨ ฟังก์ชันหลัก (Features)
แอปพลิเคชันนี้ถูกพัฒนาขึ้นให้ครอบคลุมตามโจทย์ความต้องการ ดังนี้:

- **ค้นหาและคัดกรองข้อมูล (Search & Filter):** ระบบค้นหาเมนูอาหารแบบ Real-time และแท็บหมวดหมู่ที่แยกประเภทอาหารอัตโนมัติ 
- **ระบบตะกร้าสินค้า (Shopping Cart):** สามารถเพิ่ม ลบ และคำนวณราคาสินค้ารวมได้อัตโนมัติ โดยใช้ **React Context** ในการจัดการ State ส่วนกลาง (ลดปัญหา Props Drilling)
- **การโหลดข้อมูลแบบ Asynchronous:** มีการจำลองการ Fetch API เพื่อดึงข้อมูลเมนูอาหาร พร้อมแสดงสถานะ Loading (`Promise` & `setTimeout`)
- **การรับข้อมูลจากผู้ใช้ (React Forms):** ฟอร์มรับข้อมูลเบอร์โต๊ะและชื่อลูกค้าก่อนยืนยันการสั่งซื้อ พร้อมระบบ Validation พื้นฐาน
- **ชิ้นส่วน UI ที่นำกลับมาใช้ซ้ำได้ (Reusable Components):** ออกแบบระบบ Component อย่างเป็นระเบียบ เช่น `MenuCard`, `CategoryTabs` และ `Cart`

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
- **Frontend Framework:** React (สร้างด้วย Vite เพื่อความรวดเร็ว)
- **Language:** TypeScript (ใช้ Interface เพื่อกำหนดชนิดข้อมูล ลดข้อผิดพลาดในการเขียนโค้ด)
- **Styling:** Tailwind CSS (สร้าง UI ที่สวยงามและ Responsive)
- **State Management:** React Hooks (`useState`, `useEffect`, Custom Hook `useCart` ร่วมกับ Context API)

---

## 📂 โครงสร้างโฟลเดอร์ (Project Structure)
```text
src/
 ├── components/       # ที่เก็บ Reusable Components
 │   ├── Cart.tsx           # ระบบตะกร้าสินค้าและฟอร์มสั่งอาหาร
 │   ├── CategoryTabs.tsx   # แท็บเลือกหมวดหมู่เมนู
 │   └── MenuCard.tsx       # การ์ดแสดงเมนูอาหาร 1 จาน
 ├── context/          # ที่เก็บข้อมูล State ส่วนกลาง
 │   └── CartContext.tsx    # Context ควบคุมตะกร้าสินค้า
 ├── data/             # ที่เก็บข้อมูลจำลอง
 │   └── mockData.ts        # ข้อมูลเมนูอาหารและระบบจำลอง Fetch API
 ├── types/            # ที่เก็บ TypeScript Interfaces
 │   └── index.ts           # โครงสร้างข้อมูล MenuItem และ CartItem
 ├── App.tsx           # คอมโพเนนต์หลักและ Layout ของแอป
 └── main.tsx          # จุดเริ่มต้นของแอปพลิเคชัน (มี CartProvider ครอบ)
