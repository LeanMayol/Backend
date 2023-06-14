import productManager from "./manager/productManager";

const manager = new productManager("./files/products.json");

const producto1 = {
  title: "Gorra",
  description: "Es una gorra",
  price: 2500,
  thumbnail: "url imagen",
  code: 198,
  stock: 1,
};

const producto2 = {
  title: "Remera",
  description: "remera negra",
  price: 3000,
  thumbnail: "url imagen",
  code: 210,
  stock: 20,
};

const producto3 = {
  title: "Campera",
  description: "campera azul",
  price: 12000,
  thumbnail: "url imagen",
  code: 2022,
  stock: 17,
};

const producto4 = {
  title: "nada",
  description: "nada",
  price: 35,
  code: 900,
  stock: 0,
};

const nuevosProductos = async () => {
  await manager.addProduct(producto1);
  await manager.addProduct(producto2);
  await manager.addProduct(producto3);
  await manager.addProduct(producto4);

  console.log(await manager.getProducts());

  console.log(await manager.getProductsById(1));

  console.log(await manager.updateProduct({ id: 1, stock: 200 }));

  console.log(await manager.deleteProduct(1));

  await manager.addProduct(producto1);
};

nuevosProductos();
