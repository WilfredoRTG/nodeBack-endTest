import { createConnection } from 'mysql2';

export const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})


