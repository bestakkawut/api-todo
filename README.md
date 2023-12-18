## api-todo
candidate test

## API LISTS

### Get tasks ###
GET http://localhost:3000/todo/


### Get task with id ###
GET http://localhost:3000/todo/:id


### Create tasks ###
POST http://localhost:3000/todo/

Body JSON {
	"title": "Example",
	"description": "Example description"
}


### Update task ###
PUT http://localhost:3000/todo/:id

Body JSON {
	"title": "Example edited",
	"description": "description edited",
}


### Patch task ###
PATCH http://localhost:3000/todo/:id

Body JSON {
	"status": "success"
}


### Archive task ###
DELETE http://localhost:3000/todo/:id