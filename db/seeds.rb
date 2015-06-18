# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest_user', password: 'password',
            description: "A welcome guest", name: 'The Chef',
            avatar_url: 'http://www.hubertkeller.com/about/images/Hubert-Keller-Top-Chef-Masters.jpg')
User.create(username: 'gordonramsay', password: 'gordongordon',
            description: "Bloody hell!", name: 'Gordon Ramsey',
            avatar_url: 'http://i.forbesimg.com/media/lists/people/gordon-ramsay_416x416.jpg')
User.create(username: 'rachaelray', password: 'rachaelray',
            description: "Good, simple, food.", name: 'Rachael Ray',
            avatar_url: 'http://g-ecx.images-amazon.com/images/G/01/kitchen/aplusdiy/B0056CA77S/11500_CookwareLifestyle300px.jpg')
User.create(username: 'mike', password: 'mikemike',
            name: "Michael Wagner", description: "That guy",
            avatar_url: 'http://www.filepicker.io/api/file/OdTJiHAUS8WGMZ07lMSF/convert?crop=0,0,45,45')

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
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/8',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/9',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 4,
  image_url: 'http://lorempixel.com/400/400/food/10',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 4,
  image_url: 'http://lorempixel.com/400/400/food/11',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/12',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/13',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/14',
  body: 'Lorem ipsum dolor sit amet, at aperiam persecuti reprimique vel.'
)
