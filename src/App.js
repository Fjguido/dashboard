import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="dashboard/home" element={<Dashboard />} />
              <Route path="dashboard/team" element={<Team />} />
              <Route path="dashboard/contacts" element={<Contacts />} />
              <Route path="dashboard/invoices" element={<Invoices />} />
              <Route path="dashboard/form" element={<Form />} />
              <Route path="dashboard/bar" element={<Bar />} />
              <Route path="dashboard/pie" element={<Pie />} />
              <Route path="dashboard/line" element={<Line />} />
              <Route path="dashboard/faq" element={<FAQ />} />
              <Route path="dashboard/calendar" element={<Calendar />} />
              <Route path="dashboard/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
