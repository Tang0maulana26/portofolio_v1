import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";

// Root route yang membungkus seluruh aplikasi
// index.jsx fokus pada urutan cerita (Hero -> About -> Contact), sedangkan __root.jsx fokus pada tata letak aplikasi.

export const Route = createRootRoute({
  component: () => (
    <>
      <StarBackground />
      <Navbar />


      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
    </>
  ),
});
