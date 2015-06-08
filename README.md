# Foodiegram

[Heroku link][heroku]

[heroku]: http://foodiegram.herokuapp.com/

## Minimum Viable Product
Foodiegram is a clone of Instagram built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Sign in as a guest
- [ ] Upload pictures
- [ ] Edit pictures
- [ ] Create posts
- [ ] View own posts
- [ ] Subscribe to users
- [ ] View a feed of subscribed user posts
- [ ] Tag users
- [ ] Tag places
- [ ] Hashtag
- [ ] Search for posts by hashtag
- [ ] Search for posts by user

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
I will implement user authentication in Rails based on the practices learned at App Academy. By the end of this phase, users will be able to sign in/create accounts or sign in as a guest. I will be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Feeds and Posts (~2 days)
I will add API routes to serve feed and post data as JSON, then add Backbone models and collections that fetch data from those routes. I'll start by adding a `feed` route that uses the `current_user`'s `subscribed_blogs` association to serve a list of blog posts ordered chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts` collection fetches from the new route. Ultimately, this will be the page users see after logging in.


[Details][phase-two]

### Phase 3: Editing and Displaying Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll add Filepicker for the file uploads so that users can add images to their feed. Also, I will add pixlr so that users can edit a picture before uploading.

[Details][phase-three]

### Phase 4: User Profile Page (~1-2 days)
This page will serve as an index of all of the user's posts while also showing their name, description and avatar image.

[Details][phase-four]

### Phase 5: User Liking and Commenting (~1.5 days)
Users will be able to like/unlike posts as well as add comments by the end of this phase. These should be able to be accomplished from either the show or the feed page.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Pagination/infinite scroll
- [ ] Searching for Users and Posts
- [ ] Post author food rating
- [ ] Fancy photo editing
- [ ] Geotagging and maps
- [ ] Activity history (e.g. likes, taggings)
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
