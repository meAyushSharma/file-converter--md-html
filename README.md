# file-converter--md-html

This project aims to provide easy conversion between html and markdown.

### Installation and implementation

---

1. Installation via npm :
   ` npm i file-converter--md-html`
   This will install all the necessary dependencies in your system.
   Locate the "index.js" file :
   `your-root-folder/node_modules/file-converter--md-html/index.js`
   Open terminal in file-converter--md-html directory and run :
   `node index.js`


2. Setting up locally via git :
   i. Fork the repo, it will create copy of this repo in your github.
   ii. Clone the repo. [you can skip the (i.) step and directly start with (ii.) as well.]
   iii. In your local repository/directory, run `git clone your-copied-url-here` in terminal opened in that particular directory.
   iv. Run `npm install` in that particular directory (this directory must contain `package.json` file, as it states all the dependencies alongside their respective versions, required for project.)
   v. To verify run `npm list` to ensure that all dependencies were installed correctly.
   vi. After this ``` cd path/to/your/project ``` and run ``` node index.js ```.

Note: Ensure that you have installed ``` node ``` on your machine.
    : If you encounter this :

```
    (node:2806) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)

```

    This is due to issue in deprecated punycode module in `jsdom`.
    For more information, refer to https://github.com/jsdom/jsdom/issues/3613 .

    After running, the converted result will be displayed in console of running terminal and console of webpage showing converted query.