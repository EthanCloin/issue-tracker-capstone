# Live Site
Version 1 statically hosted at https://surge-issuetracker.surge.sh

<img src="https://drive.google.com/uc?export=view&id=19RTHlGHUoHbzYmbvAn2cKRz0Ye9oQGw7" />

# Contributing
## v2.0.0 (FastAPI backend)
Checkout the [backend repository](https://github.com/ethancloin/issue-tracker-backend) for instructions to run the server on your local machine.
You won't see any issues without the backend project running!

## v1.1.0 (Restdbio)
Contact me for an API Key which needs to be added to your `.env` file, without this you won't have access to the database. Reach out via Discord (Starved Spectre#8883)

# PROJECT HISTORY

## Version 1 (v1.0) :student:
Completed over the course of 3, 3hr class periods, with contribution from 3 students. 

While the UI design was underdeveloped in favor of implementing all requested features, this app presents popular features like Client-Side Routing, CRUD Operations, and utilizes a REST API. The web application is deployed via [Surge.sh](https://surge.sh/) as a static site!

> Checkout the v1.0.0 release to view this version, main has been updated to include a friendlier interface and a few new features!

This project allowed us to practice the React Basics gathered over our 4 week course, including managing Context and State via React Hooks, interacting with the URL via `searchParams()`, and passing Props from parent --> child components.

## Version 2 (v1.1)
IN PROGRESS!
on branch `main`

- Utilize component from the MaterialUI component library to improve the look and feel across all views
- Improve UX when navigating between views (home, add issue, and issue detail) 
- Extend Add Issue functionality
  - Create
  - Create and Add Another
  - Discard
- Extend filter functionality by adding searchbar to header and parsing to look for specific attributes

## Version 3 (v2.0)
IN PROGRESS! 
on branch `FastAPI-Dev`

- Implement backend server in Python with FastAPI framework
- Dockerize and host the project on a cloud service
