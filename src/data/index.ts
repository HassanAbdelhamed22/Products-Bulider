import { ICategories, IFormInput, IProduct } from "./../interfaces/index";
import { v4 as uuid } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Green Plant",
    description:
      "A beautiful green plant perfect for home or office decoration.",
    imageURL:
      "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500000",
    colors: ["#00ff00", "#008000", "#006400"],
    category: {
      name: "Plants",
      imageURL:
        "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Modern Sofa",
    description: "A comfortable and stylish modern sofa for your living room.",
    imageURL:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1200000",
    colors: ["#f0f0f0", "#cccccc", "#888888"],
    category: {
      name: "Furniture",
      imageURL:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancellation.",
    imageURL:
      "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
    price: "200000",
    colors: ["#000000", "#ffffff", "#ff0000"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
    },
  },
  {
    id: uuid(),
    title: "Wooden Table",
    description: "A sturdy and elegant wooden table for your dining room.",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFRhYmxlfGVufDB8fDB8fHww",
    price: "800,000",
    colors: ["#8b4513", "#a0522d", "#d2691e"],
    category: {
      name: "Furniture",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFRhYmxlfGVufDB8fDB8fHww",
    },
  },
  {
    id: uuid(),
    title: "Mountain Bike",
    description:
      "A durable and high-performance mountain bike for outdoor adventures.",
    imageURL:
      "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBCaWtlfGVufDB8fDB8fHww",
    price: "3000000",
    colors: ["#ff5733", "#c70039", "#900c3f"],
    category: {
      name: "Sports",
      imageURL:
        "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBCaWtlfGVufDB8fDB8fHww",
    },
  },
  {
    id: uuid(),
    title: "Smart Watch",
    description:
      "A sleek and stylish smart watch with multiple health tracking features.",
    imageURL:
      "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    price: "400000",
    colors: ["#000000", "#ff0000", "#0000ff"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    imageURL:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
    price: "150000",
    colors: ["#ff4500", "#ffa500", "#0000ff"],
    category: {
      name: "Sports",
      imageURL:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
    },
  },
  {
    id: uuid(),
    title: "Leather Jacket",
    description: "A stylish and high-quality leather jacket for all seasons.",
    imageURL:
      "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    price: "1000000",
    colors: ["#000000", "#a52a2a", "#800000"],
    category: {
      name: "Clothing",
      imageURL:
        "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Electric Guitar",
    description: "A top-notch electric guitar for music enthusiasts.",
    imageURL:
      "https://images.unsplash.com/photo-1520496938502-73e942d08cc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D",
    price: "2500000",
    colors: ["#ff0000", "#000000", "#ffffff"],
    category: {
      name: "Music",
      imageURL:
        "https://images.unsplash.com/photo-1520496938502-73e942d08cc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    id: uuid(),
    title: "Coffee Maker",
    description: "A premium coffee maker for the perfect cup every time.",
    imageURL:
      "https://media.istockphoto.com/id/120874807/photo/modern-coffee-machine-isolated-on-white-background-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=vGspbtpqq1s_FQZTQ07WbT_wBRNmSgd6J4VZxEw-dQM=",
    price: "300000",
    colors: ["#000000", "#d2b48c", "#a52a2a"],
    category: {
      name: "Kitchen",
      imageURL:
        "https://media.istockphoto.com/id/120874807/photo/modern-coffee-machine-isolated-on-white-background-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=vGspbtpqq1s_FQZTQ07WbT_wBRNmSgd6J4VZxEw-dQM=",
    },
  },
  {
    id: uuid(),
    title: "Yoga Mat",
    description: "A high-quality yoga mat for comfortable and safe practice.",
    imageURL:
      "https://media.istockphoto.com/id/1405681244/photo/sports-concept-top-view-photo-of-white-shoes-green-yoga-mat-and-dumbbells-on-isolated-green.webp?b=1&s=170667a&w=0&k=20&c=tNmr0ZbL-ErW7wbJau0APOxOls-7oujpKM3xhhuT35A=",
    price: "50000",
    colors: ["#ff69b4", "#8a2be2", "#4b0082"],
    category: {
      name: "Fitness",
      imageURL:
        "https://media.istockphoto.com/id/1405681244/photo/sports-concept-top-view-photo-of-white-shoes-green-yoga-mat-and-dumbbells-on-isolated-green.webp?b=1&s=170667a&w=0&k=20&c=tNmr0ZbL-ErW7wbJau0APOxOls-7oujpKM3xhhuT35A=",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#FF5733",
  "#13005A",
  "#FFFF00",
  "#000000",
  "#28A745",
  "#007BFF",
  "#800080",
  "#FF69B4",
  "#20C997",
  "#8B4513",
  "#6C757D",
  "#5f3dc4",
  "#3bc9db",
  "#f03e3e",
];

export const categories: ICategories[] = [
  {
    id: uuid(),
    name: "Technology",
    imageURL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: uuid(),
    name: "Health",
    imageURL: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
  {
    id: uuid(),
    name: "Education",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: uuid(),
    name: "Sports",
    imageURL:
      "https://media.istockphoto.com/id/469569130/photo/fanatical-hockey-fans-at-a-stadium.webp?b=1&s=170667a&w=0&k=20&c=rq7An_bg9GDhqwUMhyXPMGeJKHMN9j8J3MfnwAipotM=",
  },
  {
    id: uuid(),
    name: "Travel",
    imageURL: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  },
  {
    id: uuid(),
    name: "Food",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1683892034683-b6896f6245f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: uuid(),
    name: "Fashion",
    imageURL: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: uuid(),
    name: "Science",
    imageURL: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
  },
  {
    id: uuid(),
    name: "Finance",
    imageURL: "https://images.unsplash.com/photo-1444653389962-8149286c578a",
  },
];
