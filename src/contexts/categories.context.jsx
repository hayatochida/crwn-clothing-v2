// import { useState } from "react";
// import { useEffect } from "react";
// import { createContext } from "react";
// import { getCategoriesAddDocuments } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//     categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//     const [categoriesMap, setCategoriesMap] = useState({});
    
//     useEffect(() => {
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCategoriesAddDocuments();
//             console.log(categoryMap);
//             setCategoriesMap(categoryMap);
//         };
//         getCategoriesMap();
//     }, []);

//     const value = { categoriesMap };
//     return (
//         <CategoriesContext.Provider value={value}>
//             {children}
//         </CategoriesContext.Provider>
//     );
// };