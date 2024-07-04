import { ICourse } from './courses-model';

// title: string;
// id: number;
// fee: number;
// image: string;
// duration: string;
// dates: string;

export const courses: ICourse[] = [
  {
    title: 'HTML',
    id: 0,
    fee: 840,
    image: '/images/logos/html5-original.svg',
    duration: '2 Weeks',
    dates: '08.07.2024 - 19.07.2024',
    category: 'full',
    description:
      'A comprehensive HTML course is designed to introduce learners to the fundamental building blocks of web development. The course begins with an overview of HTML (HyperText Markup Language), explaining its role in structuring web content. Participants learn how to create and organize web pages using various HTML elements, such as headings, paragraphs, lists, links, images, and tables. The curriculum typically covers essential concepts like semantic HTML, which emphasizes using tags that convey the meaning of content, enhancing both accessibility and SEO. Students are guided through creating forms for user input, incorporating multimedia elements like audio and video, and understanding the importance of the Document Object Model (DOM) in manipulating HTML with JavaScript. Practical exercises and projects are integral to the course, allowing learners to build and style their web pages. Best practices for writing clean, maintainable code are emphasized throughout. Advanced topics may include HTML5 features, responsive design principles, and integration with CSS for improved aesthetics and layout control. By the end of the course, participants should be able to create well-structured, functional web pages, understand web standards, and be prepared for further study in web technologies or entry-level positions in web development.',
    level: ['beginner', 'intermediate', 'advanced'],
  },
  {
    title: 'CSS',
    id: 1,
    fee: 840,
    image: '/images/logos/css3-original.svg',
    duration: '2 Weeks',
    dates: '29.07.2024 - 09.08.2024',
    category: 'full',
    description:
      'A CSS (Cascading Style Sheets) course provides learners with the skills to style and layout web pages, enhancing the visual appeal and user experience of websites. The course begins with an introduction to CSS syntax and the basic principles of applying styles to HTML elements. Students learn about selectors, properties, and values, which are the core components of CSS. Key topics covered include the box model, which explains how elements are structured and spaced, and the use of various units for dimensions and positioning. The course delves into layout techniques such as flexbox and grid, which enable responsive and flexible web designs. Learners also explore how to use colors, fonts, and backgrounds effectively to create visually engaging designs. Advanced concepts include animations, transitions, and pseudo-classes, which add interactivity and dynamic effects to web pages. The course often incorporates practical exercises and projects, allowing students to apply what they`ve learned in real-world scenarios. Emphasis is placed on best practices for writing clean, maintainable CSS, including modular design and the use of preprocessors like SASS or LESS. By the end of the course, participants should be proficient in styling web pages, creating responsive designs, and understanding the principles of modern web design. This foundation prepares them for further study in web development or careers in front-end development.',
    level: ['beginner', 'intermediate', 'advanced'],
  },
  {
    title: 'JavaScript',
    id: 2,
    fee: 1500,
    image: '/images/logos/javascript-original.svg',
    duration: '4 Weeks',
    dates: '12.08.2024 - 06.09.2024',
    category: 'full',
    description:
      'A JavaScript course equips learners with the knowledge and skills to make web pages interactive and dynamic. The course starts with an introduction to JavaScript`s basic syntax and programming concepts, such as variables, data types, operators, and control structures (loops and conditionals). Students learn how to write and run JavaScript code in the browser and explore the integration of JavaScript with HTML and CSS. Key topics include functions, which allow for reusable code, and events, which enable user interaction. The course covers the Document Object Model (DOM), teaching students how to manipulate web page elements dynamically. Learners are introduced to arrays and objects, which are essential for managing and organizing data. Advanced concepts often include asynchronous programming with callbacks, promises, and the use of the Fetch API for handling HTTP requests. Students also explore modern JavaScript features from ES6 and beyond, such as arrow functions, template literals, and destructuring assignments. Practical exercises and projects are integral to the course, allowing students to build interactive web applications and games. Best practices for debugging and writing clean, efficient code are emphasized throughout. By the end of the course, participants should be able to create dynamic web content, understand core JavaScript concepts, and be prepared for further study or entry-level positions in web development or software engineering.',
    level: ['beginner', 'intermediate', 'advanced'],
  },
  {
    title: 'PHP',
    id: 3,
    fee: 600,
    image: '/images/logos/php-plain.svg',
    duration: '1 Week',
    category: 'short',
    description:
      'A PHP course provides an introduction to server-side scripting and web development. Students learn PHP syntax, variables, and control structures, along with how to handle forms and interact with databases. The course emphasizes practical skills, enabling participants to create dynamic web pages and manage server-side operations efficiently.',
  },
  {
    title: 'Java',
    id: 4,
    fee: 600,
    image: '/images/logos/java-original-wordmark.svg',
    duration: '1 Week',
    category: 'short',
    description:
      'A Java course offers a solid foundation in one of the most popular programming languages. The curriculum covers Java syntax, object-oriented programming concepts, and basic libraries. Students will build small applications, learn about Java development tools, and understand best practices in coding and debugging.',
  },
  {
    title: 'C#',
    id: 5,
    fee: 600,
    image: '/images/logos/csharp-original.svg',
    duration: '1 Week',
    category: 'short',
    description:
      'A C# course equips learners with the knowledge to develop applications using the .NET framework. The course covers C# syntax, object-oriented principles, and Windows Forms development. Participants will create simple applications and understand how to use Visual Studio for efficient coding and debugging.',
  },
  {
    title: 'Python',
    id: 6,
    fee: 600,
    image: '/images/logos/python-original.svg',
    duration: '1 Week',
    category: 'short',
    description:
      'A Python course introduces learners to one of the most versatile and widely-used programming languages. The course covers basic syntax, data types, and control structures, enabling students to write simple scripts and programs. Participants will also learn about functions, modules, and packages, which help organize and reuse code. The course includes hands-on projects and exercises to solidify understanding and practical skills.',
  },
];
