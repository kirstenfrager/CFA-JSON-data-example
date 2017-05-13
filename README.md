# JSON Data Set

### Challenge:
1. Create a json formatted dataset that describes something
2. Use the express generator to create an node/express app
3. Create a root route which will render an ejs template with your data
4. Create another route which sends the data in json format

## Getting Started

### Installations:

Create a new folder and create your package.json 

```
$ npm init
```

Install express, path and ejs to be used in your project.

```
$ npm install express --save
$ npm install path --save
$ napm install ejs --save
```

### Outcome:

- Created a JSON file called "data.json" about Europe and Asia countries with their capitals.
- Created a 'views' folder, holding "index.ejs" file which rendered a for loop of a list of countries with the capitals (views/index.ejs).
- Created an additional route "/json" which rendered the data in json format. This was also tested in postman.

