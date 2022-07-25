# Reto Tecnico
## Story/Assignment
In this challenge a project applying key concepts of object oriented programming was developed.
Regarding an article, It is asked to:

- Discover the types of spacecraft and their characteristics
- Have a method which allows the creation and classification of the spacecrafts and a mechanism to
make simple and advanced queries.

The following is the article that should be read for the challenge
https://moaramore.com/2016/05/14/clasificacion-de-las-naves-espaciales

## Analysis
### Summary

#### Physical characteristics

- Speed reached by the ship
- Thrust systems

Clasification
1. Launch Ships: Self propelled ship, useful when launching different types of load to space
Characteristics:

- Fuel Type
- Power
- Capacity
- Weight

2. Unmanned Ships
Characteristics:

- Fuel type
- Speed
- Thrust
- Weight
- Destination


3. Manned Ships
Characteristics:

- Fuel Type
- Weight
- Person amount
- Use

#### Generic attributes:

- Name
- Spaceship description
- Fuel Type

#### Specialized attributes:

1. Launch Ship:

- Capacity
- Power

2. Unmanned Ship

- Speed
- Thrust
- Destination

3. Manned Ship

- Person amount
- Use


## Architectural decisions
### microservices architecture
Why:

- Modularity.
- Easy to change.
- Easy to support.
- Teams can be formed and specialized in each microservice.
- Different programming languages can be used.
- An interface can be defined for each component. For this project, a REST API was created to manage the Back-End calls.

Note: To make sure the Microservices are up and running, a "Health" Endpoint was created, which constantly verifies weather the Microservice is alive.

### Data Base

a MongoDB cloud was chosen thanks to its non-relational property. Since the entity "Space ship" has different attributes across the board, 
a non-relational Data Base makes for an easy and flexible design.


### Front-End with Angular

Angular CLI: 14.1.0
Node: 14.15.0
Package Manager: npm 6.14.8

- There is previous knowledge on the use of Angular
- Generic components can be created for further use
- Reactive Programming can be used
- MVC architecture, allows easy integration with the Back-end, which has a similar architecture.

### Docker containers
Easy App installation. App can be run in any OS.


## POC:
This POC shall simulate the user ui interaction allowing it to create spacescrafts using
defined characteristics. Futhermore, users are presented with a platform on which they can find
out about other types of spacecrafts.
This POC use microservices architecture. This approach allows better scalability
and becomes language and technology agnostic.


## Architecture
The system is composed of three components:

### Back-end Nodejs and Express
npm 6.14.8
node 14.15.0
express: 4.18.1
Rest API that implements the following services:

Common ENDPOINT:
* GET localhost:3000/health (Test Controller to check services)

Manned Ships ENDPOINT:
* GET localhost:3000/manned-ship-list (List all Manned ships in database)
* POST localhost:3000/new-manned-ship (Creates new Manned ship in database)
* GET localhost:3000/manned-ship/:mannedshipid (Read existing Manned ship by ID)
* PUT localhost:3000/manned-ship/:mannedshipid (Update existing Manned ship by ID)
* DELETE localhost:3000/manned-ship/:mannedshipid (Delete existing Manned ship by ID)

Unmanned Ships ENDPOINT:
* GET localhost:3000/unmanned-ship-list (List all Unmanned ships in database)
* POST localhost:3000/new-unmanned-ship (Creates new Unmanned ship in database)
* GET localhost:3000/unmanned-ship/:unmannedshipid (Read existing Unmanned ship by ID)
* PUT localhost:3000/unmanned-ship/:unmannedshipid (Update existing Unmanned ship by ID)
* DELETE localhost:3000/unmanned-ship/:unmannedshipid (Delete existing Unmanned ship by ID)

Launch Ships ENDPOINT:
* GET localhost:3000/ship-launch-list (List all Launch ships in database)
* POST localhost:3000/new-ship-launch (Creates new Launch ship in database)
* GET localhost:3000/ship-launch/:shiplaunchid (Read existing Launch ship by ID)
* PUT localhost:3000/ship-launch/:shiplaunchid (Update existing Launch ship by ID)
* DELETE localhost:3000/ship-launch/:shiplaunchid (Delete existing Launch ship by ID)


located: Back-end

After Installation, this service is available on Port: 3000

### Frontend
Web application that allows the user in a graphical interface to search and create
spacecrafts

located: space-ship

After Installation, this service is available on Port: 4200

### Database MongoDB

located: AWS

```
-----------------------------------------------------------------------------
|                                                                           |
|                      Frontend (space-ship) (:4200)                        |  
|                                                                           |
-----------------------------------------------------------------------------

-----------------------------------------------------------------------------
|                                                                           |
|                              Back-end (:3000)                             |
|                                                                           |   
-----------------------------------------------------------------------------

-----------------------------------------------------------------------------
|                                                                           |
|                              MongoDB Cloud                                |
|                                                                           |  
-----------------------------------------------------------------------------
```

## Installation
### Requirements
- Docker

## Steps
1. Clone project
```
git clone https://github.com/willserna/Reto-Tecnico
```
2. Go to the project path using a Terminal

3. Run
```
docker-compose build
```
4. Run
```
docker-compose up
```
5. When the installation is finished, the Back-end will be available on port 3000 and the WebInterface on port 4200.

6. Please open your browser and type in the url 
```
localhost:4200
```

## License
ISC
