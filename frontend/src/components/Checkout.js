import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";

export default function Checkout() {
  const { cart, total } = useContext(StoreContext);

  const pay = async () => {
    const { data } = await axios.post("http://localhost:5000/create-order", {
      amount: total
    });

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY || "rzp_test_YOUR_KEY",
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      handler: async function (res) {
        try {
          // Verify payment on backend
          await axios.post('http://localhost:5000/verify-payment', {
            razorpay_order_id: data.id,
            razorpay_payment_id: res.razorpay_payment_id,
            razorpay_signature: res.razorpay_signature
          });
          await addDoc(collection(db, "orders"), {
            cart,
            amount: total,
            paymentId: res.razorpay_payment_id,
            orderId: data.id,
            createdAt: new Date()
          });
          alert("Payment Successful!");
        } catch (error) {
          alert("Payment verification failed");
        }
      },
      prefill: {
        name: "Customer"
      }
    };

    new window.Razorpay(options).open();
  };

  return <button onClick={pay}>Pay ₹{total}</button>;
}