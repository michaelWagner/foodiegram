# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest_user', password: 'password', description: "A welcome guest")
User.create(username: 'mike', password: 'mikemike', name: "Michael Wagner", description: "That guy")

Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/1',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/2',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/3',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/4',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/5',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/6',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/7',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
