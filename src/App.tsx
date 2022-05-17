import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./components/Loadings/Page";
import { MovieDescription } from "./pages/MovieDescription";
import { PlayMovie } from "./pages/PlayMovie";
const Home = React.lazy(() => import("./pages/Home"))

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<LoadingPage />}>
            < Home />
          </Suspense>
        } />
        <Route path={'/movie-description/:id'} element={<MovieDescription />} />
        <Route path={'/play-movie/:id'} element={<PlayMovie />} />
      </Routes>
    </>
  )
}