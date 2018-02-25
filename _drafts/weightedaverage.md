---
layout: post
title:  'Weighted averages: an easy example'
date:   2017-08-01 00:00:00 -0700
categories: jekyll update
---

When summarizing data, the (raw) average, or mean, is probably the most common descriptive statistic. By contrast, the concept of a weighted average is less intuitive at first glance.

Here's an easy example of where a weighted average can come in handy.

Over the summer, I taught a series of classes on Data Cleaning and Visuzalization using R at Boston University's "Storytelling with Data" workshop.

During the data visualization class, I used WHO data on global life expectancy from 2000 to 2015. I decided to use the by-countries dataset, with a row for each country and year. Each country also had a WHO-designated region:

<img src = "/images/lifeexpectancy.png"/>

What if I wanted to know the average life expectancy (both sexes) for each region in 2015?

## Raw averages: the wrong way to do it

It might be tempting to just group the 2015 data by region, and calculate the raw averages. For example, there are 11 countries in the WHO-designated South-East Asia region:

```
                                 country `both sexes`
                                   <chr>        <dbl>
 1                            Bangladesh     71.79896
 2                                Bhutan     69.82259
 3                             Indonesia     69.12795
 4                                 India     68.30930
 5                             Sri Lanka     74.93150
 6                              Maldives     78.49393
 7                               Myanmar     66.57565
 8                                 Nepal     69.23852
 9 Democratic People's Republic of Korea     70.59411
10                              Thailand     74.88333
11                           Timor-Leste     68.33028
```

The average of these 11 life expectancy numbers is 71.10056 or 71 years. However, according to the by-regions dataset from the WHO, the life expectancy at birth for South-East Asia is 68.98047 or 69 years. 

## Why is it wrong?

The problem is that the countries don't all have the same population. [India]

To really drive this point home, let's take a look at some made-up data from three countries, A, B, and C. Imagine these countries are all in some made-up region, "Christine's Region".

We can take the average life expectancy of all the people across the three countries in Christine's Region. This number is 17.33333 or 17 years.

If we look at the data on a by-country level, we only see three rows, one for each country. Averaging these three rows 


How do we do this? 

## Weighted averages: the right way to do it











