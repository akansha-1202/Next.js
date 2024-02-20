# CSS

![Alt text](./public/Styling.png)

1. global.css ==> 
        external file for css which we have to import in root file(_app.js) in which we can write any css it will accessible anywhere in all pages

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
    <h1 style = {{color : "red",}}>Heading</h1>
    ```

