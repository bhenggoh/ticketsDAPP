# Tickets Purchase App using Smart Contract (my first Blockchain Smart Contract project)

This app allows user to purchase concert tickets using their Metamask wallet.

<img width="428" alt="image" src="https://user-images.githubusercontent.com/116928888/205491492-6b808390-0bf0-4789-a9f5-4ee6b8c6b358.png">

It is still a Work-In-Progress and so code changes and git commits are expected.

Here, I will describe how to integrate GitHub with IFTTT using webhooks to enable an email to me sent to me when there is a commit done.

## Step 1 - Create a new applet in IFTTT and add a trigger.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/116928888/205491368-9fbc7d9c-2c0d-49b9-892b-331ce996f3f1.png">

Add a Trigger. Select Webhook.

<img width="425" alt="image" src="https://user-images.githubusercontent.com/116928888/205491676-99748df3-ce73-4b27-a264-8637409395ea.png">

Choose the option "Receive a web request". 

<img width="355" alt="image" src="https://user-images.githubusercontent.com/116928888/205494718-d2fccde1-ac69-48d0-8c6d-61788f778f55.png">

Enter an Event Name. This is important as the name will be part of the final URL. I have chosen "sendemail" for this project. then click "Create trigger".

<img width="431" alt="image" src="https://user-images.githubusercontent.com/116928888/205491798-86ec1496-03f5-444b-ad3e-0971ce580ce7.png">

## Step 2 - Add an action (when the trigger is fired).

<img width="345" alt="image" src="https://user-images.githubusercontent.com/116928888/205491916-1affad35-07ef-4ca6-815c-2a8841515bd9.png">

Choose Email as the service to be activated when the webhook gets fired.

<img width="362" alt="image" src="https://user-images.githubusercontent.com/116928888/205491942-04a92af4-04cf-427f-afa1-a389170ace56.png">

Then, select the "Send me an email" option.

<img width="378" alt="image" src="https://user-images.githubusercontent.com/116928888/205491984-656a05e3-c69c-4303-bbe5-6870b016ef41.png">

Click "Create action" to complete the applet creation.

<img width="314" alt="image" src="https://user-images.githubusercontent.com/116928888/205494795-017aca59-fc18-4f59-82c0-e1c837ec196d.png">
<img width="328" alt="image" src="https://user-images.githubusercontent.com/116928888/205494807-616db55b-6084-42ab-beda-d93dcdb5a050.png">
<img width="319" alt="image" src="https://user-images.githubusercontent.com/116928888/205494825-66b932f4-5403-45fe-bee6-9d6814a73b74.png">

Now, the applet is connected and ready to be used.

<img width="228" alt="image" src="https://user-images.githubusercontent.com/116928888/205494865-4f6535e1-29db-4527-b0f0-e2d3091ac670.png">

## Step 3 - Get your secret key and URL

Go to the IFTTT main page (click on the IFTTT icon on the top left side of the screen). Enter "webhook" in the search field.

<img width="938" alt="image" src="https://user-images.githubusercontent.com/116928888/205492332-9b768caa-bfd3-4f8d-80a3-1fc2eaeb7abc.png">

Select "Documentation" button.

<img width="446" alt="image" src="https://user-images.githubusercontent.com/116928888/205492348-3b6ede4a-aa54-4739-b1da-9f944e3f04a9.png">

You will go into the following screen where you can find the secret key at the top of the page. Copy the secret key.

![image](https://user-images.githubusercontent.com/116928888/205492479-4819d1b1-7906-4f72-bd6c-cce943058162.png)

## Step 4 - Store the secret key in GitHub.

Go to Settings for the repo. Select "Actions" button (left panel under "Security->Secrets").

<img width="470" alt="image" src="https://user-images.githubusercontent.com/116928888/205496635-9a4ed1b3-7ffc-436c-8669-48211e58c1af.png">

Create a "New repository secret", give it a name (Mine is "my_IFTTT_Key"), add paste the secret key into the field.

<img width="470" alt="image" src="https://user-images.githubusercontent.com/116928888/205492751-3991d8ed-a8c4-4040-b5f5-d5fc77912a31.png">

## Step 5 - Create an Action in GitHub.

Go to the "Actions" tab, and enter "simple workflow" in the search bar.

<img width="384" alt="image" src="https://user-images.githubusercontent.com/116928888/205493046-c85f8f97-7400-486c-ac08-e0eea11d1d24.png">

Click "Configure".

<img width="379" alt="image" src="https://user-images.githubusercontent.com/116928888/205493065-0ffb78b9-dd86-4505-8d45-23f905164fd2.png">

Rename the workflow (mine is "sendemail.yml").

<img width="311" alt="image" src="https://user-images.githubusercontent.com/116928888/205493102-3fafcf0a-463d-4a84-a08e-b3eb42b9f4d1.png">

At the last line, add the following:

curl -X POST -H "Content-Type: application/json" -d "{\"value1\":\"123\"}" https://maker.ifttt.com/trigger/sendemail/with/key/${{ secrets.my_IFTTT_Key }}
          
NOTE:
* "value1":"123" is part of the JSON payload you want to send via the email. You can have up to 3 key-value pair for the payload.
* For Windows, the double quotations need to be escaped (\")
* "sendemail" is the name of the trigger you have just set up earlier.
* "mysecret:IFTTT_Key" is the secret key (IFTTT_Key) you have stored in the environment (my_secret).

Commit the change.

<img width="340" alt="image" src="https://user-images.githubusercontent.com/116928888/205493322-dbcc5fa9-1900-452c-9ba5-3f329c13575b.png">

So, now the GitHub action is integrated to the IFTTT trigger. 

## Step 6 - Test the workflow

Now, perform a commit to any file in the repo.

An email will be send to me as follows:

<img width="530" alt="image" src="https://user-images.githubusercontent.com/116928888/205495170-8d6a2d82-e7e3-48a6-864c-9849a790c115.png">














