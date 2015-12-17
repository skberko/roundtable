# Schema Information

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users)
image_url   | string    | 
created_at  | datetime  | not null
updated_at  | datetime  | not null

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | string    | not null
author_id   | integer   | not null, foreign key (references users)
body        | text      | not null
start_idx   | integer   | not null
end_idx     | integer   | not null
created_at  | datetime  | not null
updated_at  | datetime  | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
recipe_id   | integer   | not null, foreign key (references recipes)
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
