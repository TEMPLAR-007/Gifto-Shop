import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Routes/RootLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import SingleProduct from "./Components/SingleProduct";
import BookingPage from "./Components/BookingPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/products",
          element: <Products></Products>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct></SingleProduct>
        },
        {
          path: "/booking",
          element: <BookingPage></BookingPage>
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
