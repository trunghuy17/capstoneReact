import React from "react";
import Login from "../pages/Login/Login";
import Modal from "./Modal";

// Tạo ra component từ HOC
let WrapFormLoginModal = Modal(Login);
export default function DemoModal() {
  return (
    <div>
      <WrapFormLoginModal />
    </div>
  );
}
