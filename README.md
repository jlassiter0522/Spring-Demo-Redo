# Spring-Demo-Redo
A second attempt at the Spring Class Demo created for web development
props -> variables passed from parent to child
    body componenet pass variables to carousel component
    children cannot pass props to parents
    child can control parents variables through a function passed from parent to child.

state -> components own variables
    ability to create and change limited to the parent.
    can pass the value of the variable to child as a prop
        functional component -> react hooks (newer)
        class component -> this.setState()
Any changes to props or state will cause a re-render.