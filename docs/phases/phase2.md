# Phase 2: Viewing Feeds and Posts

## Rails
### Models

### Controllers
Api::PostsController (create, destroy, index, show, update)

### Views
* feed/show.json.jbuilder
* posts/feed.json.jbuilder

## Backbone
### Models
* Feed (parses nested `posts` association)
* Post

### Collections
* Posts

### Views
* PostForm
* FeedShow (composite view, contains PostsIndex subview)
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem
* PostShow

## Gems/Libraries
