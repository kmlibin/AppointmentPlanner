# Appointment Planner
## Codecademy React Course Project

This is a quick app that allows for two things - on one screen you can create a list of contacts, on another screen you can create and add appointments. You can access the contact list in the appointment page. 

### Languages / Tools

React, JavaScript, CSS, HTML, JSX

### Project Intention

This was a quick project to help students understand how to use Functional Components, and to help them practice passing props and state. 
    

### What I learned / Challenges

Parts of this project were difficult more because I wasn't sure what Codecademy wanted the project/page to look like - if the directions are unclear, it can be difficult to make what they want. As I kept going through the brief, it became clear enough that, through tweaks, I understood what they wanted. 

I did have to go through and add key props to some of the mapped items, and I went back and destructured some of the props instead of defining each one within the component. I kept both ways, though, so I could have examples of both. 

I learned a different way of handling and updating state than I was previously used to - normally, I would update state in the component in which the state was created, but Codecademy had us pass the state setters as props. This allowed us to set state in other components, which I actually found a bit more difficult to keep track of. To me, seems cleaner to create a function in the non-stateful component that passes the information up (via a function passed as a prop) to the stateful component. Then, the update continues to happen in the stateful component. I appreciate this is a personal preference, particularly since you're still sending a function as a prop. 