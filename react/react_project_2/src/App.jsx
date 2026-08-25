import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      {/* <h3>This is App Component</h3> */}
      <Navbar />
      <Categories />
      <Carousel />
      <Body />
      <Footer />
    </div>
  );
}
