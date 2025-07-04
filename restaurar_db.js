const fs = require('fs');

try {
  fs.copyFileSync('db_backup.json', 'db.json');
  console.log('Base de datos restaurada correctamente.');
} catch (error) {
  console.error('Error al restaurar la base de datos:', error.message);
}
