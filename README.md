# Project Week 2 Website: João Viana and Antonio Gargaro

<img width="250px" src="https://i.ibb.co/0YJZPKG/Screenshot-2019-09-19-at-16-37-42.png" alt="Screenshot-2019-09-19-at-16-05-45" border="0">

Presentation: 
  
URL: https://facxbeamery.github.io/project-week-2/

## Motivation
The purpose of this project was to utilise the [PokeAPI](https://pokeapi.co/docs/v2.html/#info) to retrieve main information about Pokémon. 

## User Journey

As a user I want to find out more about Pokémon, their types, and also the first 4 moves they get at level 1.

# Functionality

## Search By ID

User input triggers the API call to the [PokeAPI](https://pokeapi.co/docs/v2.html/#info) and sends back the information of the pokemon with the ID = their input.

<img src="https://i.ibb.co/8xqjm2R/Screenshot-2019-09-19-at-16-06-01.png" alt="Screenshot-2019-09-19-at-16-06-01" border="0">

## Get random Pokémon by type 

On load, the website does GET requests to the API that ensure that 200 Pokemon get stored in the global variable allPokemons. 
The API did NOT provide with an endpoint that would return all pokemons of X type. So 200 pokemons' data are accessible from the array and then filtered by type to return a random one. 

<img src="https://i.ibb.co/hVcH4qx/Screenshot-2019-09-19-at-16-06-15.png" alt="Screenshot-2019-09-19-at-16-06-15" border="0">

## 'Fun' daily challenge

Making sure that the multiplication's operands is equal to 800 -> returns 2 pokemons' info with the IDs equal to each of the operands.

<img src="https://i.ibb.co/bJHc8D3/Screenshot-2019-09-19-at-16-05-45.png" alt="Screenshot-2019-09-19-at-16-05-45" border="0">


# User Stories

## APIs

* As a developer I want our form submissions to trigger one or more API calls so that I can demonstrate the use of a xhr request 

* As a user I want to input data so I can interact with the page

* As a user I want to be notified of an error so I understand why something might not be working as I expected.

* As a user I want to know that I'm providing the correct information in the correct way so that I can complete the form successfully

XMLHttpRequests used to get data from the [PokeAPI](https://pokeapi.co/docs/v2.html/#info); The API calls are triggered by user input; the user sees a warning if the API call returns a 'bad error'. the user ALSO sees an error if their input was on the wrong format. 

## Code Quality
* As a developer I need my code to be legible and understandable **so that** any developer who looks at the code now or in the future can understand what it does

Naming conventions are followed; BEM is used; ES6 Syntax; Code's clean and organised

## Testing

* As a developer, I need to have unit tests in place for my logic functions, so that I can be sure they work correctly

* As a developer, I need to use pure functions for my logic, so that I do not mutate any state in my application

Tape used for unit testing. nyc for test coverage

## Deployment

* As a developer, I need to run my web app from a local HTTP server, so that I can make changes and understand how they will affect my app


# How to run it locally

- clone the repo
- run the following: 
  `npm install `

# Existing Bugs

Nav links aren't 'tabbable' on Firefox. Still trying to figure how to fix it.
