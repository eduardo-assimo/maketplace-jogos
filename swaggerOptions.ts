import { SwaggerOptions } from 'swagger-ui-express';

export const swaggerOptions: SwaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Marketplace de Jogos API',
            version: '1.0.0',
            description: 'Uma API simples para um marketplace de jogos',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de Desenvolvimento',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], 
};