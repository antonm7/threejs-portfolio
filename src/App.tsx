import { Canvas } from "@react-three/fiber";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import styles from "./app.module.scss";
import Home from "./components/Sections/Home";
import Portfolio from "./components/Sections/Portfolio";
import AboutMe from "./components/Sections/AboutMe";
import Poetry from "./components/Sections/Work/Poetry";
import Magic from "./components/Sections/Work/Magic";
import Landify from "./components/Sections/Work/Landify";
import Keeper from "./components/Sections/Work/Keeper";
import Auth from "./components/Sections/Work/Auth";
import Email from "./components/Email";
import { useStore } from "./store";
import { useProgress } from "@react-three/drei";
import Model from "./components/Model";
import Loader from "react-loaders";
import useWidth from "./helpers/useWindowSize";
import React, { Suspense } from "react";

const LazyPoetry = React.lazy(
  () => import("./components/Sections/Work/Poetry")
);
const LazyMagic = React.lazy(() => import("./components/Sections/Work/Magic"));
const LazyLandify = React.lazy(
  () => import("./components/Sections/Work/Landify")
);
const LazyKeeper = React.lazy(
  () => import("./components/Sections/Work/Keeper")
);
const LazyGameFevr = React.lazy(
  () => import("./components/Sections/Work/Savvy")
);
const LazyAmazonClone = React.lazy(
  () => import("./components/Sections/Work/AmazonClone")
);

function App() {
  const emailVisibility = useStore((state) => state.email);
  const { progress } = useProgress();
  const width = useWidth();

  if (width && width >= 601 && progress < 100) {
    return (
      <div className="flex justify-center items-center bg-[#B0C6D0] h-screen">
        <Loader innerClassName="h-54" active type="ball-grid-beat" />
      </div>
    );
  }

  if (width && width >= 601) {
    return (
      <div className="relative h-screen">
        {emailVisibility ? <Email /> : null}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/project/poetry"
              element={
                <Suspense>
                  <LazyPoetry />
                </Suspense>
              }
            />
            <Route
              path="/project/magicEditor"
              element={
                <Suspense>
                  <LazyMagic />
                </Suspense>
              }
            />
            <Route
              path="/project/landify"
              element={
                <Suspense>
                  <LazyLandify />
                </Suspense>
              }
            />
            <Route
              path="/project/keeper"
              element={
                <Suspense>
                  <LazyKeeper />
                </Suspense>
              }
            />
            <Route
              path="/project/Savvy"
              element={
                <Suspense>
                  <LazyGameFevr />
                </Suspense>
              }
            />
            <Route
              path="/project/amazonClone"
              element={
                <Suspense>
                  <LazyAmazonClone />
                </Suspense>
              }
            />
            <Route path="/project/auth" element={<Auth />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Canvas
            id={styles.canvas}
            className={`h-auto`}
            shadows
            camera={{
              fov: 40,
              near: 0.1,
              far: 2000,
            }}
          >
            <Model />
          </Canvas>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <>
        {emailVisibility ? <Email /> : null}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/project/poetry"
              element={
                <Suspense>
                  <LazyPoetry />
                </Suspense>
              }
            />
            <Route
              path="/project/magicEditor"
              element={
                <Suspense>
                  <LazyMagic />
                </Suspense>
              }
            />
            <Route
              path="/project/landify"
              element={
                <Suspense>
                  <LazyLandify />
                </Suspense>
              }
            />
            <Route
              path="/project/keeper"
              element={
                <Suspense>
                  <LazyKeeper />
                </Suspense>
              }
            />
            <Route
              path="/project/gameFevr"
              element={
                <Suspense>
                  <LazyGameFevr />
                </Suspense>
              }
            />
            <Route
              path="/project/amazonClone"
              element={
                <Suspense>
                  <LazyAmazonClone />
                </Suspense>
              }
            />
            <Route path="/project/auth" element={<Auth />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
