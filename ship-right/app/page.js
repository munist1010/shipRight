"use client";

import Nav from "./components/Nav"
import Header from "./components/Header"
import Login from "./components/Login"
import { useState } from "react"


export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <main>
    {isLoggedIn && <Header />}
    {isLoggedIn && <Nav />}
    <Login />
    </main>
    // colours: #AD9FD4 #CCBBFA #C2B2ED <*main* #5A526E #8E82AD
  )
}
