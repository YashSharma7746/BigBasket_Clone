import BankOffers from "../Divs/BankOffers";
import BeautyHyg from "../Divs/BeautyHyg";
import BestSeller from "../Divs/BestSellers";
import Beverages from "../Divs/Beverages";
import BrandStore from "../Divs/BrandStore";
import CleaningHousehold from "../Divs/CleaningHousehold";
import DailyStaples from "../Divs/DailyStaples";
import FruitsVegies from "../Divs/Fruits&Veg";
import HomeKitchen from "../Divs/HomeKitchen";
import SmartBasket from "../Divs/SmartBasket";
import SnackStore from "../Divs/SnackStore";
import TopOffers from "../Divs/TopOffers";
import MidAdvt from "./MidAdvt";
import Navbar from "./Navbar";
import TopAdvt from "./TopAdvt";

function Home() {
  return (
    <>
      <Navbar />
      <TopAdvt />
      <SmartBasket />
      <BankOffers />
      <BestSeller />
      <TopOffers />
      <FruitsVegies />
      <DailyStaples />
      <Beverages />
      <SnackStore />
      <CleaningHousehold />
      <BeautyHyg />
      <HomeKitchen />
      <MidAdvt />
      <BrandStore />
    </>
  );
}
export default Home;
