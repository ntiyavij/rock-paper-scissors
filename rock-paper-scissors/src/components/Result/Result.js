import React from 'react';
import Button from '../../ui/Button';
import './result.css';


const Result = ({ winner, player1Label, player2Label, onClickPlay, loading, onReset }) => (
	<div className="Result">
		{winner !== null && !loading && (
			<div className="winner">
				<span>
					{winner === 0 ? 'TIE' : `${(winner === 1 ? player1Label : player2Label)} WINS`}
				</span>
			</div>
		)}
		<div className="play">
			<Button
				disabled={loading}
				onClick={onClickPlay}
			>
				PLAY {(loading || winner !== null) && 'AGAIN'}
			</Button>

			<Button
				disabled={loading}
				onClick={onReset}
			>
				Reset
			</Button>
		</div>
	</div>
);

export default Result;
