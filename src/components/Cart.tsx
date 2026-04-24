import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("ตะกร้าว่างเปล่า กรุณาเลือกอาหารก่อนสั่งนะครับ");
      return;
    }

    alert(
      `🎉 รับออเดอร์เรียบร้อย!\nโต๊ะ: ${tableNumber}\nลูกค้า: ${customerName}\nยอดชำระ: ฿${totalPrice}`,
    );

    clearCart();
    setCustomerName("");
    setTableNumber("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 sticky top-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 ตะกร้าของคุณ</h2>
      <div className="mb-6 max-h-64 overflow-y-auto pr-2">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">ยังไม่มีเมนูในตะกร้า</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ฿{item.price} x {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold text-sm px-2 py-1 bg-red-50 rounded-lg"
              >
                ลบ
              </button>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between items-center mb-6 text-xl font-bold text-gray-800">
        <span>ยอดรวมทั้งหมด:</span>
        <span className="text-orange-500">฿{totalPrice}</span>
      </div>

      <hr className="mb-6 border-gray-200" />
      <form onSubmit={handleCheckout}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            เบอร์โต๊ะ
          </label>
          <input
            type="number"
            required
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="เช่น 5"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ชื่อลูกค้า (ถ้ามี)
          </label>
          <input
            type="text"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="คุณ..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-lg transition-colors shadow-sm"
        >
          ยืนยันการสั่งอาหาร
        </button>
      </form>
    </div>
  );
}
