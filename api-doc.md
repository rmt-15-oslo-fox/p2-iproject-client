# My Assets App Server
My Assets App is an application to manage your assets. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## List Endpoint Companies

- `Get /companies`
- `Post /companies`
- `Get /companies/:id`
- `Put /companies/:id`
- `Delete /companies/:id`


## RESTful endpoints
### GET /companies

> Get all companies 

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 4,
        "name": "Asbun Company",
        "companyLogo": "Logo Garuda",
        "location": "Jl Mawar",
        "email": "asbun@gmail.com",
        "description": "Pt Asbun adalah pt baru banget",
        "createdAt": "2021-08-30T22:38:12.889Z",
        "updatedAt": "2021-08-30T22:38:12.889Z"
    },
    {
        "id": 5,
        "name": "Yaka Company",
        "companyLogo": "Awan",
        "location": "Jl Butet",
        "email": "yakacorp@gmail.com",
        "description": "Pt Yaka adalah pt yaka",
        "createdAt": "2021-08-30T22:39:35.283Z",
        "updatedAt": "2021-08-30T22:39:35.283Z"
    }
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---
### POST /companies

> Create new companies

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "name": "<string>",
    "companyLogo": "<string>",
    "location": "<string>",
    "emial": "<string>",
    "description": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 6,
    "name": "Yaka Company",
    "companyLogo": "Awan",
    "location": "Jl Butet",
    "email": "yakacorp@gmail.com",
    "description": "Pt Yaka adalah pt yaka",
    "updatedAt": "2021-08-31T00:25:03.155Z",
    "createdAt": "2021-08-31T00:25:03.155Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Name cant be empty"
}
OR
{
    "message": "Company Logo cant be empty"
}
OR
{
    "message": "Location cant be empty"
}
OR
{
    "message": "Email cant be empty"
}
OR
{
    "message": "Description cant be empty"
}
```

### GET /companies/:id

> Find companies

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "id": 5,
    "name": "Yaka Company",
    "companyLogo": "Awan",
    "location": "Jl Butet",
    "email": "yakacorp@gmail.com",
    "description": "Pt Yaka adalah pt yaka",
    "createdAt": "2021-08-30T22:39:35.283Z",
    "updatedAt": "2021-08-30T22:39:35.283Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Company with id 10 not found"
}
```

### PUT /companies/:id

> Update companies

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "name": "<string>",
    "companyLogo": "<string>",
    "location": "<string>",
    "emial": "<string>",
    "description": "<string>"
}
```

_Response (201 - Created)_
```
{
    {
    "id": 4,
    "name": "Asbun Company",
    "companyLogo": "Logo Garuda",
    "location": "Jl Mawar",
    "email": "asbun@gmail.com",
    "description": "Pt Asbun adalah pt baru nih",
    "createdAt": "2021-08-30T22:38:12.889Z",
    "updatedAt": "2021-08-31T00:31:31.624Z"
    }
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Company with id 10 not found"
}
```

### DELETE /companies/:id

> Delete companies

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "message": "Company id 4 has been deleted"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Company with id 10 not found"
}
```

&nbsp;

## List Endpoint Jobs

- `Get /jobs`
- `Post /jobs`
- `Get /jobs/:id`
- `Put /jobs/:id`
- `Delete /jobs/:id`


## RESTful endpoints
### GET /jobs

> Get all jobs 

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 8,
        "title": "Accounting",
        "description": "Pekerjaan yang Sangat Rumit",
        "imgUrl": "Picture.jpg",
        "CompanyId": 5,
        "AuthorId": 2,
        "jobType": "Programmer",
        "createdAt": "2021-08-31T00:40:34.843Z",
        "updatedAt": "2021-08-31T00:40:34.843Z"
    },
    {
        "id": 9,
        "title": "Accounting",
        "description": "Pekerjaan yang Sangat Rumit",
        "imgUrl": "Picture.jpg",
        "CompanyId": 5,
        "AuthorId": 2,
        "jobType": "Programmer",
        "createdAt": "2021-08-31T00:44:28.882Z",
        "updatedAt": "2021-08-31T00:44:28.882Z"
    }
]

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---
### POST /jobs

