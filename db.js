import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = process.env.NODE_ENV === 'test' 
  ? new Sequelize('sqlite::memory:', { logging: false }) // Base de données temporaire en mémoire
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      logging: false
    });