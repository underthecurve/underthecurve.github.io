---
layout: post
title:  '6 ways to run a "simple" regression'
date:   2016-07-01 00:00:00 -0700
categories: jekyll update
---

**Are wealthier countries healthier countries?**

This graph of income and life expectancy from the [Gapminder Foundation](https://www.gapminder.org/data/) would suggest they are:

For the average country in 2015, **more wealth** (i.e., higher income per person) **= better health** (i.e., higher life expectancy). 


<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/gapminder.png?raw=true" width = "450px"/>
<br>

*Note: data viz superstar Lisa Charlotte Rost re-drew this graph using [12 tools](http://lisacharlotterost.github.io/2016/05/17/one-chart-tools/) and [12 charting libraries](http://lisacharlotterost.github.io/2016/05/17/one-chart-code/). She's a 2016 OpenNews Fellow like me, yay! Thanks for the inspiration, Lisa.*

In this post, I will run a simple linear regression of health vs. income using 6 different programs/programming languages.

I'm comfortable with 3 of the tools (Stata, R, Excel) but less experienced with the other half (Python, SAS, PSPP). Please let me know via [twitter](https://twitter.com/christinezhang) or [email](mailto: ychristinezhang@gmail.com) what you think of my approach, or if there are any really great tools I'm missing. You can find the code and data for the regressions on [github](https://github.com/OpenNewsLabs/one-regression-six-ways).

<br>
**The data**

Lisa was nice enough to upload the Gapminder dataset to a [Google spreadsheet](https://docs.google.com/spreadsheets/d/1qmOCE6RBQc2hy-vW8Kefp--LcWpgwCysmgIgARy0gDk/edit?usp=sharing):

<image src = "https://raw.githubusercontent.com/lisacharlotterost/lisacharlotterost.github.io/master/pic/160426_data.png" width = "500px"/>
<br>
Two things to note: 1) I won't be using population and 2) The graph shows the *natural logarithim of income per capita* on the x-axis. So in our regression model, I will run a regression of health against the *log* of income. More info on log transformations [here](https://infoactive.co/data-design/ch11.html).

<br>
**The regression**

A regression helps quantify relationships. From the graph we see that income is related to life expectancy (which I'll also call "health"). What if we drew a straight line through the points?

How strong would this linear relationship be? Would there be countries that don't quite fit the trend (maybe those little blue points at the bottom)? How well would income explain health? 

In order to start answering these questions, I need to first know the equation of the line. This requires me to run a linear regression model, with health as the y-variable and income as the x-variable (this corresponds to their position on the graph axes, too). This regression model is called a "simple" linear regression because I use just one x-variable, income, to explain health.

If you're lost on what regression is, take a look [here](http://onlinestatbook.com/2/regression/intro.html) and [here](https://www.openintro.org/download.php?file=os3_tablet&referrer=/stat/textbook.php#page=331) before reading on.

<br>
**What I will do, using 6 different tools**

**1. I'll run the regression and see what the default output gets me.** It should produce results corresponding to the equation `health = 24.51 + 5.16 * log_income`.

I won't go too much into the interpretation of the results, unless they differ a lot between the programs. 

**2. I'll draw some plots to help me determine how appropriate the linear model is** for my data - namely, whether the [assumptions of linear regression](http://people.duke.edu/~rnau/testing.htm) are met: linearity, independent errors, constant variance of errors, normality of errors. 

Fredrik deBoer has a [very accessible post](http://fredrikdeboer.com/2015/02/28/a-simple-reform-to-improve-data-journalism/) explaining why regression assumptions are important and how to tell if there's something wrong. Much of it comes down to examining residuals (aka errors). Residuals are the observed values (i.e., the values of health for each country that are in the data) minus the fitted values (i.e., what the values of health would be if each country's log income were plugged into the regression equation).

**3. I'll try to determine outliers**, or countries that really don't seem to fit the trend, **and/or influential observations**, or those that that influence the equation of the regression line.

**4. If it's not done automatically, I'll calculate the fitted values and residuals and put them into a dataset.**



**> Excel**


Likely the most well-known data analysis program. 

To run the regression, I had to load the *Analysis ToolPak*, a pre-installed add-in program. Jeremy Miles has a [nice guide](http://www.jeremymiles.co.uk/regressionbook/extras/appendix2/excel/) on how to do this in Windows. 

In column E, I calculated the log of income (LN stands for "natural log")
<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Excel/logtransform.png?raw=true" width = "250px"/>
<br>
*Data* --> *Data Analysis* --> *Regression* brings me to this window, where I selected my data ranges and the following options:
<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Excel/regressionwindow.png?raw=true" width = "250px"/>
<br>
Hitting "OK" opens a new sheet in the Excel workbook with the following results:
<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Excel/results.png?raw=true"/>
File saved on [github](https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Excel/results.xlsx).

Summary Output gives me the regression equation starting from row 16, plus some regression stats in the first few rows.

Residual Output gives me the fitted values along with the residuals and standardized residuals, in order of observation number. 

Probability Output gives me the quantiles of health. 

These Residual Output and Probability Output contain the underlying data behind the second and third graphs -- all three were automatically generated with the results sheet:
<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Excel/regplots.png?raw=true" width = "450px" height = "450px"/>
The first graph is a scatterplot with the fitted values of health overlaid on the actual values, which is helpful to visualize the trend. 

The second is a normal probability plot, also known as a normal q-q plot. A straight line means the data in the y-axis are normally distributed. I'm not sure why Excel by default plots health on the y-axis rather than the residuals. This a normal q-q plot of health shows me that health is normally distributed (the dots fall more or less on a straight line), but what I really want to know whether the residuals of the equation are normally distributed (normality of errors assumption).

The third is a scatterplot of residuals vs. log income. The dots look random, with an average of about zero. This appears to fit the constant variance of residuals condition - e.g., the errors don't vary across the range of log income values. It would be better to plot residuals vs. fitted values, though it doesn't matter since we only have one x-variable (log income). 

More on interpreting Excel output [here](http://cameron.econ.ucdavis.edu/excel/ex61multipleregression.html).

***Verdict***: a bit cumbersome to point-and-click rather than write code, but not bad for a quick regression if the dataset isn't too big. Default diagnostic plots aren't great. It's nice that Excel generates fitted values and residuals automatically.



**> R**

[R](https://www.r-project.org/) is an open-source programming language designed for stats and data analysis. 

R takes a while to get the hang of, especially if you're new to coding. Regression in R involves just a few lines of code (note I can specify ```log(income)``` directly rather than creating a new variable) and uses the command ```lm()``` ("linear model")

``` r
# read data
d <- read.csv("data.csv", stringsAsFactors = F)

# run regression
reg <- lm(health ~ log(income), data = d)
```
```summary(reg)``` gives the summary output:

```
Call:
lm(formula = health ~ log(income), data = d)

Residuals:
    Min      1Q  Median      3Q     Max 
-18.008  -1.838   1.031   2.742   9.523 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  24.5140     2.5569   9.587   <2e-16 ***
log(income)   5.1627     0.2775  18.605   <2e-16 ***
---
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 4.586 on 185 degrees of freedom
Multiple R-squared:  0.6517,	Adjusted R-squared:  0.6498 
F-statistic: 346.1 on 1 and 185 DF,  p-value: < 2.2e-16
```

I can get four default diagnostic plots using ```plot(reg)```:

<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/R/regplots.png?raw=true" width = "550px"/>

On each plot, R helpfully labels the points that stand out with their observation number. 54, for example, is Equatorial Guinea, whose life expectancy is 60.63 in the data. The linear equation would have predicted its life expectancy to be 77.92 from its income level. The residual is the difference between the two, or approximately -17, which I can see on the residuals vs. fitted plot. 

The scale-location plot provides similar information, though the y-axis is scaled such that all the numbers are positive. R overlays a loess line on both the resids vs. fitted and scale-location plots - these lines are flat, meaning the residuals satisfy the assumption of constant variance.

The normal q-q plot shows the standardized residuals on the y-axis. R also draws the 45-degree line, which the points would fall on if the residuals were perfectly normally distributed. This is more helpful than Excel's and give me more information; namely, that there are several residuals that are lower than they would be if they were normally distributed. These are mostly driven by three observations; not something to worry about too much, since the rest fit on the line pretty well, but good to keep in mind.

The residuals vs. leverage plot tries to identify influential observations. The y-axis is on a standardized scale, which is useful. I don't need to worry about Cook's distance, since the dashed line doesn't show up on the plot.

More on interpreting R output [here](http://strata.uga.edu/6370/rtips/regressionPlots.html).

Here's how I put the fitted values and residuals in a data frame:

``` r
results <- cbind.data.frame(country = d$country,
                               resid = resid(reg), 
                               std_resids = rstandard(reg), 
                               stu_resids = rstudent(reg), 
                               fitted = fitted(reg))
```
`head(results)` gives me this:

``` r
              country      resid std_resids stu_resids   fitted
1         Afghanistan -5.9281029 -1.3021663 -1.3046349 63.55810
2             Albania  3.6249255  0.7926478  0.7918483 72.37507
3             Algeria  2.9114277  0.6367698  0.6357435 73.58857
4             Andorra  4.0925167  0.8991876  0.8987201 80.00748
5              Angola -9.6578534 -2.1119222 -2.1320646 70.65785
6 Antigua and Barbuda -0.7069681 -0.1547763 -0.1543674 75.90697
```
R has two versions of "standardized" residuals, ```rstandard``` and ```rstudent``` - standardized vs. studentized residuals. There isn't much of a difference between the two in this dataset. Personally, I find the terminology confusing. Still more confusing is that Excel's "standard residuals" don't match up with either of these! Excel's standard residual for Afghanistan, for example, is -1.3962. More on why this is [here](http://stats.stackexchange.com/questions/166533/how-exactly-are-standardized-residuals-calculated). Again, the difference is small in this case, but it's important to be aware of this issue. 

More about different ways of standardizing residuals [here](http://stats.stackexchange.com/questions/22653/raw-residuals-versus-standardised-residuals-versus-studentised-residuals-what) and [here](http://courses.washington.edu/b515/l7.pdf).

***Verdict***: Regression is the type of stuff that R was built for, so it's great. The diagnostic plots are very helpful. Extracting the fitted values and residuals was a bit tricky for me as it involved figuring out the attributes of the `reg` object. 


**> Stata**

[Stata](http://www.stata.com/) is another statistical software program. It's not open-source like R, so you have to pay for a license.

Running the regression fairly straightforward, using the command ```regress```:

```
* Read in data
import delimited "data.csv", clear

* log transformation of income
gen log_income = log(income)

* run regression
regress health log_income
```
Stata is not object-oriented like R, so it automatically spits out the following in the output window:

```

      Source |       SS           df       MS      Number of obs   =       187
-------------+----------------------------------   F(1, 185)       =    346.13
       Model |  7278.46216         1  7278.46216   Prob > F        =    0.0000
    Residual |  3890.16179       185  21.0279016   R-squared       =    0.6517
-------------+----------------------------------   Adj R-squared   =    0.6498
       Total |   11168.624       186  60.0463653   Root MSE        =    4.5856

------------------------------------------------------------------------------
      health |      Coef.   Std. Err.      t    P>|t|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
  log_income |   5.162726   .2774963    18.60   0.000     4.615262    5.710191
       _cons |   24.51405   2.556891     9.59   0.000     19.46964    29.55846
------------------------------------------------------------------------------
```

Stata does not produce any diagnostic plots automatically. In order to get them, I have to generate the residuals and fitted values first using `predict`.

```
* calculate residuals (raw & standardized) plus fitted values
predict resids, residuals
predict std_resids, rstandard
predict stu_resids, rstudent
predict fitted
 
list country resids std_resids stu_resids fitted in 1/5

     +------------------------------------------------------------+
     |     country      resids   std_res~s   stu_res~s     fitted |
     |------------------------------------------------------------|
  1. | Afghanistan   -5.928102   -1.302166   -1.304635    63.5581 |
  2. |     Albania    3.624925    .7926475    .7918481   72.37508 |
  3. |     Algeria     2.91143    .6367702    .6357439   73.58857 |
  4. |     Andorra    4.092515    .8991871    .8987197   80.00748 |
  5. |      Angola   -9.657851   -2.111922   -2.132064   70.65785 |
     +------------------------------------------------------------+
```
Stata's version of standardized and studentized residuals is the same as R's.

Once the predicted values and residuals are generated, Stata does has built-in graphing commands to produce diagnostic plots, like ``rvfplot`` for residuals vs. fitted.

<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Stata/regplots.png?raw=true" width = "550px"/>

Code on [github](https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Stata/regression.do). 


Stata's residuals vs. leverage plot places residuals on the x-axis rather than the y-axis. It doesn't overlay Cook's distance, but I can generate these with `predict cooksD, cooksd`. I found it helpful that Stata labels the points on this with country names rather than observation numbers.

More on interpreting Stata's regression output [here](http://www.ats.ucla.edu/stat/stata/output/reg_output.htm) and [here](http://www.ats.ucla.edu/stat/stata/webbooks/reg/chapter2/statareg2.htm).

***Verdict***: Stata easily runs regressions. It's not as difficult as R to figure out, but one downside is it costs $$. It also requires you to add the fitted values and residuals to the dataset before plotting diagnostics, which could be good or bad depending on your preference and what you want to do. Still, it would be great to get a set of diagnostic plots with one command, rather than having to generate each separately. 

**> SAS**

[SAS](http://www.sas.com/) is another statistical software program that requires a paid license. I don't have much experience with it, but I think businesses and government agencies use it quite a lot.

One major thing I noticed about coding is SAS is that capitalization doesn't matter (is there a set convention for when to capitalize?). Also, SAS uses semicolon delimiters by default, and I had to specify ```RUN;``` in order to get the output. 

```
* read data;
PROC IMPORT OUT = d
            DATAFILE = "data.csv" 
            DBMS = CSV REPLACE;
     GETNAMES = YES;
     DATAROW = 2; 

* log transformation of income;
DATA d;
	SET d;
	log_income = log(income);
RUN;

* run regression;
PROC REG DATA = d;
model health = log_income;
RUN;

* calculate residuals (raw & standardized) plus fitted values
output out = d 
	p = fitted 
	r = resids
	rstudent = stu_resids
	student = std_resids;

```

Running all this gives me an [output log](https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/SAS/output.log) which is a bit long to embed here. Its studentized and standarized residuals are the same as R's and Excel's, so the output results are basically the same.

More on interpreting SAS output [here](http://www.ats.ucla.edu/stat/sas/output/reg.htm).

SAS automatically generates diagnostic plots after the regression is run. Unlike Stata, it doesn't require the residuals and fitted values to be calculated first:

<image src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/SAS/DiagnosticsPanel1.png?raw=true" width = "550px"/>

<br>
There are a *lot* of plots. More on those [here](https://support.sas.com/documentation/cdl/en/statug/63962/HTML/default/viewer.htm#statug_reg_sect050.htm). The normal q-q plot puts raw residuals on the y-axis rather than standardized residuals, but it provides the same information. I like the histogram of the residuals and the Cook's D plots. I wish the points were labeled with observation numbers or country names, since it's hard to tell which the outliers are otherwise.

***Verdict***: SAS is nice because it automatically generates a summary sheet of the output and diagnostic plots when the regression is run. So it doesn't require much effort to get the results. One downside, as with Stata, is $$. Plus it ran a bit slower for me, probably because it automatically generated all the graphs in pop-up windows. Labeling of outlier and influential observations would be nice.

**> PSPP**

[PSPP](https://www.gnu.org/software/pspp/) is an open-source data analysis program, a sort of free version of [SPSS](http://www.ibm.com/analytics/us/en/technology/spss/). 

I couldn't get the most recent Ubuntu version to install, so I'm using version 0.7.9. Because of this, I could only run the regression without any of the diagnostic plots. Like SAS, PSPP doesn't care about capitalization. 

```
* read data 
GET DATA
  /TYPE = TXT
  /FILE = "data.csv"
  /FIRSTCASE = 2
  /DELIMITERS = ","
  /QUALIFIER = '"'
  /VARIABLES =
    country A30
    income F6.0
    health F5.1
    population F10.0.

*  log transformation of income
COMPUTE log_income = ln(income).

* run regression
REGRESSION 
  /VARIABLES = log_income 
  /DEPENDENT = health
  /SAVE pred resid.
```

PSPP doesn't automatically select the type of variables in the data, so I had to specify, for example, that income, health, and population were numeric (F stands for "float"). Also, note that PSPP uses a period to delimit the end of processes.

Here's the output.

```
Model Summary
#====#========#=================#==========================#
#  R #R Square|Adjusted R Square|Std. Error of the Estimate#
##===#========#=================#==========================#
#|.81#     .65|              .65|                      4.59#
##===#========#=================#==========================#

ANOVA
#===========#==============#===#===========#======#============#
#           #Sum of Squares| df|Mean Square|   F  |Significance#
##==========#==============#===#===========#======#============#
#|Regression#       7278.46|  1|    7278.46|346.13|         .00#
#|Residual  #       3890.16|185|      21.03|      |            #
#|Total     #      11168.62|186|           |      |            #
##==========#==============#===#===========#======#============#

Coefficients
#===========#=====#==========#====#=====#============#
#           #  B  |Std. Error|Beta|  t  |Significance#
##==========#=====#==========#====#=====#============#
#|(Constant)#24.51|      2.56| .00| 9.59|         .00#
#|log_income# 5.16|       .28| .81|18.60|         .00#
##==========#=====#==========#====#=====#============#
```
Adding ```SAVE pred resid.``` at the end of the ```REGRESSION``` command adds the fitted values and residuals as new columns in the data called PRED1 and RES1.

I didn't see a command to calculate standardized residuals. 

I can't do much else with this output. I could export the results to as CSV file using ```SAVE TRANSLATE```, but this doesn't save the variable names, which is annoying.

***Verdict***: PSPP is not my favorite program, since it provides regression output without regression diagnostics. It's generally not a good idea to blindly run regressions, so I hope the later versions have added more diagnostic capabilities, including plotting.

**> Python (statsmodels)**

[Python](https://www.python.org/) is an open-source programming language that's used for lots of things, not just stats and data analysis. Because it's not designed for the primary purpose of statistical and data analysis, it takes a bit of effort to get it set up to run a regression.

I had to install [some Python modules](https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Python/requirements.txt) on my machine before I could get started. Again, because Python's base functionality is *not* stats, it relies on user-written modules (kind of like Excel's add-ins) for things like regression. The main one I'm using is called [statsmodels](http://statsmodels.sourceforge.net/), inspired by Data School's [tutorial](https://github.com/justmarkham/DAT4/blob/master/notebooks/08_linear_regression.ipynb). 

statsmodels uses `smf.ols()` to fit the model (smf stands for statsmodels formula, and ols stands for ordinary least squares, which is the type of regression that is run). More info on that [here](http://statsmodels.sourceforge.net/devel/example_formulas.html).

```python
# import modules I installed
import os
import math
import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import statsmodels.api as sm
import statsmodels.formula.api as smf

# read data
d = pd.read_csv('data.csv')

# log transformation of income
d['log_income'] = np.log(d['income'])

# run regression
lm = smf.ols(formula = 'health ~ log_income', data = d).fit()
```
``` print(lm.summary())``` gives me this output:

```
                            OLS Regression Results                            
==============================================================================
Dep. Variable:                 health   R-squared:                       0.652
Model:                            OLS   Adj. R-squared:                  0.650
Method:                 Least Squares   F-statistic:                     346.1
Date:                Thu, 30 Jun 2016   Prob (F-statistic):           3.10e-44
Time:                        16:39:26   Log-Likelihood:                -549.12
No. Observations:                 187   AIC:                             1102.
Df Residuals:                     185   BIC:                             1109.
Df Model:                           1                                         
Covariance Type:            nonrobust                                         
==============================================================================
                 coef    std err          t      P>|t|      [95.0% Conf. Int.]
------------------------------------------------------------------------------
Intercept     24.5140      2.557      9.587      0.000        19.470    29.558
log_income     5.1627      0.277     18.605      0.000         4.615     5.710
==============================================================================
Omnibus:                       49.752   Durbin-Watson:                   2.310
Prob(Omnibus):                  0.000   Jarque-Bera (JB):               97.905
Skew:                          -1.266   Prob(JB):                     5.50e-22
Kurtosis:                       5.481   Cond. No.                         71.1
==============================================================================
```

More on interpreting the output [here](https://www.datarobot.com/blog/ordinary-least-squares-in-python/). 

Python is intimidating because it requires many packages and modules to be installed even before the analysis proceeds. But once I got through the set-up process, running the regression itself wasn't too bad. 

Getting regression diagnostics was a different story, and I couldn't find a comprehensive tutorial on this. Because Python's statsmodels doesn't produce any graphs by default, I had to create a dataset with the residuals and fitted values:

```
results = pd.DataFrame({'country': d.country,
                        'resids': lm.resid,
                        'std_resids': lm.resid_pearson,
                        'fitted': lm.predict()})
```

The [statsmodels documentation](http://statsmodels.sourceforge.net/devel/generated/statsmodels.regression.linear_model.RegressionResults.html) states that `resid` and `resid_pearson` are the only types of residuals generated by `smf.ols()`. `resid_pearson` is a type of standardized residual, so I've called it `std_resids`.

```print(results.head())``` shows me the residuals and fitted values:

```python
       country     fitted    resids  std_resids
0  Afghanistan  63.558103 -5.928103   -1.292760
1      Albania  72.375075  3.624925    0.790499
2      Algeria  73.588572  2.911428    0.634904
3      Andorra  80.007483  4.092517    0.892468
4       Angola  70.657853 -9.657853   -2.106118
```

Python uses zero-indexing, meaning that the first observation, Afghanistan, is referred to as row 0, *not* row 1.
 
The standardized residuals specified by `resid_pearson` are *not* the same as those in any of the other programs. [Here's](http://stats.stackexchange.com/questions/22653/raw-residuals-versus-standardised-residuals-versus-studentised-residuals-what) an explanation of the difference. I'm not too knowledgeable of standardizing residuals, but  it would be great if statsmodels automatically calculated standardized or studentized residuals.

Since statsmodels doesn't generate any graphics automatically, I tried to replicate R's regression diagnostic plots. This required many lines of code, especially the residuals vs. fitted values plot. This should be a much easier graph to generate, since it's one of the most common in regression analysis. 

<img src = "https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Python/regplots.png?raw=true" width = "550px"/>

Code on [github](https://github.com/OpenNewsLabs/one-regression-six-ways/blob/master/Python/statsmodels_method.py).  

The observation numbers on the Influence Plot are one lower than the ones in R, because of the zero-indexing. So Equatorial Guinea is observation 54 in R, but 53 is Python.

***Verdict***: Python requires an extensive setting-up that makes it harder to get the hang of at first. That said, statsmodels does a good job of running a regression and has a lot of features. Regression diagnostics requires a lot more effort in statsmodels than I would like. It would be better if there were a function to automatically generate a few diagnostic plots. 
<br><br>

This concludes one regression, six ways! I learned a lot, and I hope you did, too.
Take a look at the [github repo](https://github.com/OpenNewsLabs/one-regression-six-ways) if you want to see the code. Any questions, please leave a comment or shoot me an [email](mailto: ychristinezhang@gmail.com) or find me on [twitter](https://twitter.com/christinezhang) (twitter mentions make me happy, twitter follows make my day). Thanks!


