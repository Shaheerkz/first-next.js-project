"use client"
export type fetch = {
    id: number,
  img: string,
  category: string,
  price: string,
}

export const fetchPost: fetch [] =  [
    {
      id: 1,  
      img: "https://flowbite.com/docs/images/products/apple-watch.png",
      category: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      price: "$599",
    },

    {
      id: 2,  
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      category: "This is sunset view",
      price: "$999",
    },
  ] 