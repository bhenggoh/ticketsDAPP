# Tickets Purchase App using Smart Contract (my first :point_up: ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) Blockchain Smart Contract project) 

<details><summary>App info</summary>
          
This app allows user to purchase concert tickets using their Metamask wallet.

<p align="center">
<kbd><img width="428" alt="image" src="https://user-images.githubusercontent.com/116928888/205491492-6b808390-0bf0-4789-a9f5-4ee6b8c6b358.png">
</p>
          
It is still a Work-In-Progress :construction_worker: and so code changes and git commits are expected.

</details>

---

Here, I will describe how to integrate Github with IFTTT using webhooks to send me an email when there is a commit done (for projects where there are collaborators).

<p align="center">
<kbd><img width="637" alt="image" src="https://user-images.githubusercontent.com/116928888/205529041-a1c006f4-d227-4704-b664-ff0af5952260.png">
</p>

<details><summary>Step :one: - Create a new applet in IFTTT and add a trigger.</summary>

## Step :one: - Create a new applet in IFTTT and add a trigger.

<p align="center">
<kbd><img width="960" alt="image" src="https://user-images.githubusercontent.com/116928888/205491368-9fbc7d9c-2c0d-49b9-892b-331ce996f3f1.png">
</p>

Add a Trigger. Select Webhook.

<p align="center">
<kbd><img width="425" alt="image" src="https://user-images.githubusercontent.com/116928888/205491676-99748df3-ce73-4b27-a264-8637409395ea.png">
</p>

Choose the option "Receive a web request". 

<p align="center">
<kbd><img width="355" alt="image" src="https://user-images.githubusercontent.com/116928888/205494718-d2fccde1-ac69-48d0-8c6d-61788f778f55.png">
</p>

Enter an Event Name. This is important as the name will be part of the final URL. I have chosen "sendemail" for this project. then click "Create trigger".

<p align="center">
<kbd><img width="431" alt="image" src="https://user-images.githubusercontent.com/116928888/205491798-86ec1496-03f5-444b-ad3e-0971ce580ce7.png">
</p>
</details>

<details><summary>Step :two: - Add an action (when the trigger is fired).</summary>

## Step :two: - Add an action (when the trigger is fired).

<p align="center">
<kbd><img width="345" alt="image" src="https://user-images.githubusercontent.com/116928888/205491916-1affad35-07ef-4ca6-815c-2a8841515bd9.png">
</p>

Choose Email as the service to be activated when the webhook gets fired.

<p align="center">
<kbd><img width="362" alt="image" src="https://user-images.githubusercontent.com/116928888/205491942-04a92af4-04cf-427f-afa1-a389170ace56.png">
</p>

Then, select the "Send me an email" option.

<p align="center">
<kbd><img width="378" alt="image" src="https://user-images.githubusercontent.com/116928888/205491984-656a05e3-c69c-4303-bbe5-6870b016ef41.png">
</p>

You may wish to customize the email message.

<p align="center">
<kbd><img width="284" alt="image" src="https://user-images.githubusercontent.com/116928888/205500357-6e60e956-febc-4c9c-b2a4-c2f412ed41b0.png">
</p>

Click "Create action" to complete the applet creation.

<p align="center">
<kbd><img width="314" alt="image" src="https://user-images.githubusercontent.com/116928888/205494795-017aca59-fc18-4f59-82c0-e1c837ec196d.png">
</p>
<p align="center">
<kbd><img width="328" alt="image" src="https://user-images.githubusercontent.com/116928888/205494807-616db55b-6084-42ab-beda-d93dcdb5a050.png">
</p>
<p align="center">
<kbd><img width="319" alt="image" src="https://user-images.githubusercontent.com/116928888/205494825-66b932f4-5403-45fe-bee6-9d6814a73b74.png">
</p>

Now, the applet is connected and ready to be used.

<p align="center">
<kbd><img width="228" alt="image" src="https://user-images.githubusercontent.com/116928888/205494865-4f6535e1-29db-4527-b0f0-e2d3091ac670.png">
</p>
</details>

<details><summary>Step :three: - Get your secret key :secret: and URL</summary>

## Step :three: - Get your secret key :secret: and URL

Go to the IFTTT main page (click on the IFTTT icon on the top left side of the screen). Enter "webhook" in the search field.

