import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import SurecDetaylari from "./Components/SüreçDetaylari";
import Surecler from "./Components/Süreçler";
import Dashboard from "./Components/Dashboard";
import { data, IData } from "./Data";

const App: React.FC = () => {
  const groupedData: { [key: string]: IData[] } = {};

  data.forEach((item) => {
    if (!groupedData[item.Süreç]) {
      groupedData[item.Süreç] = [];
    }
    groupedData[item.Süreç].push(item);
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/surecler" element={<Surecler data={data} />} />
          <Route
            path="/process/All"
            element={<SurecDetaylari processData={data} />}
          />
          {Object.keys(groupedData).map((uniqueProcess, index) => (
            <Route
              key={index}
              path={`/process/${uniqueProcess}`}
              element={
                <SurecDetaylari processData={groupedData[uniqueProcess]} />
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
