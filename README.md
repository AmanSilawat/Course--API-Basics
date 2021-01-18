# Course--API-Basics

## API (Application Programming Interface)

Reference: [freeCodeCamp.org](https://www.youtube.com/watch?v=GZvSYJDk-us&list=PLWKjhJtqVAblfum5WiQblKPwIbqYXkDoC&index=4)

API is the acronym for **Application Programming Interface**, which is a software intermediary that allows two applications to talk to each other. 
An API is not a database. It is an access point to an app that can access a database.
some devices use api like: radio, music play, robot, drone and much more.

Each programing language use many API but **Web Api** is most popular.

### API in different language

#### Uppar case API


In **JavaScript**
```js
'string'.toUpperCase(); // STRING
```

In **Python**
```js
'string'.upper(); // STRING
```

In **PHP**
```js
strtoupper('string'); // STRING
```

In **C#**
```js
'string'.ToUpper(); // STRING
```

In **Java**
```js
'string'.toUpperCase(); // STRING
```

In **Ruby**
```js
'string'.upcase(); // STRING
```

All language some low-level bit math on each character

## Remote API 
remotely controls the system like robot, t.v., paly online music.
bidirectional data streaming.

Remote APIs are designed to interact through a communications network. “remote,” we mean that the resources being manipulated by the API which outside the computer making the request. most APIs are designed based on web standards.

## How to work API

A client hit a url(Universal Resources Locator) and browser make a request for you. Along with URI (Universal Resources Identifier). It also specified a particular HTTP verb. this time browser make a GET verb, mean this request only will be receive data. this request transfer to the server and server read, make a response a and send back to the client.

HTTP is a stateless protocol. once that request and receives a response.
HTTP verb post mean submitting a form or posting data to the server.

### First way this to transfer data
In URL after the question mark
```
http://www.google.com/?
```

### Second way this to transfer data
This type is a specific key value pairs, called headers. both request and responses have a header.
most populaer header is  "language" and "Type-Content"


### REST
REST (Representational State transfer) APIs meet the REST architecture style constrains are consider to be RESTfull

#### RESTfull structure
Some requirement in RESTfull api

:heavy_check_mark: Client-Server Architecture
- client is request ot the server


:heavy_check_mark: Statelessness
- We aren't requiring any prior knowledge about the client

:heavy_check_mark: Layered System
- API is calling another api

:heavy_check_mark: Cache ability
- require writing some code, accessing through headers(maybe)
