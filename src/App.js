import React from "react"
import { Artworks } from "Artworks"

import { BrowserRouter, Route } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <Artworks />
      {/* {loading && <Loader />} */}
      {/* <Switch> */}
      {/* <Route exact path="/" render={() => <List movies={list} />} />
      <Route path="/details/:movieId">
        <Details />
      </Route> */}
      {/* </Switch> */}
    </BrowserRouter>
  )
}
