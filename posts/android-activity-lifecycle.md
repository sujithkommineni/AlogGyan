---
title: 'Android Activity Lifecycle'
date: '2023-07-06'
linkTitle: 'Android Activity Lifecycle'
otherInfo: 'Test Info'
youtube_link: 'https://www.youtube.com/embed/inu2hOX9_WQ'
---

In this article, we will look at the life cycle of an Android activity as part of that we will learn

 + what is an Activity?
 + what is the life cycle of an Activity
 + As a developer how you going to use different methods of Android activity to achieve what you want to achieve.

So what is an Activity? Activity is one of the main components of Android that is used to display the UI. You might be wondering what else can be there other than UI?
There are many apps that you can find in Play store and elsewhere which doesn't necessarily display UI. They can be running some background services or they might just be sharing data using content providers and so on. But yes most of the apps that you see have at least one activity in them.

Now, let's talk about the life-cycle of the Activity. Let's have a look at the Android activity life cycle diagram

![Activity lifecycle](https://drive.google.com/uc?id=1Xqj5UwZBcA-TaXJS21eLmWIlx-79LfzY)

When user launches an activity Android Frameworks creates an instance of that activity and calls the method **onCreate()**. When the Activity is displayed to the user, **onStart()** will be called followed by **onResume()**. At this point you can say the Activity is in the is in resumed State and user can interact with the activity like clicking buttons or watching a video.

On the other hand, if a system dialog partially obscures the current Activity, **onPause()** of that Activity gets triggered. If the Activity is completely covered by other Activity, or if the user moves away from the current Activity then **onStop()** gets triggered. We can now say the Activity is in Stopped state. The user can come back to the same instance of the activity from recents or by re-lauching the app. Also, if user presses back-key or clears an Activity from recents, **onDestroy()** gets triggered. At this point we can say the Activity is destroyed. After this, if user launches the Activity again, Android Framework creates a new instance of the Activity and calls onCreate().

Lastly, let's learn how developers can use these different life-cycle methods. OnCreate() is the first method that gets called after Activity's instance is created. Also, it is called only once for an instance. So, we can use onCreate() to inflate the layout of the Activity and to initialize different objects used in the Activity. Conversely, we can use onDestroy() to release any resources held by the Activity. onStart() and onStop() can be used to register/un-register various listeners. Eg: Database changes or network connectivity changes. Similarly, onPause() and onResume() can be used to pause/un-pause anything that user actively interacting. Ex: Game.