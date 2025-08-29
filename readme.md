1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

document.getElementById() selects one element by its unique ID and returns a single element object or null if not found.

document.getElementsByClassName() selects all elements with having same class name and returns a live HTMLCollection.

document.querySelector() selects the first elements that matches a CSS selector and returns a single element object or null if not found.

document.querySelectorAll() selects all elements that match CSS selector and returns a static NodeList.

2. How do you create and insert a new element into the DOM?

Answer:

Firstly I access the element where I'm about to insert the new elements.

Secondly I create a new empty element.

Then I create structure of the new elements.

Lastly I append the newly created elements to the existing element.

3. What is Event Bubbling and how does it work?

Answer:

Event bubbling is the process where an event starts at the target element and then propagates upward through its ancestors in the DOM tree, all the way up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event Delegation is a technique where I can add an event listener to a parent element, and let event bubbling handle events that happen on its child elements.

Instead of attaching listeners to many individual elements, I can put one listener on a common ancestor and detect which child triggered the event.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:

preventDefault() Prevents the default browser action for an event. It does not stop bubbling.

stopPropagation() stops the event from bubbling (or capturing) up the DOM tree.
