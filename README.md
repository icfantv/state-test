# The State Problem

Most, if not all, examples of how to do things in React are isolated to a single and/or simple use case (Todo List, anyone?). This falls apart quickly because most of us are writing enterprise applications and it's not always clear how to extrapolate those simple examples for use at the enterprise level. Application-level state management is one example.

In this application, the application state is made available via the context API at the root component level. Console logging has been added to the function components to indicate when they've been rendered. Because the state is updated when the `incrementValue` action is dispatched, the crazy leaf node is rerendered even though the slice of state it cares about hasn't changed.
