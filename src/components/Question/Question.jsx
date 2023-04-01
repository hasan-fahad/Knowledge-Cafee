import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <h2 className='question-title'>Question</h2>
            <div>
                <div>
                    <h2 className="question">1. What is the difference of props and state?</h2>
                    <p className="answer">props: props make a components reusable. props can be accessed by the child components. Props are immutable. Props allow you to pass data form one component to other components as an argument.</p>
                    <p className="answer">State: State cannot make components reusable. State cannot be accessed by child components. State holds information about the components. State changes can be asynchronous.</p>
                </div>
                <div>
                    <h2 className="question">2. How does useState work ?</h2>
                    <p className="answer">The useState hook uses a concept known as closures to manage state between function calls. When we call the useState hook, React creates a state object with the initial state value that we pass as an argument. This state object is stored internally by React and is associated with the component where the useState hook is used. React then returns an array with two elements: the current state value and a function that can be used to update the state value. </p>
                </div>
                <div>
                    <h2 className="question">3. Purpose of useEffect other than fetching data ?</h2>
                    <p className="answer">Updating the document title based on state or props.</p>
                    <p className="answer">Handling browser or network events.</p>
                    <p className="answer">Updating global state outside of React.</p>
                    <p className="answer">Animating component transitions.</p>
                    <p className="answer">Integrating with third-party libraries.</p>
                    <p className="answer">Updating the URL or navigating to a different page.</p>
                </div>
                <div>
                    <h2 className="question">4. How Does React work ?</h2>
                    <p className="answer">React is a JavaScript library used for building user interfaces. It uses a programming concept called components, which are like building blocks for the UI.When a user interacts with the UI, React tracks those interactions and updates the components accordingly. It does this by creating a virtual representation of the UI in memory, called the virtual DOM.The virtual DOM is like a lightweight copy of the actual DOM, but it's faster to update because it doesn't interact with the browser until it needs to. When changes are made to the virtual DOM, React figures out what changed and updates the actual DOM accordingly, but only for the parts that need to be changed.This makes React very efficient and fast, especially when compared to other methods of building UIs. Developers can also use React with other libraries and frameworks</p>
                </div>
            </div>
        </div>
    );
};

export default Question;