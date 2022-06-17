# Electron Game Updater v2

Second revision of [gustavokei/electron-game-updater](https://github.com/gustavokei/electron-game-updater).

A portable .exe that anyone can use, developed for users that seek a low code solution.

## Getting Started

Clone this repo and run `npm install`

Then, run `npm run dist` and a .exe file will be generated in the `/dist` folder

## Todo List

* [ ] Auto update itself while being portable
* [ ] Auto update game files
* [ ] Support for multiple games
* [ ] Support for custom per game functions such as:
    * [ ] Grand Chase - Installing chosen DirectX DLL in order to circumvent low fps issue
    * [ ] Shadow War - Installing `Config.tws` into `%TEMP%` folder before launching the game
* [ ] Highly customizable (something like [neoncube](https://github.com/OpenKore/neoncube/blob/master/neoncube/neoncube.ini))
