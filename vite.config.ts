import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [/@syncfusion/]
  }
});

//
// import { reactRouter } from "@react-router/dev/vite";
// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";
// import tsconfigPaths from "vite-tsconfig-paths";
//
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     reactRouter(),
//     tsconfigPaths(),
//   ],
//
//   ssr: {
//     noExternal: [/@syncfusion/],
//   },
//
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           // React
//           if (
//               id.includes("react") ||
//               id.includes("react-dom")
//           ) {
//             return "react-vendor";
//           }
//
//           // Firebase
//           if (id.includes("firebase")) {
//             return "firebase";
//           }
//
//           // Syncfusion
//           if (id.includes("@syncfusion")) {
//             return "syncfusion";
//           }
//
//           // Material UI
//           if (
//               id.includes("@mui") ||
//               id.includes("@emotion")
//           ) {
//             return "mui";
//           }
//
//           // Framer Motion
//           if (
//               id.includes("framer-motion") ||
//               id.includes("motion")
//           ) {
//             return "motion";
//           }
//
//           // i18n
//           if (
//               id.includes("i18next") ||
//               id.includes("react-i18next")
//           ) {
//             return "i18n";
//           }
//
//           // Lottie
//           if (id.includes("lottie")) {
//             return "lottie";
//           }
//         },
//       },
//     },
//   },
// });