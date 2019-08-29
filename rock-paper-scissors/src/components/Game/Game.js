import React, { Component } from 'react';
import './Game.css';
import Challenge from '../challenge/components/Challenge/Challenge';
import Modes from '../Modes/Modes';
import WeaponList from '../WeaponList/WeaponList' ;

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

    render() {
        const { player1Label , player2Label } = modes[this.state.mode] || '';
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
