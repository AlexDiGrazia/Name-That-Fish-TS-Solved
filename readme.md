# Name That Fish

In this assignment we will be building a guessing game called "Name That Fish" where you guess the type of fish of a picture with a `controlled form` in react.The name of the game here is to KEEP YOUR STATE CLEAN AND AS DERIVED AS POSSIBLE.

## Learning Objectives

In order to complete this assignment, a student should be able to...

- use controlled forms to create an interface for submitting data
- use `onChange` handlers to track input values
- use `onSubmit` handlers to make form submissions
- pass down state setters in order to change the state of a parent component
- choose where the data for an application should live based off of the one way data binding model that react provides

## Setup

To get this project setup, you should:

- Run `npm i` to install all dependencies
- Run `npm run dev` to run the project

## In order to pass this assignment you should

### Standard Requirements

- [ ] Setup eslint
- [ ] Pass all linting checks

- To check if linting passes, run `npm run lint`

- [ ] Format code with prettier
- [ ] State should not be duplicated
- [ ] Variables should be named logicially
- [ ] No unneccessary console logs
- [ ] No commented out blocks of code (Code comments are fine)
- [ ] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (NOT A ZIP FILE)

### Typescript Specific Requirements

- [ ] pass **ALL** typechecks
  - Check by running `npm run typecheck`
- [ ] DON'T USE `any`.... OR ELSE
- [ ] Keep your types clean and in a logical location
- [ ] Prop Types for components should be colocated with their components
- [ ] Shared types should live in a file that says `types` somewhere in it's name
  - [ ] example: `types.ts` should work fine
- [ ] Unshared types should live in the component they are used in

### Assignment Specific Requirements

- [ ] Get your code to function EXACTLY like [This Site](https://name-that-fish-deployed.vercel.app/)
- [ ] Keep state as CLEAN AS POSSIBLE
- [ ] Place `initialFishes` in the correct component
- [ ] Derive all pieces of state that can be derived
- [ ] Don't mutate state directly, only use a state setter
  - example: don't use .splice on an array that you are rendering
- [ ] Keep all constants (variables that do not change over time) outside of components
- [ ] Form must reset after submitting
- [ ] Page must NOT reload after submitting
- [ ] ClassApp Code and FunctionalApp Code should be treated as seperate apps as far as state goes
