
import React, {useState} from "react";
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

const Navigation = () => {
	return (
		 <nav className="navigation">
			<ul className="navigation-ul">
				<Link to="/">
					<li className="navigation-li">QuranBangladesh</li>
				</Link>
			</ul>
		</nav>
	)
}

const SurahDetail = props => {
  const [input, setInput] = useState("");

  let { id } = useParams();
  return (
  	<>  	
  	  <Navigation /> 
  	  <ReactSearchBox
	        placeholder="Enter bangla keyword"
	        data={SurahList}
	        callback={record => console.log(record)}
	        onChange={(e) => setInput(e)}
    	/>   	 
	  <div>
	    {
			SurahDetailArabic.map(surah => {
				let regex = new RegExp( ".*" + input.trim() + ".*" );
				if(regex.test(SurahDetailBengali[surah.id-1].text)) {
				if(surah.sura == id) {
					return (
						<div key={surah.VerseIDAr} className="surah-detail-box">
							<p className="surah-number">{surah.VerseIDAr}</p>
							<img className="surah-image" src={require('./images/quran.png')} />
							<p className="surah-arabic">{surah.ayat}</p>
							<p className="surah-bengali">{SurahDetailBengali[surah.id-1].text}</p>
							<p className="surah-english">{SurahDetailEnglish[surah.id-1].text}</p>
						</div>
					)
				}
			    }
			})
		}
	  </div>
	</>
	)
}

class HomePage extends React.Component {

	state = {
		surahList: SurahList,
		input: "",
	}

	render() {
	  	return (
	  	<>
	  		<Navigation />
	  		<ReactSearchBox
		        placeholder="Enter surah name in bangla"
		        data={SurahList}
		        callback={record => console.log(record)}
		        onChange={(e) => this.setState({input: e})}
		    />
			<div className="surah-item">
				<ul className="surah-ul">
					{
						this.state.surahList.map(surah => {
							let regex = new RegExp( ".*" + this.state.input.trim() + ".*" );
							if(regex.test(surah.sura_name)) {
							return (
								<Link id={surah.sura_no} to={{
									pathname: "/surah/" + `${surah.sura_no}` +"/"+ `${surah.eng_name}`,
									hash: `${surah.sura_name}`
								}}>
									<li key={surah.sura_name} className="surah-li">
										<p>{surah.sura_no}</p>										
										<p>{surah.sura_name}</p>
										<p>আয়াত সংখ্যা : {surah.total_ayat}</p>
									</li>
								</Link>								
							)	
							}
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
		     <input type="text" onChange={(e) => this.setState({value: e.target.value}) } />


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