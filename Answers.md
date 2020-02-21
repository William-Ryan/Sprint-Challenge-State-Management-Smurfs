1. What problem does the context API help solve?

A: Context API helps distribute state throughout our application without the need for "prop drilling" through the use of the createContext and useContext hooks.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A:
actions - Actions are functions that are created by Action Creators to set type and payload with the intent to feed data to the state within our designated reducers.

reducers - Reducers bank our initial state and our Action cases, which we use to modify and distribute state throughout our application.

Store - Store is the bank for our Reducers, through the Provider hook we can store our individual reducers and make them globally available within our application.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Application State is a global state that is distributed through use of "Stores", Component state is local to the component it is stored within.

Application State is good for states that need to be distributed throughout multiple components in our application, where as Component State is good when the state we are using is only important for a single component it is correspondent to.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A: Redux-Thunk is a type of middleWare that allows our action-creators to store multiple actions within a single function, usually for axios calls.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

A: My favorite State Managment system we've learned in this unit would be Redux, because I find that it has a broader range of uses while also feeling like it has a more efficent and cleaner coding.