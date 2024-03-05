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

