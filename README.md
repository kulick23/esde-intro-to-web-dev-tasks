# Intro to Web Dev Tasks

A repository containing tasks for EPAM EHU course Introduction to Web Dev

[[_TOC_]]

## Project structure

`packages/` folder contains all tasks, i.e. `packages/hometask-QWERy` contains a task dedicated to QWERy project

## Tasks preview

Home tasks and Class tasks preview is available here https://epam-ehu.gitlab.io/intro-to-web-dev-tasks/

### How to configure the same for your forked repo

First follow the instructions below in order to fork current repository into your own account

Then you have to configure CI/CD pipeline. To do so, please navigate to your forked repo, go to Settings --> CI/CD (the link is something like https://gitlab.com/epam-ehu/intro-to-web-dev-tasks/-/settings/ci_cd) --> Runners section (click Expand button) --> Shared runners section --> Turn on the switcher called Enable shared runners for this project

NOTE: Gitlab might request from your account validation using your credit card. You won't be billed for this action, this is just a validation to avoid spammers/scammers/other viral activities

While on origin/master branch save, commit, and push any change to your repository.

After this step is done, please go to Settings --> Pages --> Inside the section "Your pages are served under:" there's a link to your web app with all tasks preview (i.e. https://epam-ehu.gitlab.io/intro-to-web-dev-tasks). If this path is not visible, select Deployments --> Pages

This web app is being automatically updated on every push to origin/master branch. The status is visible inside CI/CD --> Pipelines section (https://gitlab.com/epam-ehu/intro-to-web-dev-tasks/-/pipelines). If you see your commit name inside a Pipeline column and green status button Passed in a Status column - your web app has been deployed successfully. Otherwise click on status button, observe build errors and fix them in a separate commit

## How to work with tasks

### Fork current repository into your Gitlab account

- Login into your Gitlab account (the same you've used for Autocode)
- In browser navigate to https://gitlab.com/epam-ehu/intro-to-web-dev-tasks
- In top right corner click on `Fork` white button
- You will be redirected to the page https://gitlab.com/epam-ehu/intro-to-web-dev-tasks/-/forks/new
- In `Project url` section click on a dropdown `Select namespace` and choose any namespace you would like to (i.e. the same as your Gitlab name)
- Select `Visibilty level`
  - `Private` - you repository will be hidden from public
  - `Public` - your repository will be opened for other people
- Click on blue button `Fork project`

### Install locally

1. In Gitlab navigate to your projects, click on **intro-to-web-dev-tasks** project --> Repository and click on blue button `Clone`.
2. In dropdown find section **Clone with SSH** and copy that url git@gitlab.com:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@gitlab...intro-to-web-dev-tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd intro-to-web-dev-tasks` and click Enter
6. Now you should be in a folder `intro-to-web-dev-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Gitlab profile) and Surname is your Surname (same as on Gitlab profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@email.com` where `youremailaddress@email.com` is your address you used to register on Gitlab (the same as on Gitlab profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address

### Install JavaScript packages

After you've cloned repository onto your local machine, you need to install necessary JavaScript packages.

1. In console navigate to the folder where you cloned your repository to (`cd intro-to-web-dev-tasks`)
2. Now you should be in a folder `intro-to-web-dev-tasks`
3. In console type in the command `npm install` and click Enter
4. Wait for packages to be installed
5. In console type in `dir` on Windows or `ls` on MacOS, click Enter and verify there's a folder named `node_modules` exists
6. It it's so, you're done

### Configuring VSCode IDE

1. Install ESLint extension `Ctrl/Cmd +Shift + X` then type in search string eslint and select one
2. Install Prettier extension the same way
3. Configure IDE for autoformat on file save `Ctrl/Cmd +Shift + P`
   type in search string - `settings`
   select Preferences: Open User Settings (JSON)
   replace with `
   {
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.codeActionsOnSave": {
            "source.fixAll": true
        },
        "editor.formatOnSave": true
    }
}`

### Rules for commit

Please follow these rules to give a proper name to your commits.

Commit message common pattern: `{feat|fix}(ESDU-{taskNumber}): {body of a commit message}`

If you're adding a new code/solution/etc, please consider that as `feat` - feature. {taskNumber} - that's your module number (01 - for QWERy hometask, etc). For example:

```
feat(ESDU-01): add initial markup
feat(ESDU-01): add markup for header
feat(ESDU-02): add markup for footer
```

If you're fixing some issue for already pushed code/solution/etc, please consider that as `fix` - a bugfix or just a fix. {taskNumber} - that's your module number (01 - for QWERy hometask, etc). For example:

```
fix(ESDU-01): fix header layout
```

### Running by simply opening index.html in browser

- Open package with a task you would like to work with i.e `packages/hometask-QWERy`
- Open file `index.html` in browser
  - In Visual Studio Code right click on index.html -> Copy Path
  - Open browser and paste copied path as an url (i.e. `D://Proejcts/intro-to-web-dev-tasks/packages/classtask-YuliaVorman/index.html`)
- Enjoy

Why not to use that approach - every time you're making changes you have to reload your page manually

Why to use - simply you don't want to deal with NPM and JavaScript or there might be any issues currently with it

### Running using NPM and JavaScript (Preferred)

- Open console
- In console navigate to the project root (`./intro-to-web-dev-tasks`)
- Run `npm install` if you didn't install packages earlier
- Navigate to the task i.e. `cd packages/classtask-YuliaVorman`
- Run `npm run serve`
- Either click the link in the console or open browser and navigate to `http://localhost:8080/`
- Enjoy

Why to use - every time you make a change your page is automatically reloaded and your changes applied

Why not to use - you don't want to deal with NPM and JavaScript or there might be any issues currently with it

## How to get new tasks into your repository

### One-time installation step

Please add remote branch linking into your local git

#### Console

To do this, please in console run commands

```
git remote rm upstream

git remote add upstream git@gitlab.com:epam-ehu/intro-to-web-dev-tasks.git
```

#### Visual Studio Code

In Source Control menu click on three dots -> Remote -> Add remote -> Paste git@gitlab.com:epam-ehu/intro-to-web-dev-tasks.git -> Enter upstream

**NOTE** You might need to remove previously created upstream. In Source Control menu click on three dots -> Remote -> Remove remote -> upstream.

### How to start solving new tasks (get new branches into your Git)

#### Console

When the linking is created (see instructions above), run command `git fetch upstream` to get a new branch with tasks.

Type `git branch -a` to ensure you see in a list lines like `remotes/upstream/tasks-...`.

Assuming the new branch (with new tasks you haven't solved yet) is `tasks-02-simple-tasks`.

Type `git switch tasks-02-simple-tasks`. If you see two messages

```
Branch 'tasks-02-simple-tasks' set up to track remote branch 'tasks-02-simple-tasks' from 'upstream'
Switched to a new branch 'tasks-02-simple-tasks'
```

Then you did it correctly.

Now the next step is to publish that branch into your Git repository (origin). Run command `git push -u origin`. You should see a list of messages containing that line:

```
...
To gitlab.com:YOUR_NAME/intro-to-web-dev-tasks.git
* [new branch]     tasks-02-simple-tasks -> tasks-02-simple-tasks
...
```

You're done, now you could write solutions for your task.

#### Visual Studio Code

Now when the linking is created, In Source Control menu click on three dots -> Pull, Push -> Fetch From All Remotes menu item to get a new branch with tasks.

Then checkout/switch to that branch (`upstream/tasks-...`)

Now you could create your solution locally.

To prepare for Autocode submit please push your local branch into your repository. In Source Control menu click on three dots -> Pull, Push -> Push to... -> Select **origin (not upstream)**

### How to get tasks updates

#### Console

Sometimes there are improvements in already published tasks. To get new changes from upstream repository you should use `git pull` command.

For example, let's assume there are some updated in `upstream/tasks-02-simple-tasks` branch. Run in console `git pull upstream tasks-02-simple-tasks` to pull recent changes from remote branch into your local repository.
