const express = require('express');
const cors = require ('cors');
const departamentosRoutes = require ('./routes/departamentosRoutes');
const cargosRoutes = require ('./routes/cargosRoutes');
const funcionariosRoutes = require ('./routes/funcionariosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/departamentos', departamentosRoutes);
app.use('/cargos', cargosRoutes);
app.use('/funcionarios', funcionariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});