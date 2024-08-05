import { IProduct } from './../interfaces/index';
import { v4 as uuid } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Green Plant",
    description: "A beautiful green plant perfect for home or office decoration.",
    imageURL: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500,000",
    colors: ["#00ff00", "#008000", "#006400"],
    category: {
      name: "Plants",
      imageURL: "https://images.unsplash.com/photo-1722494285961-9bc4bb89ad93?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  {
    id: uuid(),
    title: "Modern Sofa",
    description: "A comfortable and stylish modern sofa for your living room.",
    imageURL: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1,200,000",
    colors: ["#f0f0f0", "#cccccc", "#888888"],
    category: {
      name: "Furniture",
      imageURL: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  },
  {
    id: uuid(),
    title: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancellation.",
    imageURL: "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww",
    price: "200,000",
    colors: ["#000000", "#ffffff", "#ff0000"],
    category: {
      name: "Electronics",
      imageURL: "https://images.unsplash.com/photo-1637780852590-8ab27248ec41?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww"
    }
  },
  {
    id: uuid(),
    title: "Wooden Table",
    description: "A sturdy and elegant wooden table for your dining room.",
    imageURL: "https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFRhYmxlfGVufDB8fDB8fHww",
    price: "800,000",
    colors: ["#8b4513", "#a0522d", "#d2691e"],
    category: {
      name: "Furniture",
      imageURL: "https://plus.unsplash.com/premium_photo-1680098058374-e580a9dbaeef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdvb2RlbiUyMFRhYmxlfGVufDB8fDB8fHww"
    }
  },
  {
    id: uuid(),
    title: "Mountain Bike",
    description: "A durable and high-performance mountain bike for outdoor adventures.",
    imageURL: "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBCaWtlfGVufDB8fDB8fHww",
    price: "3,000,000",
    colors: ["#ff5733", "#c70039", "#900c3f"],
    category: {
      name: "Sports",
      imageURL: "https://images.unsplash.com/photo-1534150034764-046bf225d3fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91bnRhaW4lMjBCaWtlfGVufDB8fDB8fHww"
    }
  },
  {
    id: uuid(),
    title: "Smart Watch",
    description: "A sleek and stylish smart watch with multiple health tracking features.",
    imageURL: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    price: "400,000",
    colors: ["#000000", "#ff0000", "#0000ff"],
    category: {
      name: "Electronics",
      imageURL: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D"
    }
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description: "Comfortable and durable running shoes for all terrains.",
    imageURL: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
    price: "150,000",
    colors: ["#ff4500", "#ffa500", "#0000ff"],
    category: {
      name: "Sports",
      imageURL: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww"
    }
  },
  {
    id: uuid(),
    title: "Leather Jacket",
    description: "A stylish and high-quality leather jacket for all seasons.",
    imageURL: "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    price: "1,000,000",
    colors: ["#000000", "#a52a2a", "#800000"],
    category: {
      name: "Clothing",
      imageURL: "https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMEphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
    }
  },
  {
    id: uuid(),
    title: "Electric Guitar",
    description: "A top-notch electric guitar for music enthusiasts.",
    imageURL: "https://images.unsplash.com/photo-1520496938502-73e942d08cc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D",
    price: "2,500,000",
    colors: ["#ff0000", "#000000", "#ffffff"],
    category: {
      name: "Music",
      imageURL: "https://images.unsplash.com/photo-1520496938502-73e942d08cc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D"
    }
  },
  {
    id: uuid(),
    title: "Coffee Maker",
    description: "A premium coffee maker for the perfect cup every time.",
    imageURL: "https://media.istockphoto.com/id/120874807/photo/modern-coffee-machine-isolated-on-white-background-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=vGspbtpqq1s_FQZTQ07WbT_wBRNmSgd6J4VZxEw-dQM=",
    price: "300,000",
    colors: ["#000000", "#d2b48c", "#a52a2a"],
    category: {
      name: "Kitchen",
      imageURL: "https://media.istockphoto.com/id/120874807/photo/modern-coffee-machine-isolated-on-white-background-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=vGspbtpqq1s_FQZTQ07WbT_wBRNmSgd6J4VZxEw-dQM="
    }
  },
  {
    id: uuid(),
    title: "Yoga Mat",
    description: "A high-quality yoga mat for comfortable and safe practice.",
    imageURL: "https://media.istockphoto.com/id/1405681244/photo/sports-concept-top-view-photo-of-white-shoes-green-yoga-mat-and-dumbbells-on-isolated-green.webp?b=1&s=170667a&w=0&k=20&c=tNmr0ZbL-ErW7wbJau0APOxOls-7oujpKM3xhhuT35A=",
    price: "50,000",
    colors: ["#ff69b4", "#8a2be2", "#4b0082"],
    category: {
      name: "Fitness",
      imageURL: "https://media.istockphoto.com/id/1405681244/photo/sports-concept-top-view-photo-of-white-shoes-green-yoga-mat-and-dumbbells-on-isolated-green.webp?b=1&s=170667a&w=0&k=20&c=tNmr0ZbL-ErW7wbJau0APOxOls-7oujpKM3xhhuT35A="
    }
  }
];
