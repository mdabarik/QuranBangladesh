import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);





/*
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}








/*
import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import SurahList from './components/surahList/surahlist.component';



class Home extends React.Component {
  render() {
    return (
      <SurahList />
    )
  }
}

export default Home; */

/*
class Home extends React.Component {

  state = {
    arabic: [],
    english: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get(`http://api.alquran.cloud/v1/surah/3/ar.asad`)
      .then(res => {
        const arabic = res.data.data.ayahs;
        console.log(res.data.data.ayahs)
        this.setState({ arabic });
      })
    axios.get(`http://api.alquran.cloud/v1/surah/3/en.asad`)
    .then(res => {
      const english = res.data.data.ayahs;
      this.setState({ english: english, isLoading: false });
    })
  }

  render() {
    let englishText = this.state.english;
    let loading = this.state.isLoading;
    return (
      <div style={{ border: '1px solid blue' }}>
      {
        loading ? 
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
      /> : ""
      }
      
      {
        this.state.arabic.map(ayah => {
          let index = ayah.numberInSurah;
          return (
            <div key={index} style={{ color: 'orangered', border: '1px solid blue', padding: '25px'  }}>            
              <h1>{ayah.text}</h1>
              <h1>{englishText[index-1].text}</h1>               
            </div>
          )
        })
      }
           
      </div>
    )
  }
  
}

class About extends React.Component {

   state = {
    surah: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get(`http://api.alquran.cloud/v1/surah`)
      .then(res => {
        const surah = res.data.data;
        this.setState({ surah });
        console.log(surah)
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center', color: 'white', fontSize: '25px', fontWeight: 100, margin: '15px' }}>
        {
          this.state.surah.map(name => {
            return (
              <div>
                <h2>{name.number}</h2>
                <h1 key={name.number} style={{ border: '1px solid white', padding: '25px', borderRadius: '50px', backgroundColor: 'orangered' }}>{name.englishName}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
  
}

class SurahName extends React.Component {

  state = {
    surah: Surah
  }

  render() {
    let s = this.state.surah;
    return (
      <div>
        {
          this.state.surah.map(name => {
            return (
              <div>
                <h2>{name.sura_no}</h2>
                <h1 key={name.sura_no} style={{ border: '1px solid white', padding: '25px', borderRadius: '50px', backgroundColor: 'orangered' }}>{name.sura_name}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }

}

function Users() {
  return <h2>Users</h2>;
}
*/