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
            name: "Michael Wagner", description: "The hungry one",
            avatar_url: 'http://www.filepicker.io/api/file/OdTJiHAUS8WGMZ07lMSF/convert?crop=0,0,45,45')


Post.create(
  author_id: 1,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18739119558_o.png",
  body: "The crawshank redemption!"
)

Post.create(
  author_id: 2,
  image_url: "http://s5.postimg.org/3vf1na1d3/foodie_18306094303_o.png",
  body: "Oakland pho"
)

Post.create(
  author_id: 4,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18739124598_o.png",
  body: "Silverlake tacos"
)

Post.create(
  author_id: 2,
  image_url: "http://s5.postimg.org/4c9g173vr/foodie_18921465412_o.png",
  body: "OC pho"
)

Post.create(
  author_id: 1,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18304223554_o.png",
  body: "Less tricks, more food please..."
)

Post.create(
  author_id: 3,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18306112443_o.png",
  body: "Spicy Denver pho"
)

Post.create(
  author_id: 3,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18304195134_o.png",
  body: "Hot wings!"
)

Post.create(
  author_id: 4,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18306117713_o.png",
  body: "The famous, flying falafel"
)

Post.create(
  author_id: 1,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18739085910_o.png",
  body: "Bibimbop"
)

Post.create(
  author_id: 3,
  image_url: "http://s5.postimg.org/etqb5gpyf/foodie_18306090073_o.png",
  body: "Quick and easy rice bowl"
)

Post.create(
  author_id: 2,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18739091628_o.png",
  body: "Home cooked Merriweather meal"
)

Post.create(
  author_id: 1,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18739103108_o.png",
  body: "Alaskan Salmon Bake!"
)

Post.create(
  author_id: 4,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18304203474_o.png",
  body: "LA style street tacos"
)

Post.create(
  author_id: 3,
  image_url: "http://s5.postimg.org/o1n4zwmef/foodie_18740579729_o.png",
  body: "Miss Saigon in SOMA"
)

Post.create(
  author_id: 2,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18740577929_o.png",
  body: "Peruvian chicken"
)

Post.create(
  author_id: 1,
  image_url: "http://s5.postimg.org/klzm43ejr/foodie_18900510846_o.png",
  body: "Brisket and beans"
)

Post.create(
  author_id: 1,
  image_url: "http://s5.postimg.org/hy5kfzw4n/foodie_18740576959_o.png",
  body: "Can never have enough LA Street tacos!"
)

Post.create(
  author_id: 4,
  image_url: "http://s5.postimg.org/xnlaty2xz/foodie_18926757495_o.png",
  body: "Berkeley backyard BBQ"
)

Post.create(
  author_id: 3,
  image_url: "http://s5.postimg.org/xxstdahk7/foodie_18926754825_o.png",
  body: "Pho at the Hall in SOMA"
)

Post.create(
  author_id: 1,
  image_url: "http://s5.postimg.org/oej4jtu1z/foodie_18926768215_o.png",
  body: "Lambert's cafe MO - Home of the flying rolls"
)

Post.create(
  author_id: 2,
  image_url: "http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18926779845_o.png",
  body: "Bibimbob truck!"
)

Post.create(
  author_id: 3,
  image_url: 'http://i821.photobucket.com/albums/zz133/michaelwagner/foodie_18921493572_o.png',
  body: 'Virginia Beach Fish tacos'
)

Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/1',
  body: 'Soupy.'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/2',
  body: 'Beef stir fry.'
)
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/3',
  body: 'Yes, please.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/4',
  body: 'Sushi para llevar.'
)
Post.create(
  author_id: 4,
  image_url: 'http://lorempixel.com/400/400/food/5',
  body: 'No tray, no play.'
)
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/6',
  body: 'Veggie stir fry.'
)
Post.create(
  author_id: 4,
  image_url: 'http://lorempixel.com/400/400/food/7',
  body: 'Dinner rolls are sooo good.'
)
Post.create(
  author_id: 3,
  image_url: 'http://lorempixel.com/400/400/food/8',
  body: 'Soy paper sushi.'
)
Post.create(
  author_id: 1,
  image_url: 'http://lorempixel.com/400/400/food/9',
  body: 'Big ol burger'
)
Post.create(
  author_id: 2,
  image_url: 'http://lorempixel.com/400/400/food/10',
  body: 'CARBS!'
)
