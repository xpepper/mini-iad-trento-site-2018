http://www.agileday.it/mini/2018/trento/

## Deploy
First, get a valid .pem certificate to be able to connect to the machine where the site is published (through a git repository and a deploy automation).

Then, add this line to your `~/.ssh/config` file:

```
Host  54.154.31.160
    Hostname 54.154.31.160
    User miniiad
    IdentityFile ~/.ssh/miniiad.pem
```

Also, you'll need to add this remote to your local git repository

```
git remote add live ssh://miniiad@54.154.31.160/home/miniiad/mini2018trento.git

```

To deploy, just issue a `git push live master` command.
