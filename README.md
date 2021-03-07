# Tech Companies

[![Build Status](https://travis-ci.org/bellogo/tech-companies.svg?branch=develop)](https://travis-ci.org/bellogo/tech-companies)
[![Coverage Status](https://coveralls.io/repos/github/bellogo/tech-companies/badge.svg?branch=develop)](https://coveralls.io/github/bellogo/tech-companies?branch=develop)

<hr>

Tech companies is a simple nodejs app that lists information about tech companies in nigeria. CRUD methods have been created to do the following:

- Get all companies
- Add a company 
- Get one company
- Edit company details
- Delete a company

<hr>

Built With

- nodejs, express, postgress & hosted on heroku

<hr>

Trying to get started?

- Make sure to have node, git installed on your computer
- Clone this project using this link - <https://github.com/bellogo/tech-companies.git>
- Create a .env file and add all the variables as shown in the sample
- Run `npm install` to install the modules
- Run `npm run dev` to start the server
- Run `npm test` to run the test suite

<hr>

These are the HTTP request methods used in this project:

| Method   | Action                                                      |
|---       | ---                                                         |
| `GET`    | This method is used to *get* a resource                     |
| `POST`   | This method is used to *create* a resource or *send* data   |
| `PUT`  | This method is used to *update* a resource                  |
| `DELETE` | This method is used to *delete* a resource                  |

<hr>

These are the HTTP response codes used in this project:

| Status Codes | Indication                                                                                            |
|   ---        | ---                                                                                                   |
|  `200`       | This `OK` status code indicates that a request has succeeded                                          |
|  `201`       | This `created` status code indicates that a resource has been created                                 |
|  `400`       | This `bad request error` status code indicates that the request sent to the server is incorrect       |
|  `404`       | This `not found` status code indicates that the request/resource asked for can not be found           |

<hr>

The routes featured in this project:

| API routes(url)       | Method   | Description                                         |
| ---                   | ---      | ---                                                 |
| /         | `GET`   |  Homepage                    |
| /api/companies   | `GET`   | To get all companies                  |
| /api/company/:id    | `GET` | To get a company                   |
| /api/company    | `POST` | To add a company                   |
| /api/company/:id | `PUT`    | To update a company                       |
| /api/company/:id     | `DELETE`    | To delete a company                     |


<hr>

Usage:
- To add company make a `POST` request to: `https://companies-ng.herokuapp.com/company`
  
```

{
    name: "Aladin's hub",
    location: "Wadiya",
    ceo: "Admiral General Aladin"
}

```

- To get all companies make a `GET` request to `https://companies-ng.herokuapp.com/companies`

- To get a company make a `GET` request to `https://companies-ng.herokuapp.com/company/:id`

- To update a company make a `PUT` request to `https://companies-ng.herokuapp.com/company/:id`

- To delete a company make a `DELETE` request to `https://companies-ng.herokuapp.com/company/:id`

<hr>

Tested With

- Mocha
- Chai

<hr>


👤 **Author**

- Github: [@bellogo](https://github.com/bellogo)
- Linkedin: [Ufuoma Ogodo](https://ng.linkedin.com/in/ufuoma-ogodo)

<hr>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

<hr>

## Show your support

Give a ⭐️ if you like this project!
