pages done:
    -home
    -login
    -signup (same as the log in form but with extra inputs (email, full name, phone number, and a password (maybe add a section to add parent information for the student m3rfsh b2a))) *Not done*
    -contact us (needs some customization on the inputs and margins)
    -browse for courses(dunno, it looks good for now)
    -logout (just a blank page with the following text "you are logged out <a>log in again</a>" (the link redirects to the log in page)) *Not done*
    -profile preview
    -profile edit 
 

pages left till done:
    -quizzes (just try and watch the following urls and come up with one of your own:
                    - https://www.youtube.com/playlist?list=PLOOcfkIFw3os58bzJjtUfcmRae_Ht_dFw
                    - https://www.youtube.com/watch?v=nTNEnXyB8uc&t=107s&ab_channel=PankajPanjwani
                    - https://www.youtube.com/watch?v=2ma3HoAwZpM&ab_channel=naveenk)
            just get the best out of each video and fit it with the features that we already have. (also try and optimize it in way(frontend-wise) to make it look nice b2a (repeat also to the assignments section))
    -my courses (it is just a page to show a list of the courses the student has enrolled in (just like th browse for courses page but a little bit customized))
    -course dashboard (when the user clicks on the course link in the my courses page, it should show a dashboard to show the stats of the student, all assignments/quizzes and his grades , pre-recorded session links, etc)
    -my books (my attachments, if a course host uploads a pdf of some notes, a powerpoint of flashcards. the student can see a list of all the uploaded attachments in one page (it is not downloadable, but it has an expiry date, no worries, all of our courses get updated yearly with all of its attachements. So old attachments will lose it's worth after each year, since we work on optimizing our system and making it better each year))
    -announcements(again, this page contains any public annaouncement a course host would like to say. any announcement the host says appears to all students in the 'announcements' page (frontend: an announcement is like a post in facebook, exactly like it, just enter facebook.com on pc and activate dark mode and you will see what I say))
    -assignments(typical to the quizzes page but with a few tweaks and changes)
    -Manage course(their will be additional links in the sidebar for the teacher accounts, one of those links is the "create course" link, which will help the teacher to customize his course(since I said that most of the times, the course gets optimized, sometimes by the teacher, others by the admin), he can see a table consisting of all the students, with their assignments, also be able to create an assignment or a report to a student's parents. he also can create a brand new session (upload a pre-recorded session, or a live session). in general, the teacher can manage each and every detail of his course via this page (wad7a mesh keda))
    - apply now (Wablo has it's own arsenal of teachers, but we cannot launch a site with only 10+ courses, sometimes we either need to change teachers or have an extra category of courses(outside of the IGCSE stuff, eg. fitness, touch typing) so if an instructor of some sort of idea outside of already made courses. he can apply and fill all of his information in a form, and also upload a CV which will be viewed by one of the admins (the admin have to view it in either his email, or the django custom admin panel(nseet a2olk en enta lesa m3mltsh custom admin panel mesh keda!)))
    - create quiz(pretty self-explanatory, it is a page within the manage courses page, to assist the course host to create a quiz(baseeta mesh keda?))
    - create assignment(zay el fo2)
    - create a report(bardo zayo)
    - messages(I just wanted to make a messaging system to help the student to be able to message the teacher 24/7 about a certain topic, it will be a strong point to help us stand out of other learning management systems)


Notes:
    - customize the sidebar to look a bit nicer, also maybe add a dropdown to the browse for courses link in the navbar to select the categories and grade directly from the navbar
    - for mobile users (I need to make the expandable burger navbar to contain the sidebar links with all of it's dropdowns and shenaninagans, to help the mobile users to be able to access all the links)
    - secondly, the admin will have the same frontend as a course host with additional permissions, like viewing the users as a table, getting into a session, viewing some course Assignment to monitor course hosts.
    - the admin panel must contain messaging between each admin, which can be viewed only by the owner for security monitoring reasons
    - passwords must be encrypted so that not even the owner can view it.
    - must add a 2FA system to an account
    - also add the login with google, facebook options in the login page
    - if the user links his or her facebook acc, it must be private, and not appear in the view profile page. mesh makan t3arof howa
    - the live sessions will be available via the 'jitsi' open source video conferencing platform (which is open source), but we will remove the logo, and customize it in a way to be viewed as our own live session software. try to embed it and try and make a way to make the course hosts make the sessions in our own course sites. if I could not embed it, then just try and get it as an API, if that also failed, then try and search for an alternative.
    - the MCQ questions, will just be radio inputs but customized with some CSS, also I repeat, we need to make the course host to be able to post normal questions text with inputs under to make the student enter the answer.
    - the correction will be fast (still depending on the amount of students, 100k students mesh zay 10), it will be on 2 phases, all mcq questions will be automatically be corrected and viewed by the teacher, incase of any mistake (the teacher should be able to edit it). And the second phase will be the 'normal' type of questions that I mentioned above, which will be manually corrected by the teacher.
    - the student should get an extra mark/point for viewing the pre-recorded session/live session. live session should be recorded, and downloaded, then uploaded to the website after the live session is finished. all students should be able to view the live session after it is finished. students should all be notified when a live session is announced in the announcements pages. if a student is not found in the session students list, A mark should be deducted from him and a report shall be sent to his parents that their son/daughter has not attended the session
    - I would love to add gamification to the website, all points will be added to the students account, and points count will be added to the profile page of the user.
    - based on a survey I have made, All students want the website to be as interactive as possible.
    - also I will mostly add twilio to the backend to send a weekly report with stats and comparison to the student's performance throughout the courses he has enrolled into.
    - also I will most likely add ajax in the 'browse for courses' page to filter between the difficulty of the course(oh wait, I did not mention that, well I have mentioned it now), the price, the age, and the subject 
    - the user cannot enter any page without being logged in to an account.
    - maybe add some popup general questions that appear while a student is in a live/pre-recorded session.
    - when our userbase is more than 1000 active monthly users, we should add a public survey to gatther what the users think of our website.
    - I should add a forgot password system.
    - I should also find a way to scrape the accounts of possible clients of facebook and instagram (new idea, maybe?)
    - add as much of payment options as I can , eg. payeer, paypal, credit, debit, visa, mastercard, americanexpresss, meeza(maybe), 7ata law orange cash hato.
    - that is probably it.




I'm confident there is always a way, might be messy, might take some time, or both, for this specific case ... I think you should separate the machine learning from the gui, having either the gui access a database with the results / input new data for the machine learning script to analyze. Or you could have the same scrip do both, but have the machine learning stuff use different threads, personally I like the first option better, also you could have the machine learning script as a server with the local database and the gui can poll results and send info to the server, same as first option but using the network