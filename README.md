# Project Week 2 Website: João Viana and Antonio Gargaro

<img width="250px" src="https://i.ibb.co/0YJZPKG/Screenshot-2019-09-19-at-16-37-42.png" alt="Screenshot-2019-09-19-at-16-05-45" border="0">

Presentation: 
  
URL: https://facxbeamery.github.io/project-week-2/

## Motivation
The purpose of this project was to utilise the PokeAPI to retrieve main information about Pokémon. 

## User Journey

As a user I want to find out more about Pokémon, their types, and also the first 4 moves they get at level 1.

# Functionality

## Search By ID

<img src="https://i.ibb.co/8xqjm2R/Screenshot-2019-09-19-at-16-06-01.png" alt="Screenshot-2019-09-19-at-16-06-01" border="0">

## Get random Pokémon by type 
<img src="https://i.ibb.co/hVcH4qx/Screenshot-2019-09-19-at-16-06-15.png" alt="Screenshot-2019-09-19-at-16-06-15" border="0">

## 'Fun' daily challenge

<img src="https://i.ibb.co/bJHc8D3/Screenshot-2019-09-19-at-16-05-45.png" alt="Screenshot-2019-09-19-at-16-05-45" border="0">


# User Stories

## APIs
* **input submission triggers one or more API calls using xhr**
    As a developer I want our form submissions to trigger one or more API calls so that I can demonstrate the use of a fetch request.
    - [x] code includes at least one fetch request
    - [x] form submission triggers a fetch request
    - [x] event listener in javascript listens for form submission

* **result is displayed on the page**
    As a user I want to input data so I can interact with the page
    - [x] when I submit my input, I can see something displayed on the page
    - [x] the result displayed on the page must change depending on my input


* **if the API call fails, I can see an error message on the page**
    As a user I want to be notified of an error so I understand why something might not be working as I expected.
    - [x] I can see why there was an error
    - [x] I can see a plain english description of what happened
    - [x] I know what to do to correct the error

* **if my input is not valid, I can see an error message on the page**
    As a user I want to know that I'm providing the correct information in the correct way so that I can complete the form successfully
    - [x] If my input is in the correct format, I can see positive feedback
    - [x] I can see an example of correct input in the placeholder text
    - [x] If my input is not valid, I can see a plain english description of how to correct it


## Code Quality
As a developer...
* I need my code to be legible and understandable **so that** any developer who looks at the code now or in the future can understand what it does
  - [x] code is self documenting
  - [x] code is in our agreed style
  - [x] camelCase is used in Javascript
  - [x] CSS uses kebab-case or BEM
  - [x] there are no linter errors
  - [x] no extraneous code (e.g. console.logs)

## Testing

As a developer, I need to have unit tests in place for my logic functions, so that I can be sure they work correctly
- [x] each logic function has a related test
- [x] all tests are passing

As a developer, I need to use pure functions for my logic, so that I do not mutate any state in my application
- [x] logic functions are pure
- [x] state is not mutated

## Deployment

As a developer, I need to run my web app from a local HTTP server, so that I can make changes and understand how they will affect my app
- [x] My app runs from a Docker container
