async function gestionarProductos() {
    try {
      // 1. Leer productos iniciales
      let response = await fetch('http://localhost:3000/productos');
      let productos = await response.json();
  
      // Clonar para que la impresión quede fija
      const productosIniciales = JSON.parse(JSON.stringify(productos));
  
      // Mostrar productos iniciales
      console.log("Productos iniciales: ", productosIniciales);
  
      // 2. Agregar producto si no existe
      const nuevoProducto = {id: 4, nombre: "Monitor", precio: 500};
      const existe = productos.some(p => p.id === nuevoProducto.id || p.nombre === nuevoProducto.nombre);
      if (existe) {
        console.log("Producto ya existe, no se agregará.");
      } else {
        response = await fetch('http://localhost:3000/productos', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(nuevoProducto)
        });
        const dataNuevo = await response.json();
        console.log("Producto agregado: ", dataNuevo);
      }
  
      // 3. Actualizar producto
      const productoActualizado = {id:"1", nombre: "Laptop", precio: 1600};
      response = await fetch('http://localhost:3000/productos/1', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productoActualizado)
      });
      const dataActualizado = await response.json();
      console.log("Producto actualizado: ", dataActualizado);
  
      // 4. Eliminar producto
      await fetch('http://localhost:3000/productos/3', {method: 'DELETE'});
      console.log("Producto eliminado");
  
      // 5. Leer productos después de las modificaciones
      response = await fetch('http://localhost:3000/productos');
      const productosModificados = await response.json();
  
      // Mostrar productos después de modificaciones
      console.log("Productos después de modificaciones: ", productosModificados);
  
    } catch (error) {
      console.error("Error en la gestión de productos:", error);
    }
  }
  
  gestionarProductos();
  