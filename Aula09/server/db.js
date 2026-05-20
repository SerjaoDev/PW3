import mysql from 'mysql2/promise'

const conexao = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'test'
});

async function query(sql, params = []) {
    const [linhas] = await conexao.execute(sql, params);
    return linhas;
}

export function boot(){

}