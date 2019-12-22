---
title: "Tabbin'"
description: ""
section: "4"
date: ""
---

Let's recreate the directory `~/Boring`.

```shell
matias@macbook:~$ mkdir Boring
```

Now type `cd Bo` **without** pressing `Enter` and press `Tab` instead. If there are no other
directories in `~` whose name starts with `Bo`, your command will autocomplete to `cd Boring/`.
If there are several options e.g. `Boring` and `Boring2`, pressing `Tab` a couple of times will display the possible completions:

```shell
matias@macbook:~$ mkdir Boring2
matias@macbook:~$ cd Boring
Boring/  Boring2/
matias@macbook:~$ cd Boring

```

Autocomplete also works with a variety of commands other than `cd` and you should make it a habit to try once in a while if pressing `Tab` will save you some
typing.
