# Schema Information

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
post_id     | integer    | not null, foreign key (references posts)
body        | string    |

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
feed_id     | integer   | not null, foreign key (references feed)
follower_id | integer   | not null, foreign key (references users)

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
image_url   | string    | not null
body        | text      |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
tag_id      | integer   | not null, foreign key (references tags)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
description     | string    |
name            | string    |
avatar_url      | string    |