> Create new jobs

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "title": "<string>",
    "description": "<string>",
    "imgUrl": "<string>",
    "CompanyId": "<number>",
    "AuthorId": "<number>",
    "jobType": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 8,
    "title": "Accounting",
    "description": "Pekerjaan yang Sangat Rumit",
    "imgUrl": "Picture.jpg",
    "CompanyId": 5,
    "AuthorId": 2,
    "jobType": "Programmer",
    "updatedAt": "2021-08-31T00:40:34.843Z",
    "createdAt": "2021-08-31T00:40:34.843Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Title cant be empty"
}
OR
{
    "message": "Description Logo cant be empty"
}
OR
{
    "message": "Img Url cant be empty"
}
OR
{
    "message": "Company Id cant be empty"
}
OR
{
    "message": "Author Id cant be empty"
}
OR
{
    "message": "Job Type cant be empty"
}
```

### GET /jobs/:id

> Find jobs

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "id": 8,
    "title": "Accounting",
    "description": "Pekerjaan yang Sangat Rumit",
    "imgUrl": "Picture.jpg",
    "CompanyId": 5,
    "AuthorId": 2,
    "jobType": "Programmer",
    "createdAt": "2021-08-31T00:40:34.843Z",
    "updatedAt": "2021-08-31T00:40:34.843Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Job with id 10 not found"
}
```

### PUT /jobs/:id

> Update jobs

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "title": "<string>",
    "description": "<string>",
    "imgUrl": "<string>",
    "CompanyId": "<number>",
    "AuthorId": "<number>",
    "jobType": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 9,
    "title": "Accounting",
    "description": "Pekerjaan yang Sangat Rumit",
    "imgUrl": "Picture.jpg",
    "CompanyId": 5,
    "AuthorId": 2,
    "jobType": "Programmer",
    "updatedAt": "2021-08-31T00:44:28.882Z",
    "createdAt": "2021-08-31T00:44:28.882Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Job with id 10 not found"
}
```

### DELETE /jobs/:id

> Delete jobs

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "message": "Job id 4 has been deleted"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Job with id 10 not found"
}
```

&nbsp;

## List Endpoint Users

- `Get /users`
- `Post /users`
- `Get /users/:id`
- `Put /users/:id`
- `Delete /users/:id`


## RESTful endpoints
### GET /users

> Get all users 

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "name": "Frengki Alfiansyah",
        "email": "frengki@gmail.com",
        "password": "123456",
        "addres": "Jl Kemayoran",
        "createdAt": "2021-08-30T23:37:57.558Z",
        "updatedAt": "2021-08-30T23:53:44.737Z"
    },
    {
        "id": 4,
        "name": "Umamah",
        "email": "umamah@gmail.com",
        "password": "123456",
        "addres": "Jl Kemerdekaan",
        "createdAt": "2021-08-30T23:55:26.075Z",
        "updatedAt": "2021-08-30T23:55:26.075Z"
    },
    {
        "id": 2,
        "name": "Frengki Alfiansyah",
        "email": "frengki@gmail.com",
        "password": "123456",
        "addres": "Jl Kemayoran",
        "createdAt": "2021-08-30T23:41:16.778Z",
        "updatedAt": "2021-08-30T23:55:46.913Z"
    },
    {
        "id": 5,
        "name": "Umamah",
        "email": "umamah@gmail.com",
        "password": "123456",
        "addres": "Jl Kemerdekaan",
        "createdAt": "2021-08-31T00:40:17.750Z",
        "updatedAt": "2021-08-31T00:40:17.750Z"
    }
    ...
]

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```
---
### POST /users

> Create new users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "name": "<string>",
    "email": "<string>",
    "password": "<string>",
    "addres": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 6,
    "name": "Amirah",
    "email": "amirah@gmail.com",
    "password": "123456",
    "addres": "Jl Perjuangan",
    "updatedAt": "2021-08-31T00:49:43.968Z",
    "createdAt": "2021-08-31T00:49:43.968Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Name cant be empty"
}
OR
{
    "message": "Email Logo cant be empty"
}
OR
{
    "message": "Password cant be empty"
}
OR
{
    "message": "Addres Id cant be empty"
}
```

### GET /users/:id

> Find users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "id": 2,
    "name": "Frengki Alfiansyah",
    "email": "frengki@gmail.com",
    "password": "123456",
    "addres": "Jl Kemayoran",
    "createdAt": "2021-08-30T23:41:16.778Z",
    "updatedAt": "2021-08-30T23:55:46.913Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "User with id 10 not found"
}
```

### PUT /users/:id

> Update users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    "name": "<string>",
    "email": "<string>",
    "password": "<string>",
    "addres": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 2,
    "name": "Frengki Alfiansyah",
    "email": "frengki@gmail.com",
    "password": "123456",
    "addres": "Jl Kemayoran",
    "createdAt": "2021-08-30T23:41:16.778Z",
    "updatedAt": "2021-08-31T00:52:46.005Z"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "User with id 10 not found"
}
```

### DELETE /users/:id

> Delete users

_Request Header_
```
{
    not needed
}
```

_Request Body_
```
{
    not needed
}
```

_Response (201 - Created)_
```
{
    "message": "User id 4 has been deleted"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "User with id 10 not found"
}
```