<p align="center">
<kbd><img width="938" alt="image" src="https://user-images.githubusercontent.com/116928888/205492332-9b768caa-bfd3-4f8d-80a3-1fc2eaeb7abc.png">
</p>

Select "Documentation" button.

<p align="center">
<kbd><img width="446" alt="image" src="https://user-images.githubusercontent.com/116928888/205492348-3b6ede4a-aa54-4739-b1da-9f944e3f04a9.png">
</p>

You will go into the following screen where you can find the secret key at the top of the page. Copy the secret key.

<kbd>![secret key](https://user-images.githubusercontent.com/116928888/205502634-8a00b3a2-5a07-4454-8ba0-9cb6adff1146.jpg)

</details>

<details><summary>Step :four: - Store the secret key in GitHub.</summary>

## Step :four: - Store the secret key in GitHub.

Go to Settings for the repo. Select "Actions" button (left panel under "Security->Secrets").

<p align="center">
<kbd><img width="470" alt="image" src="https://user-images.githubusercontent.com/116928888/205496635-9a4ed1b3-7ffc-436c-8669-48211e58c1af.png">
</p>

Create a "New repository secret", give it a name (Mine is "my_IFTTT_Key"), add paste the secret key into the field.

<p align="center">
<kbd><img width="470" alt="image" src="https://user-images.githubusercontent.com/116928888/205492751-3991d8ed-a8c4-4040-b5f5-d5fc77912a31.png">
</p>

</details>

<details><summary>Step :five: - Create an Action in GitHub.</summary>

## Step :five: - Create an Action in GitHub.

Go to the "Actions" tab, and enter "simple workflow" in the search bar.

<p align="center">
<kbd><img width="384" alt="image" src="https://user-images.githubusercontent.com/116928888/205493046-c85f8f97-7400-486c-ac08-e0eea11d1d24.png">
</p>

Click "Configure".

<p align="center">
<kbd><img width="379" alt="image" src="https://user-images.githubusercontent.com/116928888/205493065-0ffb78b9-dd86-4505-8d45-23f905164fd2.png">
</p>

Rename the workflow (mine is "sendemail.yml").

<p align="center">
<kbd><img width="311" alt="image" src="https://user-images.githubusercontent.com/116928888/205493102-3fafcf0a-463d-4a84-a08e-b3eb42b9f4d1.png">
</p>

At the last line, add the following:

```curl -X POST -H "Content-Type: application/json" -d "{\"value1\":\"${{ github.actor }}\",\"value2\":\"${{ github.event.head_commit.message }}\"}" https://maker.ifttt.com/trigger/sendemail/with/key/${{ secrets.my_IFTTT_Key }} ```
          
NOTE:
* You may pass 3 sets of JSON key-value pairs to the command.
  * *${{ github.actor }}* refers to the person doing the commit
  * *${{ github.event.head_commit.message }}* refers to the title of the commit.
  * For Windows, the double quotations need to be escaped with a backlash.
* "sendemail" is the name of the trigger you have just set up earlier.
* "secrets:my_IFTTT_Key" is the secret key (IFTTT_Key) you have stored in GitHub.

Commit the change.

<p align="center">
<kbd><img width="340" alt="image" src="https://user-images.githubusercontent.com/116928888/205493322-dbcc5fa9-1900-452c-9ba5-3f329c13575b.png">
</p>

So, now the GitHub action is integrated to the IFTTT trigger. :fireworks: :sparkler: :tada: 

The final workflow code is [here](https://github.com/bhenggoh/ticketsDAPP/edit/main/.github/workflows/sendemail.yml)

</details>

<details><summary>Step :six: - Test the workflow :satisfied:</summary>

## Step :six: - Test the workflow :satisfied:

Now, perform a commit to any file in the repo.

An email :email: will be send to me as follows:

<p align="center">
<kbd><img width="412" alt="image" src="https://user-images.githubusercontent.com/116928888/205500994-4ef9df7e-2362-4cf0-8305-c8dca82dce9e.png">
</p>

</details>

### HAVE FUN !!!! :heart_eyes: :heart_eyes: 

<details><summary>What next :question:</summary>


Things to do (maybe .....):
> - [ ] Make a video to show the steps using Scribe
> - [X] :heavy_check_mark: Try more notification actions (eg Whatsapp message, mobile notification, SMS etc) [IFFFT doesn't support Whatsapp :sob:] 
> - [ ] Try other CI/CD actions.
> - [ ] Try Zapier

</details>
