---
title: 'Saving the state of an Activity'
date: '2023-07-30'
linkTitle: 'Saving the state of an Activity'
otherInfo: 'Test Info'
youtube_link: 'https://www.youtube.com/embed/PzmIy2WFK-Y'
---

This video is about saving the state of an Activity in Android. This video briefly talks about different ways of saving the state of Activity such as using ViewModels and onSaveInstanceState.


Also, we'll see an example of how to use **onSaveInstanceState()** to store and restore the state. When the system kills the Activity during config changes or in low memory cases, it gives the Activity a chance to save its state by calling **onSaveInstanceState()**. If we want to save the state, we have to fill in the bundle supplied via the onSaveInstanceState callback. After the system created the new instance of the Activity, the same Bundle is provided to the Activity via onCreate(). We can read that bundle and restore the state of the Activity.