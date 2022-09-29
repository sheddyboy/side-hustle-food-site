export interface RegisterDetails {
  name: string;
  email: string;
  password: string;
}
export interface LoginDetails {
  email: string;
  password: string;
}

export interface NotifyProps {
  type: "success" | "error";
  value: string;
}

export interface ModalProps {
  modal: "cart" | "order" | "checkout" | "meal";
  toggle?: boolean;
  handleModalToggle?: () => void;
  cartList?: CartItemProps[];
}

export interface CartItemProps {
  image: string;
  amount: number;
}
