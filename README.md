# The Movie Database API v3

## Additional Features
- error handling (middleware)
- logging

## API Endpoints
### GET /movies
Search for movies based on the title.  (Max 10)
#### Query Parameters
| Name    | Required | Type   | Description                 |
|---------|----------|--------|-----------------------------|
| `title` | true     | string | Pass a text query to search |
#### Response
```
[
    {
        "id": 87101,
        "date": "2015-06-23",
        "name": "Terminator Genisys",
        "rating": 107.295
    },
    {
        "id": 534,
        "date": "2009-05-20",
        "name": "Terminator Salvation",
        "rating": 92.33
    }
]
```
---
### GET /movies/:id
Search for a movie based on the id.
#### Path Parameters
| Name  | Required | Type    | Description                                  |
|-------|----------|---------|----------------------------------------------|
| `id`  | true     | integer | Pass an id to search for an associated movie |
#### Response
```
{
    "id": 87101,
    "date": "2015-06-23",
    "name": "Terminator Genisys",
    "rating": 107.295
}
```
---
### GET /shows
Search for TV shows based on the name.  (Max 10)
#### Query Parameters
| Name   | Required | Type   | Description                 |
|--------|----------|--------|-----------------------------|
| `name` | true     | string | Pass a text query to search |
#### Response
```
[
    {
        "id": 433,
        "date": "2008-01-13",
        "name": "Terminator: The Sarah Connor Chronicles",
        "rating": 32.726
    },
    {
        "id": 56150,
        "date": "2009-05-18",
        "name": "Terminator Salvation: The Machinima Series",
        "rating": 3.492
    }
]
```
---
### GET /shows/:id
Search for a TV show based on the id.
#### Path Parameters
| Name  | Required | Type    | Description                                    |
|-------|----------|---------|------------------------------------------------|
| `id`  | true     | integer | Pass an id to search for an associated TV show |
#### Response
```
{
    "id": 433,
    "date": "2008-01-13",
    "name": "Terminator: The Sarah Connor Chronicles",
    "rating": 32.726
}
```