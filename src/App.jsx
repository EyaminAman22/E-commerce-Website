import { useState,useEffect } from 'react'
import './App.css'
import Products from './components/Products'
import SlickSlider from './components/SlickSlider'
import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import RootLayouts from './components/RootLayouts'
import Errorpage from './pages/Errorpage'
import Signup from './pages/Signup'
import Slider from 'react-slick'
import Login from './pages/Login'
import Contacts from './pages/Contacts'
import Checkout from './pages/Checkout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
      path="/"
      element={<RootLayouts/>}
        >
          <Route
      path="/"
      element={<Products/>}
        ></Route>
        <Route
      path="/shop"
      element={<SlickSlider/>}
        ></Route>
        <Route
      path="/contacts"
      element={<Contacts/>}
        ></Route>
        <Route
      path="/login"
      element={<Login/>}
        ></Route>
        <Route
      path="/checkout"
      element={<Checkout/>}
        ></Route>
        <Route
      path="/shop"
      element={<SlickSlider/>}
        ></Route>
        <Route
      path="/sign-up"
      element={<Signup/>}
        ></Route>
        <Route
      path="*"
      element={<Errorpage/>}
        ></Route>
        </Route>
    </Route>
  ))

function App() {

  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App
