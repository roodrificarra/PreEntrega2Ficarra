const productos = [
  {
    id: "1",
    name: "Samsung S23 ULTRA",
    precio: 460000,
    categoria: "celulares",
    img: "https://samsungar.vtexassets.com/arquivos/ids/186658-800-auto?width=800&height=auto&aspect=true",
    stock: 20,
    description: "Samsung Galaxy S23 ULTRA 256 GB",
  },
  {
    id: "2",
    name: "Iphone 14 PRO MAX",
    precio: 600000,
    categoria: "celulares",
    img: "https://www.mgmstore.com.ar/1399-large_default/Apple-iPhone-14-Pro-Max-128GB.jpg",
    stock: 15,
    description: "Iphone 14 PRO MAX 256 GB",
  },
  {
    id: "3",
    name: "Motorola Edge 30",
    precio: 230000,
    categoria: "celulares",
    img: "https://www.perozzi.com.ar/36872-large_default/motorola-telefono-celular-xt2203-1-dubai-moto-edge-30-plata-opalo-8128-.jpg",
    stock: 10,
    description: "Motorola Edge 30 Fusion 256 GB",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

export const getProductosById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === productId));
    }, 500);
  });
};
