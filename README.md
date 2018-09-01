# LIBRARY MANAGEMENT SYSTEM


### Overview 

It's a web portal that manages books and users. Users based on their authentication , they are determined as Admins and regular users. Library Admins can login and manage books and users.  Library users can register and login to the site. Users can view all available books and check-in and check-out books as well. 

---

### Technologies Used

* HTML5
* JavaScript
* CSS3
* Node.js
* Express.js
* PostgreSQL

---

### MVP

* Add,View, Modify and Delete Books
* Add,View, Modify and Delete Users
* User Registration
* User Login
* User Check-in Books
* User Check-out Books
* Search Books by Title

---
### Stretch Goals

* Add books using Google API
* Library Report

---

### Challenge and Solution
1. Google API have a limitation of hits per day. Instead of using Google API for each request using ISBN, we stored all books related info( Title, Author, Description,Book Images) in PostgreSQL.

2. Google API  supports only Hard-cover books which is a set back for us. So manually add books for non-Hard-cover books.

3. Books Description for too big to display , and solved my viewing this in tool-tip. 

---

<img width="1438" alt="screen shot 2018-07-10 at 9 55 06 am" src="https://user-images.githubusercontent.com/38846724/42518434-743c6702-8427-11e8-8f7c-7eca2f91e736.png">
<img width="1439" alt="screen shot 2018-07-10 at 9 57 45 am" src="https://user-images.githubusercontent.com/38846724/42518623-e341a52c-8427-11e8-8eaf-7801aa8906e1.png">
<img width="1412" alt="screen shot 2018-07-10 at 12 40 16 pm" src="https://user-images.githubusercontent.com/38846724/42527559-9ff543d4-843e-11e8-87b1-a2a3bc89f0b9.png">

<img width="1433" alt="screen shot 2018-07-10 at 12 44 44 pm" src="https://user-images.githubusercontent.com/38846724/42527745-211506c0-843f-11e8-8d63-35957802b71c.png">
