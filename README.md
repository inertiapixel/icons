# InertiaPixel Icons

![InertiaPixel Icons](https://www.inertiapixel.com/images/logo-min.svg)


**InertiaPixel Icons** is a collection of high-quality SVG icons designed for React and Next.js applications. This lightweight, customizable icon set is perfect for modern web development.

With **5000+ icons**, this package provides a scalable, flexible, and easy-to-use solution for your UI needs.


## 🚀 Installation

Install the package via npm:

```sh
npm install @inertiapixel/react-icons
```

## Usage

```tsx
import React from "react";
import { Heart1Icon, Star1Icon, ShoppingCart1Icon, Accessible1Icon } from "@inertiapixel/react-icons";

const App = () => {
  return (
    <div>
      <ShoppingCart1Icon />
      <Heart1Icon width={100} height={100} color="red" />
      <Star1Icon width={100} height={100} color="#008000" />
      <Accessible1Icon width={100} height={100} color="#008000" fill="blue" className="border" />
    </div>
  );
};

export default App;
```

## Customization

Each icon component accepts the following props for full flexibility:

| Prop        | Type     | Default          | Description                                                |
|-------------|----------|------------------|------------------------------------------------------------|
| `width`     | `number` | `15`             | Width of the icon in pixels                                |
| `height`    | `number` | `15`             | Height of the icon in pixels                               |
| `color`     | `string` | `'currentColor'` | Sets the `stroke` color of the icon                        |
| `fill`      | `string` | `'none'`         | Sets the `fill` color of the icon                          |
| `className` | `string` | `undefined`      | Apply custom classes (e.g., Tailwind classes)              |
| `...props`  | `any`    | —                | All other standard SVG props are supported as well         |


### Why use InertiaPixel React Icons instead of icon fonts?
SVGs are supported by all major browsers and offer better flexibility, scalability, and performance compared to icon fonts. With InertiaPixel React Icons, you can import only the icons you need, avoiding the overhead of large font files. This keeps your bundle size optimized and makes it easy to manage and track icon usage across your project.

## Authors

- **Md Asif** - [LinkedIn](https://www.linkedin.com/in/md-asif-ba446aa3/)
- **Anand Bhatt** - [LinkedIn](https://www.linkedin.com/in/anandbhatt1983/)
- **Md Shaquib** - [LinkedIn](https://www.linkedin.com/in/md-saquib-32604a232/)

### Visit our official website for live previews and easily find the icons you need for your project:
🔗 www.inertiapixel.com/react-icons

## License

This icon set is **free** and open-source under the **MIT License**.  
See the full license [here](https://github.com/inertiapixel/icons/blob/master/LICENSE).

**Crafted in India by [InertiaPixel](https://www.inertiapixel.com/)**