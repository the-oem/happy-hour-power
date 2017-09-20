# Happy Hour Power

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Current Build Status

[![CircleCI](https://circleci.com/gh/the-oem/happy-hour-power/tree/master.svg?style=svg)](https://circleci.com/gh/the-oem/happy-hour-power/tree/master)

### Prerequisites & Installation

This application is broken up into two distinct pieces, the server and the client. In order to get this running locally, you need to install dependencies for both the client and the server.

* Clone this repo
```
git clone git@github.com:the-oem/happy-hour-power.git
```

* Server Dependencies (_From the root directory of the project_)
```
npm install
```

* Client Dependencies (_From the root directory of the project_)
```
cd react-ui
npm install
```

## Running the Application

_Running the front end application:_

From the root of the project...
```
cd react-ui
npm start
```

_Running the server back-end application:_

From the root of the project...
```
npm start
```

## Running the tests

There are two distinct test suites for this application, one for the front-end and one for the back-end.

_Running the front end tests:_

From the root of the project...
```
cd react-ui
npm test
```

_Running the server back-end tests:_

From the root of the project...
```
npm test
```

## Deployment

This application is currently configured with [CircleCI], and automated [Heroku](https://www.heroku.com/) deployments from the master branch. The production URL of the application can be found at [https://happyhourpower.herokuapp.com/](https://happyhourpower.herokuapp.com/).

## Built With

#### Front-End Application
_Created from a base clone of [this repo](https://github.com/mars/heroku-cra-node)._
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [Redux](http://redux.js.org/) - a predictable state container for JavaScript apps

#### Back-End Application
* [NodeJS](https://nodejs.org/en/) - JavaScript runtime
* [ExpressJS](https://expressjs.com/) - a minimal and flexible Node.js web application used to build the server endpoints
* [KNEX](http://knexjs.org/) - a "batteries included" SQL query builder for Postgres

## Contributing

TODO: Add a CONTRIBUTING.md file for future contributors.

## Versioning

The API is currently version 1. Future versioning strategies/tools will be documented here.

## API Usage
Explanation coming

*Success 200/201 Responses:*

When data is returned from a successful API request, the data will be formatted in a
```
{
  data: [<returned data>]
}
```

*Failure 404 Responses:*
```
{
  data: {
    message: <error message (string format)>,
  }
}
```
*Failure 500 Responses:*
```
{
  error: <error object returned from server>,
}
```

---

## Endpoints

#### Authentication
- **[<code>POST</code> /api/v1/auth]()** +

#### Location Resources

- **[<code>GET</code> /api/v1/locations]()** +
- **[<code>GET</code> /api/v1/locations/:id]()** +
- **[<code>POST</code> /api/v1/locations]()** +
- **[<code>DELETE</code> /v1/locations/:id]()** +

#### Happy Hour Resources

- **[<code>GET</code> /v1/locations/:id/happyhours]()** +
- **[<code>POST</code> /v1/happyhours]()** +
- **[<code>PUT</code> /v1/happyhours/:id]()** +
- **[<code>DELETE</code> /v1/happyhours/:id]()** +

#### LocationType Resources

- **[<code>GET</code> /v1/locationtypes]()** +
- **[<code>POST</code> /v1/locationtypes]()** +
- **[<code>PUT</code> /v1/locationtypes/:id]()** +
- **[<code>DELETE</code> /v1/locationtypes/:id]()** +

## Authors

* **Jason Collins** - [GitHub](https://github.com/the-oem)
* **Cole Worsley** - [GitHub](https://github.com/coleworsley)
* **Justyna Field** - [GitHub](https://github.com/JustynaField)
* **Daniel Bucket** - [GitHub](https://github.com/danielbucket)

See also the list of [contributors](https://github.com/the-oem/happy-hour-power/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
