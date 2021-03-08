import { getGames } from "./games/GameProvider.js"
import {GameList} from "./games/GameList.js"

getGames().then(GameList)
