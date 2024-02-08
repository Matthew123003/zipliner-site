# Zipliner Site Kit

A starter kit for emergency information websites. (WIP) ([Demo Site](https://emergency-site.netlify.app/))

In case of emergency, many organizations need a quick way to publish critical information. Existing CMS websites are often unable to handle sudden spikes in traffic, and local network infrastructure might be damaged, leaving those affected with poor mobile connections.

This project aims to enable people to quickly publish a simple website that can withstand large amounts of traffic and will work even under extreme conditions. It is built on the [rule of least power](https://en.wikipedia.org/wiki/Rule_of_least_power), using simple technologies for maximum resilience.

For more information about this project, watch [the talk at Inclusive Design 24](https://noti.st/mxb/a1xCB1).

## Features

* Static files generated by [Eleventy](https://11ty.dev)
* Optimized for first connection roundtrip (> 14KB)
* Basic styling for accessibility
* One critical request, inlined CSS
* [Netlify CMS](https://www.netlifycms.org/) for content editing
* Offline support with service worker

## Getting Started

To publish a website with this template, there are two options, depending on your technical skillset. Choose which one describes you best:

* [I'm not a developer](https://github.com/maxboeck/emergency-site/blob/master/src/posts/2020-03-20-getting-started.md#no-code-setup), I just want to set up a website
* [I have basic knowledge](https://github.com/maxboeck/emergency-site/blob/master/src/posts/2020-03-20-getting-started.md#advanced-setup) of how to use `npm` and the command line 

Read the [Getting Started Docs](https://github.com/maxboeck/emergency-site/blob/master/src/posts/2020-03-20-getting-started.md)

## Configuration

It's possible to customize some parts of the website through environment variables. You can set these up on your local machine in an `.env` file or define them through the Netlify admin interface.

The available settings are:

<table>
    <thead>
        <tr><th>Name</th><th>Description</th><th>Example</th><th>Default</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><code>META_TITLE</code></td>
            <td>the title of your site</td>
            <td>COVID-19 Information</td>
            <td>Emergency Site</td>
        </tr>
        <tr>
            <td><code>META_URL</code></td>
            <td>the full url of your site</td>
            <td>https://www.covid19.org</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td><code>META_DESC</code></td>
            <td>a short description of your site</td>
            <td>Updates on the current state of the pandemic.</td>
            <td>An emergency information website.</td>
        </tr>
        <tr>
            <td><code>META_LANG</code></td>
            <td>the 2-letter <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">language code</a> of your site</td>
            <td>de</td>
            <td>en</td>
        </tr>
        <tr>
            <td><code>META_COLOR</code></td>
            <td>the primary color <a href="https://www.color-hex.com/">hex code</a> (optional)</td>
            <td>#1D70B8</td>
            <td>#DB0000</td>
        </tr>
        <tr>
            <td><code>META_EMAIL</code></td>
            <td>your main contact email (optional)</td>
            <td>contact@covid19.org</td>
            <td>N/A</td>
        </tr> 
        <tr>
            <td><code>META_TELEPHONE</code></td>
            <td>your main contact phone number (optional)</td>
            <td>+01 23 456 789 00</td>
            <td>N/A</td>
        </tr> 
    </tbody>   
</table>

## One-Click Deployment

The easiest way to go live is by forking this repo and deploying it to Netlify.  
You can do that by clicking this button:  

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/emergency-site) 

## Local Development

To run this locally, you need to install [Node](https://nodejs.org/en/) first.  
You can run these on the command line in the root of your project:

* `npm start`: starts development server
* `npm run build`: generates a production build
* `npm run debug`: runs eleventy with debug output

To customize the site, edit `src/data/meta.js` with your details, or set the corresponding environment variables. Replace the markdown files in `src/posts` with your content.
