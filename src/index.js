
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useParams, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';
import ReactSearchBox from 'react-search-box';
import SurahList from "./surah.json";
import SurahDetailArabic from "./ayats_ar.json";
import SurahDetailBengali from './ayats_bn.json';
import SurahDetailEnglish from './ayats_en.json';
import './index.css';



function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

function SearchBar() {
	return (
		<ReactSearchBox
	        placeholder="Enter surah name"
	        data={SurahList}
	        callback={record => console.log(record)}
      	/>
     )
}

function Navigation() {
	return (
		 <nav className="navigation">
			<ul className="navigation-ul">
				<Link to="/">
					<li className="navigation-li">QuranBangladesh</li>
				</Link>
			</ul>
			<ReactSearchBox
		        placeholder="Enter surah name"
		        data={SurahList}
		        callback={record => console.log(record)}
		      />
		</nav>
	)
}

const SurahDetail = props => {
  let { id } = useParams();
  return (
  	<>  	
  	  <Navigation />  	  
	  <div>
	    {
			SurahDetailArabic.map(surah => {
				if(surah.sura == id) {
					return (
						<div className="surah-detail-box">
							<p className="surah-number" key={surah.sura}>{surah.VerseIDAr}</p>
							<img className="surah-image" src={require('./images/quran.png')} />
							<p className="surah-arabic" key={surah.sura}>{surah.ayat}</p>
							<p className="surah-bengali" key={surah.sura}>{SurahDetailBengali[surah.id-1].text}</p>
							<p className="surah-english" key={surah.sura}>{SurahDetailEnglish[surah.id-1].text}</p>
						</div>
					)
				}
			})
		}
	  </div>
	</>
	)
}

class HomePage extends React.Component {

	state = {
		surahList: SurahList
	}
	render() {
	  	return (
	  	<>
	  		<Navigation />
			<div className="surah-item">
				<ul className="surah-ul">
					{
						this.state.surahList.map(surah => {
							return (
								<Link id={surah.sura_no} to={{
									pathname: "/surah/" + `${surah.sura_no}` +"/"+ `${surah.eng_name}`,
									hash: `${surah.sura_name}`
								}}>
									<li className="surah-li">
										<p>{surah.sura_no}</p>										
										<p>{surah.sura_name}</p>
										<p>আয়াত সংখ্যা : {surah.total_ayat}</p>
									</li>
								</Link>								
							)							
						})
					}
				</ul>
			</div>
		</>
	  	)
	}

}

ReactDOM.render(
  <Router basename={window.location.pathname || ''}>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
      <Route path="/surah/:id">
        <SurahDetail />
      </Route>
  </Router>,
  document.getElementById('root')
);

/*

class Home extends React.Compnent {
	state = {};
	componentDidMount() {

	}
	render() {
		return (
			<nav className="navigation">
				<ul className="navigation-ul">
					<Link to="/">
						Home
					</Link>
				</ul>
			</nav>
		)
	}
}
*/