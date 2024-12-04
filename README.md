### 1. Methods to create a vite folder and there installation
```bash
Method 1 :- 
step1 - npm create vite@latest folder_name
step2 - have to select react in it 
step3 - have to select javascript  in it
step4 - then cd folder name
step5 - npm i
step6 - npm run dev
# This  all folders will create in the folder you  install react
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```
Method 2 :- 
```bash
```



### 2.Describing all the Folders  in the vite folder
```bash
1.index.html :- This is the most important top-level file Vite injects your code into this file so that your browser can run it.
2.node_modules :- It will create an enviroment and the given liberarys that are requires to run the code with in are there in the node_modules . it is simplely important to run the code  
4.src :- source code have multiply javascript(jsx) file which are install while installing vite and where we'll spend most of our time beacuse all code we have to write within src.
5.pacakge-lock.json :- it is created through npm and It will store meta data of the project wile in the form of script in which we have no acces to change there commands
6.package.json :-it is created through vite and It will store meta data of the project wile in the form of script from line number(6-11) in which we have acces to change there commands in it  
7.public :- it containes static files that will be serverd directly to your browser without being processed by Vite's build tooling.
```
### 3. Exploring first react component <App/>
```bash
In a React application, the <App /> component typically serves as the root component. It is the starting point of the React component tree and is usually rendered into the root HTML element of the page.
```
![Alt text](https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterprogramming.pub%2Fcreating-a-simple-app-with-react-js-f6aa88998952&psig=AOvVaw0ORFAM3VX3bZZFkymzo9ZB&ust=1733378073627000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKivydm2jYoDFQAAAAAdAAAAABAE)


### For writing html css and java script (all the syntax)
```bash
immport './index.html'  (for importing an CSS)
import image1 from "./Assest/image1.png";  (for genrating an image from assests folder)
function Krutgaya()  {
    return (
        <>

        </>
    )
}
export default Krutagya
```bash


### The changes we should do in the html
```bash
1. <img src={namge1} alt="" />
2. insted of class we have to write className
3. 
```

### The content in the main.jsx file
