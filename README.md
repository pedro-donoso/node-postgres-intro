## Conection Nodejs with Postgresql

* Necesary

Download or Clone repositorie, in terminal:

`
npm i express pg nodemon
`

### PSQL

1. init PSQL with password: password

![psql](https://user-images.githubusercontent.com/68760595/152808549-83f9f3c5-c85c-4fba-8460-94693128cbbf.PNG)

### GET BOOKS

2. In folder src/index.js, activate function getBooks();

![getbooks](https://user-images.githubusercontent.com/68760595/152809513-b847f493-aeef-4d7b-b5eb-5e474af0ec24.PNG)

### TERMINAL

3. In terminal:

`
npm run dev
`

![respuesta](https://user-images.githubusercontent.com/68760595/152809877-852f7d71-fc5e-4091-992e-4394578727a7.PNG)

### INSERT USER

4. In folder src/index.js, comment function -> //getBooks();

![insert](https://user-images.githubusercontent.com/68760595/152813525-1abef3b3-2afa-4957-9ba4-5bbee9907c97.PNG)

### TERMINAL

5. In terminal:

`
npm run dev
`

![insertado](https://user-images.githubusercontent.com/68760595/152814271-986c3ad9-6b4c-4c81-80b4-f2e6c9ff4af3.PNG)

### PSQL

6. In PSQL, connect to library:
`
\c library
`

![library](https://user-images.githubusercontent.com/68760595/152814980-96321172-4132-4016-a86d-a41bab93d8ec.PNG)

7. List of Tables:

`
\dt 
`

![lista](https://user-images.githubusercontent.com/68760595/152815601-0da0f1a9-32b8-4ffc-ae1b-77f35931751f.PNG)

### LIBRARY

8. library=# select * from users;

![nuevo](https://user-images.githubusercontent.com/68760595/152819063-0c6d04e5-02b3-4d75-afae-42bd90de2a75.PNG)

### DELETE USER

9. Delete user, comment -> //instertUser();

![borrar](https://user-images.githubusercontent.com/68760595/152823337-963bafaa-0ee2-41f5-a243-62e639dbcc51.PNG)

### TERMINAL

10. In terminal:

`
npm run dev
`

![nodemon](https://user-images.githubusercontent.com/68760595/152824084-dfc1548a-8e52-4a05-a405-64bb986cef06.PNG)

### PSQL

11. in PSQL, select * from users;

![eliminado](https://user-images.githubusercontent.com/68760595/152824393-e11480f0-9a41-4dd1-842d-c5782cb42050.PNG)

### EDIT USER

12. editUser(), comment -> //deleteUser();

![edicion](https://user-images.githubusercontent.com/68760595/152828179-eaf196cc-8f37-497b-a2f8-48049c3b3875.PNG)

### TERMINAL

13. In terminal:

`
npm run dev
`

![editado](https://user-images.githubusercontent.com/68760595/152828613-58e200e6-60fa-4aa5-a0c4-764a1844ad6e.PNG)

### PSQL

14. in PSQL, select * from users;

![final](https://user-images.githubusercontent.com/68760595/152840711-b083daf7-dbcf-4557-a599-3e4e9174e8ac.PNG)









