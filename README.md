# Restaurar base de datos antes de iniciar el servidor

Este proyecto utiliza un archivo JSON (`db.json`) como base de datos local para simular una API REST con herramientas como `json-server`.

## Problema

Durante la ejecución, los datos en `db.json` pueden modificarse (agregar, actualizar o eliminar productos). Para mantener un estado limpio y consistente cada vez que se reinicie el servidor, es necesario restaurar `db.json` a su estado original.

## Solución

Para esto, se utiliza el script `restaurar_db.js` que copia el archivo `db_backup.json` (que contiene la base de datos original) y lo sobrescribe en `db.json`.

## Archivos importantes

- `db_backup.json`: contiene la base de datos original, con los productos iniciales.  
- `db.json`: archivo usado por el servidor para servir los datos (puede modificarse durante la ejecución).  
- `restaurar_db.js`: script Node.js para copiar `db_backup.json` a `db.json`.

## Cómo usar el script de restauración

Antes de iniciar el servidor, ejecuta:

```bash
node restaurar_db.js
```
## Esto hará que:

- Se copie el contenido de `db_backup.json` en `db.json`.
- Se restablezca el estado original de la base de datos.

Luego, inicia el servidor normalmente (por ejemplo, con `json-server`):

```bash
json-server --watch db.json
