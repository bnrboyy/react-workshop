import {
  useState,
  useEffect,
  createContext,
  useContext,
  memo,
  Fragment,
} from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";

/* Components */
// import Header from "./components/Header";
import Home from "./components/i18nComponent/Home";
import Header from "./components/i18nComponent/Header"; // i18n header
import Profile from "./components/i18nComponent/Profile";

//random RGB /////////////////////////////////////////////////////////////////
// function App() {
//   const [count, setCount] = useState(0);
//   const [rgb, setRGB] = useState([0, 0, 0]);

//   useEffect(() => {
//     console.log(rgb);
//     const rgbEl = document.querySelector(".rgb");
//     rgbEl.style.color = `rgb(${rgb.join(", ")})`;
//   }, [rgb]);

//   return (
//     <>
//       <p className="rgb">Random RGB: {rgb.join(", ")}</p>
//       <button
//         onClick={() =>
//           setRGB(
//             rgb.map(() => {
//               return Math.floor(Math.random() * 256);
//             })
//           )
//         }
//       >
//         Random RGB
//       </button>
//     </>
//   );
// }
/****************************************************************************************/

// random Dogs api ///////////////////////////////////////////////////////////
// const queryClient = new QueryClient(); // เก็บข้อมูลจาก API
// const DogsContext = createContext(); // global state
// function DogsProvider({ children }) {
//   const [dogs, setDogs] = useState("pitbull"); //Local State
//   return (
//     <QueryClientProvider client={queryClient}>
//       <DogsContext.Provider value={{ dogs, setDogs }}>
//         {children}
//       </DogsContext.Provider>
//     </QueryClientProvider>
//   );
// }

// const DogsContent = memo(() => {
//   // React.memo คือการ memoized component ไม่ให้มีการ re-render ถ้าหาก Props ไม่มีการเปลี่ยนแปลง
//   return (
//     <div className="App">
//       <DogsPicker />
//       <DogsPicture />
//     </div>
//   );
// });

// function App() {
//   return (
//     <DogsProvider>
//       <DogsContent></DogsContent>
//     </DogsProvider>
//   );
// }

// function DogsPicker() {
//   const { dogs, setDogs } = useContext(DogsContext);
//   return (
//     <select value={dogs} onChange={(event) => setDogs(event.target.value)}>
//       <option value="pitbull">Pitbull</option>
//       <option value="shiba">Shiba</option>
//       <option value="bulldog">Bulldog</option>
//       <option value="poodle">Poodle</option>
//       <option value="beagle">Beagle</option>
//       <option value="rottweiler">Rottweiler</option>
//       <option value="terrier-yorkshire">Terrier Yorkshire</option>
//     </select>
//   );
// }

// async function fetchPicture({ queryKey }) {
//   const response = await fetch(`https://dog.ceo/api/breed/${queryKey}/images`);
//   const data = await response.json();
//   return data;
// }

// function DogsPicture() {
//   const { dogs } = useContext(DogsContext);
//   const { data, isLoading, error } = useQuery(dogs, fetchPicture);

//   if (isLoading) return <p>Loading....</p>;
//   if (error) return <p>Error!</p>;

//   return (
//     <>
//       <h1>Dogs {dogs} Picture</h1>
//       <div className="row">
//         {data.message.map((val, index) => (
//           <img key={index} src={val} />
//         ))}
//       </div>
//     </>
//   );
// }
/********************************************************************************* */

/* React i18n */
function App() {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

//////////////////////////////////////////////////////////////////////////////////////
export default App;
