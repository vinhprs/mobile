import Learning from "./Learning";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Notification from "./Notification";
import Username from "./Username";
const NavbarLogin = () => {
  return (
    <div className="flex items-center gap-x-6">
      <Learning />
      <Wishlist />
      <Cart />
      <Notification />
      <Username />
    </div>
  );
};

export default NavbarLogin;
