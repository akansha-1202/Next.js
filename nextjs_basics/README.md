# NEXT.JS BASICS

It is not possible to build a full feature rich app for production using REACT bcz it is used for building UI. You also have to make decisions on other features of apps like authentication, routing, styling.
But Next.js is a React framework for building full-stack web applications. It uses a package that React use for building UI. It is loaded with so many features that simplifies the process of building a react app fo production. There is no need to install additional packages. Next.js provides everything.

## FEATURES OF NEXT.JS

- File based routing
- Pre-rendering (Pre-rendered websites can have much better SEO scores. This is because pre-rendered websites generate the final HTML output for a page at build time.)
- API routes
- Supporting for CSS module
- Authentication
- Dev and Prod build System

## Routing in Next.js

- Route with Pages (localhost:3000/blog)
- Nested routes (localhost:3000/blog/blog1)
- Dynamic routes (localhost:3000/product/id) [params].js and useRouter()
- Nested Dynamic Routes (localhost:3000/product/id/review/id) [params].js and useRouter()
- Catch-all routes (localhost:3000/docs/feature1/concept1)[...params].js and useRouter()
- Navigate from the UI using Link component
- Programmatically navigating b/w pagaes using useRouter()

### Link

In Next.js, the `Link` component is used for client-side navigation between pages in your application. The `replace` attribute in the Link component allows you to replace the current URL in the history stack instead of adding a new entry to the history stack when the link is clicked.

The `replace` attribute is useful in situations where you want to perform navigation but don't want the user to be able to navigate back to the previous page using the browser's back button. This can be helpful for certain workflows or scenarios where you don't want the user to revisit a particular page after navigating away from it.

Some common cases where you might use the replace attribute:

- Redirects after Form Submission: After a form submission, you might want to redirect the user to a new page. Using replace ensures that if the user hits the back button, they won't navigate back to the form submission page, which could potentially cause issues with resubmission.

- Authentication Flows: In authentication flows, you might redirect users after successful login or logout. Using replace can help maintain cleaner navigation behavior, preventing users from accidentally navigating back to sensitive pages after logging out.

### Difference b/w using Link component and useRouter() Hook:

In Next.js, both Link and useRouter() are used for navigation, but they serve slightly different purposes and have different use cases.

`Link`

- The Link component is a built-in component provided by Next.js for `declarative` client-side navigation. It is used to navigate between pages in your Next.js application.
- It pre-fetches the linked page in the background, which helps in faster navigation and improves the user experience.

` import Link from 'next/link';

const MyComponent = () => (

  <Link href="/about">
    <a>About</a>
  </Link>
); `


`useRouter()`

- The useRouter() hook is provided by Next.js's next/router module. It gives you access to the router object, allowing you to programmatically navigate between pages, access route parameters, query parameters, etc.
- Unlike Link, which is a declarative way of navigating, useRouter() is a `imperatively` way of navigating used when navigate based on some logic, such as form submissions, button clicks, or user authentication.

` import { useRouter } from 'next/router';

const MyComponent = () => {
const router = useRouter();

const handleClick = () => {
router.push('/about');
};

return <button onClick={handleClick}>Go to About</button>;
}; `



