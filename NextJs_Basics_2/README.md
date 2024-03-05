# CSS

![Alt text](./public/Styling.png)

1. global.css ==>
   external file for css which we have to import in root file(\_app.js) in which we can write any css it will accessible anywhere in all pages

2. pageName.module.css ==>
   About.module.css
   Used for writing css for specific component and we also have to import in that component

   ```javascript
       import styles from "../styles/about.module.css
       <nav className = {styles.header}></nav>

       if there is multiple classes then there is a approach to use them

       <nav className = {`${styles.header} ${styles.background}`}></nav>
   ```

3. For inline Css ==>

   ```javascript
   <h1 style={{ color: "red" }}>Heading</h1>
   ```

# Components

![Alt text](./public/MiscSection.png)

## Head Component

```javascript
import Head from 'next/head'

function IndexPage() {
  return (
    <div>
        <Head>
            <title>HomePage</title>
            <meta charset="UTF-8">
            <meta name="description" content="Free Web tutorials">
            <meta name="keywords" content="HTML, CSS, JavaScript, Next.js">
            <meta name="author" content="Akansha Verma">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </Head>
        <p>Hello world!</p>
    </div>
)}

export default IndexPage
```

- You can also add title for each page by simple importing head component in your page.

## Image Component

- Provide optimation of image by reducing the size of high resolution image
- Provide lazy loading as with lazy loading we won't download images that are not required at that time
- Ability to render a "placeholder" image while the actual image is still loading

## Static HTML Export

It has so many limitations like we can't use <Image/> Component, SSR and fallback always be false.

![Alt text](./public/StaticHTMLExport.png)

## Redirects

- Redirects allow you to redirect an incoming request path to a different destination path.

- To use redirects you can use the redirects key in next.config.js:

```javascript
redirects: async () => {
  return [
    {
      source: "/profile",
      destination: "/about",
      permanent: false,
    },
  ];
};
```

`redirects` is an async function that expects an array to be returned holding objects with `source`, `destination`, and `permanent` properties:

- `source` is the incoming request path pattern.
- `destination` is the path you want to route to.
- `permanent` true or false - if true will use the 308 status code which instructs clients/search engines to cache the redirect forever, if false will use the 307 status code which is temporary and is not cached.

## Environment Variables

### Runtime Environment Variables

Next.js can support both build time and runtime environment variables.

By default, environment variables are only available on the server. To expose an environment variable to the browser, it must be prefixed with `NEXT_PUBLIC_`. However, these public environment variables will be inlined into the JavaScript bundle during next build.

```javascript
DB_HOST = localhost;
DB_USER = myuser;
DB_PASS = mypassword;
NEXT_PUBLIC_PASSWORD = hello;
```

### Default Environment Variables

- In general only one .env.local file is needed. However, sometimes you might want to add some defaults for the development (next dev) or production (next start) environment.

- Next.js allows you to set defaults in `.env`(all environments), `.env.development` (development environment), and `.env.production` (production environment).

- `.env.local` always overrides the defaults set.

`
`Good to know:` .env, .env.development, and .env.production files should be included in your repository as they define defaults. .env*.local should be added to .gitignore, as those files are intended to be ignored. .env.local is where secrets can be stored.
`

### Test Environment Variables

Apart from development and production environments, there is a 3rd option available: test. In the same way you can set defaults for development or production environments, you can do the same with a `.env.test` file for the testing environment (though this one is not as common as the previous two). Next.js will not load environment variables from `.env.development` or `.env.production` in the testing environment.


This one is useful when running tests with tools like `jest` or `cypress` where you need to set specific environment vars only for testing purposes. Test default values will be loaded if `NODE_ENV` is set to `test`, though you usually don't need to do this manually as testing tools will address it for you.


![Alt text](./public/SummartOfMisc.png)
