import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Homepage from "./pages/Homepage";
import Todaypage from "./pages/Todaypage";
import TodoPage from "./pages/TodoPage";
function App() {
  return(
    <Routes>
    <Route exect path="/" element={<Homepage />} />
    <Route path="/todo" element={<TodoPage />} />
    <Route path="/today" element={<Todaypage />} />
    <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;