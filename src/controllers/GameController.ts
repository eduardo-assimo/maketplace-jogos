import { Game } from "../models/Game";
import * as fs from "fs";
import * as path from "path";

const dataPath = path.join(__dirname, '..', 'data', 'games.json');

export class GameController {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    private static loadData(): Game[] {
        try {
            const data = fs.readFileSync(dataPath, 'utf8');
            const games: Game[] = JSON.parse(data);
            return games;
        } catch (error) {
            return [];
        }
    }

    private static saveData(games: Game[]): void {
        fs.writeFileSync(dataPath, JSON.stringify(games, null, 2), 'utf8');
    }

    static getAllGames(): Game[] {
        return this.loadData();
    }

    static getGameByName(name: string): Game | undefined {
        return this.loadData().find(game => game.name === name);
    }

    static addGame(game: Game): void {
        const games = this.getAllGames();
        games.push(game);
        this.saveData(games)
    }

    static updateGame(name: string, newData: Partial<Game>): boolean {
        const games = this.getAllGames();
        const index = games.findIndex(game => game.name === name);
        if (index !== -1) {
            games[index] = { ...games[index], ...newData };
            this.saveData(games);
            return true;
        }
        return false;
    }

    static removeGame(name: string): boolean {
        let games = this.getAllGames();
        const index = games.findIndex(game => game.name === name);
        if (index !== -1) {
            games.splice(index, 1);
            this.saveData(games);
            return true;
        }
        return false;
    }
}
