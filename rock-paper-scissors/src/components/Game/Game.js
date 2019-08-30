import React, { Component } from 'react';
import './Game.css';
import Challenge from '../challenge/components/Challenge/Challenge';
import Modes from '../Modes/Modes';
import WeaponList from '../WeaponList/WeaponList';
import Result from '../Result/Result';

const weapons = {
	rock: {
		wins: ['scissors'],
	},
	paper: {
		wins: ['rock'],
	},
	scissors: {
		wins: ['paper'],
	},
};
const modes = {
	vs: {
		label: 'PLAYER VS COMPUTER',
		player1Label: 'COMPUTER',
		player2Label: 'PLAYER',
	},
	simulate: {
		label: 'COMPUTER VS COMPUTER',
		player1Label: 'COMPUTER 1',
		player2Label: 'COMPUTER 2',
	}
};

const modeKeys = Object.keys(modes);
const weaponKeys = Object.keys(weapons);

export const getRandomWeapon = () => {
	return weaponKeys[weaponKeys.length * Math.random() << 0];
};

export const getWinner = (weapon1, weapon2) => {
	if (weapon1 === weapon2) return 0;
	return weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
}

const initialState = {
	mode: null,
	player1: {
		loading: false,
		weapon: null,
		score: 0,
	},
	player2: {
		loading: false,
		weapon: null,
		score: 0,
	},
	winner: null,
};

class Game extends Component {

	state = initialState;

	onModeSelectHandler = (mode) => {
		this.setState({ mode: mode });
	};

	play(weapon) {
		const weapon1 = getRandomWeapon();
		const weapon2 = weapon || getRandomWeapon();
		const simulateMode = this.state.mode === modeKeys[1];

		this.setState({
			player1: {
				...this.state.player1,
				weapon: weapon1,
				loading: true,
			},
			player2: {
				...this.state.player2,
				weapon: weapon2,
				...((simulateMode) ? { loading: true } : {}),
			},
		});

		setTimeout(() => {
			this.setResult();
		}, 500 + Math.random() * 500)
	}

	setResult() {
		const winner = getWinner(this.state.player1.weapon, this.state.player2.weapon);

		this.setState({
			player1: {
				...this.state.player1,
				...((winner === 1) ? { score: this.state.player1.score + 1 } : {}),
				loading: false,
			},
			player2: {
				...this.state.player2,
				...((winner === 2) ? { score: this.state.player2.score + 1 } : {}),
				loading: false,
			},
			winner,
		});
	}

	restart() {
		this.setState({
			player1: {
				...this.state.player1,
				weapon: initialState.player1.weapon,
			},
			player2: {
				...this.state.player2,
				weapon: initialState.player2.weapon,
			},
			winner: initialState.winner,
		});
    }
    
    reset() {
		this.setState(initialState);
	}

	render() {
		const { player1Label, player2Label } = modes[this.state.mode] || '';
		const loading = (this.state.player1.loading || this.state.player2.loading);
		return (
			<div className="Game">
				<h1>
					ROCK, PAPER, SCISSORS
				</h1>
				{!this.state.mode && <div className="modes">
					<Modes
						modes={modes}
						onModeSelect={this.onModeSelectHandler}
					/>
				</div>
				}

				{this.state.mode &&
					<>
						<div className="challenge">
							<Challenge
								player1={{ ...this.state.player1, label: player1Label }}
								player2={{ ...this.state.player2, label: player2Label }}
							/>
						</div>

						<div className="footer">
							{this.state.winner === null && !loading && this.state.mode === modeKeys[0] && (
								<WeaponList
									weapons={weaponKeys}
									onClickWeapon={weapon => this.play(weapon)}
								/>
							)}

							{(this.state.winner !== null || loading || this.state.mode === modeKeys[1]) && (
								<Result
									player1Label={player1Label}
									player2Label={player2Label}
									winner={this.state.winner}
									loading={loading}
									onClickPlay={() => this.state.mode === modeKeys[1] ?
										this.play() : this.restart()
                                    }
                                    onReset = {()=> this.reset()}
								/>
							)}

						</div>
					</>
				}
			</div>
		);
	}
}

export default Game;
