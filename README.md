# PROJECT HISTORY

## Version 1 (v1.0) :student:
Completed over the course of 3, 3hr class periods, with contribution from 3 students. 
https://surge-issuetracker.surge.sh/ 

While the UI design was underdeveloped in favor of implementing all requested features, this app presents popular features like Client-Side Routing, CRUD Operations, and utilizes a REST API. The web application is deployed via [Surge.sh](https://surge.sh/) as a static site at the domain https://surge-issuetracker.surge.sh! 

This project allowed us to practice the React Basics gathered over our 4 week course, including managing Context and State via React Hooks, interacting with the URL via `searchParams()`, and passing Props from parent --> child components.

# PROJECT FUTURE

### Ideas for Future Versions :brain:
- [ ] Utilize a Component Library (MaterialUI) to design a friendlier UX
- [ ] Utilize a CSS Framework (Tailwind, Bootstrap)to design a friendlier UX
- [ ] Include User Authentication
- [ ] Update the Models to use custom Types in place of some strings
- [ ] Connect a different database (Firebase, Postgres, MySQL)

# ORIGINAL PROJECT DESCRIPTION
### Task 
Create an issue tracking system.

### Build Specifications
1. Users fill out a form to add issues. Fields include: description, status (open or closed), and assignee. You may add other fields, too.
2. Issues are stored with **restdb.io** using its REST API.
3. The **home** route (/) displays all issues.
    - The user can **filter** these by status and/or assignee.
    - Include a button on each open issue for *changing status* to closed.
    -  Include a link on each issue to a *details page* for that issue **(using the ID in the URL)**.
4. At the details page, the user can view and edit an issue. At least status and assignee can be changed.
5. Add a header component that always shows the current number and percentage of open issues.
*(Optional)* Deploy your final version with surge.sh or another hosting provider. Don't forget to handle URL rewrites for the routes.

### Additional Specifications
At minimum, you **must** use a separate component for displaying each individual issue in the list.

### Extended Challenges:
- Add form validation.
- Use a UI library such as Material UI.
- Add administration for a list of possible assignees
- Add a route that shows issues assigned to a particular person (the person's name or id is in the URL).






