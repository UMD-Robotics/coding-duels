/*
    Space Battle - A space-themed two-player game created for use in the Coding Duels Framework.
    Copyright (C) 2017 Steven Hlucny and Joseph Hlucny

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    To contact the developers, please email hlucn001@d.umn.edu (Steven) or hlucn003@d.umn.edu (Joseph).
 */

/**
 * Constructor for SpaceBattle.
 * @return a SpaceBattle object
 */
function SpaceBattle() {

    this.game_state = {

        preload : function () {

        },
        create : function () {

        },
        update : function () {

        }
    };

    /**
     * Starts a new SpaceBattle game.
     */
    this.start = function () {
        this.game.state.add('game_state', this.game_state);
        this.game.state.start('game_state');
    };
}