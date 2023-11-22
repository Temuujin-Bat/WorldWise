import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import PricePage from "./pages/PricePage";
import ProductPage from "./pages/ProductPage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import LoginPage from "./pages/LoginPage";
import CountryList from "./components/SideBar/CountryList";
import CityList from "./components/SideBar/CityList";
import City from "./components/SideBar/City";
import Form from "./components/Map/Form";

const URL = "http://localhost:8000";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/cities`);
        const data = await response.json();

        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="price" element={<PricePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList countries={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
