---
title: "Microscopic"
description: ""
section: "5"
date: ""
---

Being able to edit text files on the command line is a surprisingly useful skill.
There are several text editors that can be used on the command line, most of which are too
difficult to be discussed here. Among the easier ones is `nano`.

We assume the directory `~/Boring` still exists (otherwise you'll need to `mkdir` it) and
start editing a file `~/Boring/hello.txt`. An interface that's different from the usual terminal
will appear.

```shell
matias@macbook:~$ cd ~/Boring/
matias@macbook:~/Boring$ nano hello.txt
```

**This part is a bit tricky:** In `nano`, type `Hello world!`.
Then press `Ctrl+X` (denoted `^X`) to exit. Press `Y` to confirm that
you wish to exit the file and press `Enter` to choose the default file to write to (`hello.txt`).
Afterwards you should be back to the usual terminal interface.

To verify that something has actually been written to the file you can use the command `cat` (**c**onc**at**enate).
The command `cat` prints the contents of a given text file to the terminal.

A success looks like this:

```shell
matias@macbook:~/Boring$ cat hello.txt
Hello world!
```

A failure may look like this:

```shell
matias@macbook:~/Boring$ cat hello.txt
cat: hello.txt: No such file or directory
```

Try editing the file `hello.txt` a couple of times with `nano` and then delete it with `rm hello.txt`.
You can delete the directory `~/Boring` with

```
matias@macbook:~/Boring$ cd ..
matias@macbook:~$ rm -r Boring
```
