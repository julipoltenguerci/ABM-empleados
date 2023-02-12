import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { EmployeeForm } from "./screens/EmployeeForm";
import { EmployeeList } from "./screens/EmployeeList";
import { NotFound } from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employee/:employee_id?" element={<EmployeeForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
