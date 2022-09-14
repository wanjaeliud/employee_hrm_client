import './App.css';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Pages/Home';
import CompanyContainer from './components/Pages/CompanyContainer';
import CompanyProfile from './components/Pages/CompanyProfile';
import AddCompany from './components/Company/AddCompany';
import EditCompany from './components/Company/EditCompany';
import JobContainer from './components/Pages/JobContainer';
import Hire from './components/Pages/Hire';
import AddJob from './components/Company/AddJob';
import ContactForm from './components/Company/ContactForm';


function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <CompanyContainer />
            </Route>
            <Route exact path="/companies/:id">
              <CompanyProfile />
            </Route>
            <Route exact path="/add">
              <AddCompany />
            </Route>
            <Route exact path="/companies/edit/:id">
              <EditCompany />
            </Route>
            <Route exact path="/jobs">
              <JobContainer />
            </Route>
            <Route exact path="/Hires">
              <Hire />
            </Route>
            <Route exact path="/addjob">
              <AddJob />
            </Route>
            <Route exact path="/contacts">
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
