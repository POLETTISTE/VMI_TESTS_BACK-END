# VMI TESTS

## How to run the API locally :

### Clone the projet:

```
git clone https://github.com/POLETTISTE/VMI_TESTS_BACK-END.git
```

### Go to the project directory :

```
cd BACK-END
```

### Install project dependancies :

```
npm install
```

### Run the API :

```
npm run dev
```

### Access to the API :

### Availables routes :

`http://localhost:3000/test` get method to list all fields inside table user.

`http://localhost:3000/import-csv` get method to import csv data inside table mysql 'user'.

### Others files :

'userSchema.sql' : describes sql Schema

'write_csv.html' : html including script JS to create a CSV file of 1 000 000 fields with fields 'uuid', 'email' and 'nom'

'mockData.csv' : CSV file created through 'write_csv.html'
