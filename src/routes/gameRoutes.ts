import { Router } from 'express';
import { GameController } from '../controllers/GameController';

const router = Router();

/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Lista todos os jogos
 *     responses:
 *       200:
 *         description: Uma lista de jogos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Game'
 */
router.get('/games', (req, res) => {
    res.json(GameController.getAllGames());
});

/**
 * @swagger
 * /api/games:
 *   post:
 *     summary: Adiciona um novo jogo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       201:
 *         description: Jogo adicionado com sucesso.
 */
router.post('/games', (req, res) => {
    GameController.addGame(req.body);
    res.status(201).send();
});


export default router;