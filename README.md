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
   iv. Run `npm install` in that particular directory (this directory must contain `package.json` file, as it states all the dependencies alongside their respective versions, required for project).  
   v. To verify run `npm list` to ensure that all dependencies were installed correctly.  
   vi. After this `cd path/to/your/project` and run `node index.js`.

Note: Ensure that you have installed `node` on your machine.  
 : If you encounter this :

```
    (node:2806) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)

```

    This is due to issue in deprecated punycode module in `jsdom`.
    For more information, refer to https://github.com/jsdom/jsdom/issues/3613 .

    After running, the converted result will be displayed in console of running terminal and console of webpage showing converted query.

---

### Accessing remotely

Now this can be done using `ngrok` or any other service that provides "tunnel" : a pathway through which internel traffic can be sent to one network to another.  
Here is how you can achieve remote access or connect your localhost web address to internet via `cloudflared` , without directly exposing it to external networks.   
1. First download and install ``` cloudflared ```  for your respective operating system from their official site. You can refer to this for more information https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/ .   
2. After installing, you can directly run ``` cloudflared tunnel --url http://localhost:3000 ``` in your terminal, note that you can change your port from 3000 to which your project is running on.   
```                      +--------------------------------------------------------------------------------------------+
                         |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
                         |  https://some-unique-string-here-example.trycloudflare.com                                 |
                         +--------------------------------------------------------------------------------------------+
```    
3. This will give you a global url that will work until you kill the process running in your terminal in which you ran (2), now anyone can access your website globally via this url.   

Note: This will be as I mentioned temporary. Each time you kill the process will need to generate a new url to work again.   
