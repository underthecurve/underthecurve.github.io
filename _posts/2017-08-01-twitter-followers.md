---
layout: post
title:  'Finding my Twitter followers (by city) using R or Python'
date:   2017-08-02 00:00:00 -0700
categories: jekyll update
---

As a nerdy data person, I'm particularly happy when I can use nerdy data things to solve a real-life problem. Even if/especially when it's kind of hacky.

Here's one example: 

I recently moved to NYC from L.A. (more on that in a later post!). Luckily, lots of people I know live in NYC. But there are some people in NYC that I haven't kept in close touch with. Social media is great for reconnecting. **How do I find my friends in NYC using Facebook and Twitter?**

Surprisingly/unsurprisingly, even though it's easy to use Facebook and Twitter on a daily basis, it's not so straightforward to get data on relationships, *even when it's about yourself*. Creepy factor aside, you should be able to access your own information!

## My Facebook friends who live in NYC

It was actually pretty easy to find my facebook friends who live in NYC. All I had to do was type "my friends who live in New York" in the search bar.

<img src = "/images/facebook.png" width="380" height="120"/>

The result is a list of friends I can browse through. Of course, I had to know to type that particular phrase into the search bar, which is why I'd say it's not super intuitive; to make a Harry Potter reference (can't resist), it's like having to know you need to say the phrase "I solemnly swear that I am up to no good" in order to active the [Marauder's Map](https://www.pottermore.com/writing-by-jk-rowling/the-marauders-map).

## My Twitter followers who live in NYC

Twitter is even more annoying. Its [advanced search](https://twitter.com/search-advanced) feature appears to let you search tweets by location, but not people. 

The fact that I can't easily get a list of my Twitter followers is particularly frustrating, especially since it's *my own data.* Even the helpful-sounding article, ["Accessing your Twitter data"](https://support.twitter.com/articles/20172679), was no great help (apparently my Twitter data doesn't include my followers).

I asked a few friends (thanks, [@dhmontgomery](https://twitter.com/dhmontgomery)!) and it turns out, there is a programmatic solution to this.  

First, I had to get a Twitter API Key by creating an "application" (I called mine 'testing') [here](https://apps.twitter.com/app/new). 

In R, the `twitteR` package makes it easy to get Twitter followers to a data table. After entering your API Key, access token etc. it just take a few lines of code:

```
setup_twitter_oauth(api_key, api_secret, access_token, access_secret)

user <- getUser("christinezhang")
user_follower_IDs <- user$getFollowers(retryOnRateLimit=180)
user_followers <- rbindlist(lapply(user_follower_IDs, as.data.frame)) 
```
This gets me a table of my followers (a row per follower ) and a bunch of columns, the most relevant of which are `name`, `screenName`, and `location`:

<img src = "/images/twitteR.png"/>

For various reasons, I've been trying to do more programming in Python lately, so I was motivated to check out a Python solution. The `tweepy` package (ISWYDT with the name) does a similar thing:

```
twitter_handle = 'christinezhang'

auth = tweepy.auth.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_secret)
api = tweepy.API(auth)

f = csv.writer(open('followers_python.csv', 'wb'))

f.writerow(["screenName", "name", "location", "description"])

users = tweepy.Cursor(api.followers, screen_name=twitter_handle, count = 200).items()

for u in users:
    screenName = u.screen_name
    name = u.name
    location = u.location

    f.writerow([screenName, name, location])
```

I thought it would be easier to save the relevant columns directly to a .csv file. When I open it, this is what I get:

<img src = "/images/tweepy.png"/>

Shoutout to [@HarlanH](https://twitter.com/HarlanH), who ran [Data Community DC](http://www.datacommunitydc.org/), and is now in New York! He also mentioned to me that there is a simpler, non-programmatic solution to all this—[Tweepsmap](https://tweepsmap.com/). Go figure I have to do things the hard way. 

## Things I didn't mention / haven't figured out

- If people haven't written a location, the `location` field will be blank. Not much to do about that.

- Cleaning the data: [@HarlanH](https://twitter.com/HarlanH) wrote "Brooklyn, NY", [@victorR2](https://twitter.com/victorr2) wrote "New York, NY", and [@paperswelovenyc](https://twitter.com/paperswelovenyc) wrote "NYC" as their location (click on the profile links to see what I mean). This can get a little messy, and I'd have to specify that formy purposes, I'd like to classify all of these as NYC.

- Geocoding: one way to solve the above issue is by geocoding (getting the lat/long coordinates) of each location and maybe putting them on a map. [This post](http://lucaspuente.github.io/notes/2016/04/05/Mapping-Twitter-Followers) by Lucas Puente does it with R and the Google Maps API.

- Rate limits: Twitter's API is [rate limited](https://dev.twitter.com/rest/public/rate-limiting), meaning each access token only gets you 15 calls every 15 minutes, or 180 calls every 15 minutes. I don't have that many followers (1,565 at this time of writing), so it's not a huge deal for me. But this would be a problem for someone with, say 3000 or a million followers. I think R's `retryOnRateLimit=180` in `twitteR` is a way to mitigate this (by spacing calls out in 15 minute windows if the rate limit is reached), but I didn't figure out how to do it in Python with `tweepy`.

Full R and Python code on [GitHub](https://github.com/underthecurve/twitter-followers) — tell me what I got wrong.
