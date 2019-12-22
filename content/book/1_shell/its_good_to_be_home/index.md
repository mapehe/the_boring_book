---
title: "It's good to be home"
description: ""
section: "2"
date: ""
---

Let's take a closer look at the bash prompt.

```shell
matias@macbook:~$
```

A typical bash prompt has the format `[user]@[hostname]:[working directory]$`. Hence, the author's example translates to: "A user called `matias` is logged
in to a computer called `macbook` and the current working directory is `~`." The symbol `~` denotes a special directory; the **home directory** of a user.

Creating directories, moving between them and deleting them are all common operations when using a computer through a graphical user interface.
Those things can also be done on the command line.

The command for creating a directory is `mkdir` (**m**a**k**e **dir**ectory).
For example, to create directory `Boring`, run `mkdir Boring`. The command for moving
to another directory, is `cd` (**c**hange **d**irectory).
For example, to enter the newly
created directory `Boring`, run `cd Boring`.

```shell
matias@macbook:~$ mkdir Boring
matias@macbook:~$ cd Boring/
matias@macbook:~/Boring$
```

Notice that after `cd` is run, the bash prompt changes. On the last line, the working directory is `~/Boring` i.e. directory `Boring` in the home directory `~`.
This simply indicates that the change directory command has worked as expected.

In addition to the home directory `~`, there are two other special directories you should be aware of: The current directory `.` and the parent directory `..`.
Hence, `cd .` does nothing and `cd ..` moves us back to `~`.

```shell
matias@macbook:~/Boring$ cd .
matias@macbook:~/Boring$ cd ..
matias@macbook:~$
```

To delete the directory `~/Boring`, run `rm -r Boring` (`rm` is **r**e**m**ove). If you try to `cd` back into it, you will get an error message saying the destination doesn't exist.

```shell
matias@macbook:~$ rm -r Boring/
matias@macbook:~$ cd Boring
-bash: cd: Boring: No such file or directory
```
