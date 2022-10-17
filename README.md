# ISSUE TRACKING SYSTEM

## Task

Create an issue tracking system.

## Build Specifications

Users fill out a form to add issues. Fields include: description, status (open or closed), and assignee. You may add other fields, too.
Issues are stored with restdb.io using its REST API.
The home route (/) displays all issues.
The user can filter these by status and/or assignee.
Include a button on each open issue for changing status to closed.
Include a link on each issue to a details page for that issue (using the ID in the URL).
At the details page, the user can view and edit an issue. At least status and assignee can be changed.
Add a header component that always shows the current number and percentage of open issues.
(Optional) Deploy your final version with surge.sh or another hosting provider. Don't forget to handle URL rewrites for the routes.

## Additional Specifications

At minimum, you must use a separate component for displaying each individual issue in the list.

## Extended challenges:

- Add form validation.
- Use a UI library such as Material UI.
- Add administration for a list of possible assignees
- Add a route that shows issues assigned to a particular person (the person's name or id is in the URL).
