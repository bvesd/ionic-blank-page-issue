# Blank page after going back to tabbed page AND nested route animations don't work

Setup: Ionic 6 w/ React 17

When you have an app using tabs, and a tab has a further link to another page, it will show a blank page when going back to the tab-page.

Main concern here is _using a nested RouterOutlet as described in Ionic documentation_

**Side note:** 

if you do a refresh the issue goes away, clicking back shows the tab. 

If you go to the url again, the issue reappears and it will once again show a white page.



**Reproduce the main issue by:**
1. opening this example app
2. go to tab 3
3. press 'PRESS ME' to go to another page outside the tabs / go outside the current RouterOutlet 'path' (issue 2: no animation here)
4. press the back button
5. ...
6. white page, not tab3 as expected

After some checking, it looks like Ionic adds an _ion-page-invisible_ inline-CSS item to the _ion-page_ 

This happens in some sort of delay, because I do see the tab 3 heading animating into view, but then disappearnig after the animation is done.

This issue sounds like the one that was fixed for Vue: https://github.com/ionic-team/ionic-framework/pull/25206
