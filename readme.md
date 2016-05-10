# React Training Material

1. Bootstrapping a JavaScript application

   Modern workflows often incorporate different build tools, that automate
   things like preprocessing and hot reloading. It's no secret that JavaScript
   tooling seems to induce headache in most folks, since the tools can change
   rapidly and update at a rapid pace. There is, however, wisdom in striding
   for simplicity in the toolchain, which is why something like **browserify**
   can be good for learning the ropes. Things like **webpack** offer much more
   but are a bit more harder to learn.

   - [browserify](http://browserify.org/)
     - Very "unix" in the way that it does one thing well. However this means
       that we must find additional solutions for things like CSS and such.
   - [webpack](https://webpack.github.io/)
     - Usage with something like [kotatsu](https://github.com/Yomguithereal/kotatsu)
       is recommended, since webpack can be a reasonably large beast to tackle
       initially.

2. Building ReactJS applications

   It's important to base your application around the idea of one-way flow of
   data. Make sure to keep in mind that the application should  **always** be
   just a function of the state. Building modern web apps is littered with
   functional programming paradigms, so you should be prepared to tackle those
   head on.

   - [react](http://facebook.github.io/react/docs/getting-started.html)
   - [redux](http://redux.js.org/)
     - **Do** read through the [motivation](http://redux.js.org/docs/introduction/Motivation.html)

   Do note that this only a part of the application stack, having **react** and
   **redux** only solves the problem with application state and rendering it.
   You will (usually) need additional libraries for making http requests in a
   sane manner (don't use `XMLHTTPRequest` directly), libraries for managing
   and formatting numbers and dates, and most likely you'll end up needing some
   sort of a *router* for your front end application.

   - [fetch](https://github.com/github/fetch)
     - Note that this will eventually be supported by browsers straight off the
       bat without installing anything. It's per spec!
   - [moment](http://momentjs.com/)
   - [numeral](http://numeraljs.com/)
   - [react-router-redux](https://github.com/reactjs/react-router-redux)

3. Testing Redux applications

   We'll want to test the application since we're not savages. From personal
   experience i've found testing the components themselves as a reasonably non-
   productive. Much more important (and bug-prone) is the state and mutation
   of the application.

   To focus your testing on that, you'll probably want some sort of a *runner*
   for the tests that can generate nice reports. Next up there are also some
   good to have utilities for testing the stores.

   - [nock](https://github.com/node-nock/nock)
   - [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)

4. Publishing JavaScript applications

   Minify the code. Create separate tasks for building the source and keeping
   tabs on it while you hack away. Usually you'll want to end up with something
   like:

   - `npm run build`
   - `npm run watch`

5. Links and articles:

   - [r/javascript]()
   - [awesome-react](https://github.com/enaqx/awesome-react)
   - [awesome-redux](https://github.com/xgrommx/awesome-redux)