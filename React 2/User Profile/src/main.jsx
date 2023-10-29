import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserProfile from './App.jsx'
import img1 from './images/profilePic.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UserProfile
     name="Md Meraj Ansari" 
     avtar_url= {img1} 
     title="FullStack developer" 
     skillsets={[
          {icon: "./logo/html.svg", description: "HTML"},
          {icon: "./logo/css.svg", description: "CSS"},
          {icon: "./logo/bootstrap.svg", description: "Bootstrap"},
          {icon: "./logo/tailwind-css.svg", description: "TailwindCSS"},
          {icon: "./logo/javascript.svg", description: "Javascript"},
          {icon: "./logo/react.svg", description: "React"},
          {icon: "./logo/react-native.svg", description: "ReactNative"},
          {icon: "./logo/mongodb.svg", description: "MongoDB"},
          {icon: "./logo/next-js.svg", description: "NextJS"},
          {icon: "./logo/nodejs.svg", description: "NodeJS"},
          {icon: "./logo/python.svg", description: "Python"},
       
        ]}
       
     /> 
     
  </React.StrictMode>,
)
