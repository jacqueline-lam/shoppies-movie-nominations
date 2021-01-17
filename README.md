# The Shoppies
#### Shopify Frontend Developer Intern Challenge - Summer 2021

## Overview
This is a web app created to help manage movie nominations for Shoppies. It is built using React and [Material UI](https://material-ui.com/), a React UI Framework, to implement a responsive UI design.

## Contents
- [Features](#features)
- [Design Thinking and Decisions](#design-thinking-and-decisions)
- [Other Features and Ideas](#other-features-and-ideas)
- [Technologies Implemented](#technologies-implemented)
- [Installation](#Installation-and-deployment)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Attributions](#attributions)
- [Contact](#contact)

## :pushpin: Features
#### 1. Search Movie from OMDB's API
* Data fetched from OMDB API (movies only)
* Real Time Search: any updates to the search term will update the result list
#### 2. Browse Movie Results
*  Results are displayed in a grid and each movie card includes a movie title, year of release, and nominate button
* Pagination buttons are included both on top and bottom of the page
#### 3. Add/ Remove Nominations
* User can add a movie from search results to the nomination list — by clicking the nominate button under the movie
* User will only be able to nominate up to 5 movies — the nominate button will be disabled once 5 nominations have been made
* User can view nominated movies by clicking the fixed button on the top right corner of the screen
* Remove button will remove the selected movie from the nomination list
#### 5. Notifications
* A banner will be displayed when the user has 5 nominations

## :thought_balloon: Design Thinking and Decisions
#### Fixed Button: Quick Access to Nomination List
* Fixed button gives easy access to nomination list while adding search results to the list
* By clicking away, the user can return to movie results instantly
#### Real-Time Search
* By implementing real-time search, the user can modify their search term quickly based on error message (e.g. "too many results" or "movie not found")
#### Responsive Design
* Material UI Components and relative sizing units are used to make the app more responsive
#### Accessibility
* Tooltips added to icons
* Distinct Call to Actions
  * Capitalized and contrasting color buttons
  * Nomination count is updated on the fixed button every time a new nomination is made
* `aria-label` added to buttons
* Alt text/ descriptions added to images
* Key information that is discernable at a glance
  * Straight forward instructions - "Nominate your favorite movies..."
  * Floating button to display nomination list

## :bulb: Other Features and Ideas for Improvements
* Animations
  * Loading GIF
  * Nominations complete confetti
  * Sliding action when a movie is removed from the nomination list
* Save nomination movies with `localStorage`
* Accessibility:
  * Improve feedback: add more descriptive labels
  * Improve color contrast: make sure text and icons follow the color contrast ratio recommendations and are legible against the background colors

## :computer: Technologies Implemented
1. React.js (`create-react-app`)
2. Material UI: React UI Framework
3. OMDB API Requests

## :arrow_down: Installation and Deployment
In the project directory, you can run:

`npm install && npm start`

This runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To deploy, run:

`npm run deploy`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/jacqueline-lam/shoppies-movie-nominations. Contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Authors
Jacqueline Lam - [@jacqueline-lam](https://github.com/jacqueline-lam/)

## License
The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct
Everyone interacting in the project’s codebases is expected to follow the [code of conduct](https://github.com/jacqueline-lam/shoppies-movie-nominations/blob/main/CODE_OF_CONDUCT.md).

## Attributions
* Logo designed based on icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## Contact
1.  :link: &nbsp; [jacqueline-lam.github.io/portfolio-app/](https://jacqueline-lam.github.io/portfolio-app/) <br>
2.  :mailbox_with_mail: &nbsp; jacqueline.karin.lam@gmail.com <br>
3.  :briefcase: &nbsp; [LinkedIn](https://www.linkedin.com/in/utkarsh-patadia-a291a7171/)
