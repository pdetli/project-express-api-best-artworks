import React from "react"

import { Header } from "Header"
import { Artworks } from "Artworks"
import { Details } from "Details"
//import { BrowserRouter, Router, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>
      <Header />
      <Details />
      {/* <Artworks /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Artworks />} />
          <Route path="/arworks/genre/:genre" element={<Genre />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  )
}
