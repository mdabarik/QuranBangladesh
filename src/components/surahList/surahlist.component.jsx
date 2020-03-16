import React from 'react';
import Surah from '../../surah.json';
import singleSura '../singleSurah/singlesurah.component';

class SurahList extends React.Component {
	state = {surah: Surah}
	render() {
		return (
			<div style={{
				fontWeight: 100,
				border: '1px solid green',
				borderRadius: '10px',
				backgroundColor: 'blue',
				color: 'white',
				margin: '15px',
				textAlign: 'center'
			}}>
				{
					this.state.surah.map(surah => {
						return (
							<singleSurah />
						)
					})
				}
			</div>
		)
	}
}

export default SurahList;
