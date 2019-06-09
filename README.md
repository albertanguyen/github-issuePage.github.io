# CoderSchool FTW - *Github Issue Page*

Created with :blue_heart: by **6 Idiots**
<a href="https://github.com/Nguyephi">Philip</a>, <a href="https://github.com/daivnguyen1991">Dai</a>, <a href="https://github.com/BoomBoomRay">Ray</a>, <a href="https://github.com/huynhtehoa">Hoa</a>, <a href="https://github.com/SteelHeart112">Harold</a>, <a href="https://github.com/albertanguyen">Anh</a>

## Description

![Gif Walkthrough](github-issue-gif.gif)

## Required User Stories

THE USER IS ABLE TO

- [x] Enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format owner/repo-name, e.g. facebook/react.
- [x] See a proper error message if the repository does not exist.
- [x] See the following information for each issue:
  - Issue Title
  - Number of the issue
  - Owner of the Issue
  - Owner Avatar
  - How long ago the issue was created in a human-friendly format (e.g. 2 days ago)
  - Body of the Issue
  - Label - note the color as returned by the API.
  - State of Issue (Open/Closed).
- [x] See multiple pages of results, by clicking a pagination control.
- [x] See the body of the issue rendered in markdown.
- [x] Create a new issue via a modal for the repository, by clicking on a "new issue" button. Clicking on this button will pop open a modal that asks for the requisite fields.
- [x] Create the issue (for example, not supplying all required parameters) if there is an error , there should be a nice error message to.

## Optional User Stories

THE USER CAN

- [] See more details (including comments!) in a modal that's opened by clicking on the title of the issue.
- [] Add a comment via a textarea at the bottom of the page, upon opening this modal.
- [] Can close the issue, upon opening the modal. If the person does not have the appropriate access to close an issue, sees a nicely formatted error message.
- [] See reactions attached to each comment (Reactions API).
- [] Add reactions to a comment (API documentation).

- [] Type in either https://github.com/facebook/react or facebook/react, BOTH should work: Input Fuzzy Matching

- [] Use React Router (link) to navigate to different URL issues/:issueId to display the full issue, instead of using Modal to show issue. Have the Back button to go back to the previous page (from the individual issue page).

## Time Spent and Lessons Learned

Time spent: **xxx** hours spent in total.

[//]: # (Describe any challenges encountered while building the app.)

## License

    Copyright [2019] [The contributors herein]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
