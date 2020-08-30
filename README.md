[![Build Status](https://travis-ci.org/bellogo/tech-companies.svg?branch=develop)](https://travis-ci.org/bellogo/tech-companies)

[![Coverage Status](https://coveralls.io/repos/github/bellogo/tech-companies/badge.svg?branch=develop)](https://coveralls.io/github/bellogo/tech-companies?branch=develop)

# Tech Companies

Tech companies is a node js app that lists information about tech companies in nigeria. CRUD methods have been created to do the following:

- Get all companies
- Add a company 
- Get one company
- Edit company details
- Delete a company


## Built With

- vanila Javscript,
- NodeJs with express,
- postgreSQL.

## Live Demo

[Live Demo Link](https://companies-ng.herokuapp.com/)

### Usage
1. Add company: POST: https://companies-ng.herokuapp.com/companies

{\
    name: "Aladin's hub",\
    location: "Wadiya",\
    ceo: "Admiral General Aladin"\
}

2. Get all companies: GET: https://companies-ng.herokuapp.com/companies

3. Get one company: GET: https://companies-ng.herokuapp.com/company/:id

4. Update company: PUT:  https://companies-ng.herokuapp.com/company/:id

5. Delete a company: DELETE:  https://companies-ng.herokuapp.com/company/:id

### Prerequisites

- To run this project locally, you will need to have `npm` already installed locally
- run `npm install` to install all the dependencies of the project
- A browser Installed
- A REST API client(like POSTMAN) Installed
- An Internet connection to download the dependencies.

## Tested With

- Mocha
- Chai

## Authors

👤 **Author**

- Github: [@bellogo](https://github.com/bellogo)
- Linkedin: [Ufuoma Ogodo](https://ng.linkedin.com/in/ufuoma-ogodo)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!


## Show your support

Give a ⭐️ if you like this project!