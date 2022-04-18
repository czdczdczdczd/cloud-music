// import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from "../application/Home/index.js";
import Rank from "../application/Rank/index.js";
import Recommend from "../application/Recommend/index.js";
import Singer from "../application/Singer/index.js";

// const MyRouter=()=>{
//     return(
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/rank" element={<Rank />} />
//                 <Route path="/recommend" element={<Recommend />} />
//                 <Route path="/singer" element={<Singer />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }
const routes = [
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/recommend',
        element: <Recommend/>
      },
      {
        path: '/singer',
        element: <Singer/>
      },
      {
        path: 'rank',
        element: <Rank/>
      }

    ]
  }
]

export default routes;
