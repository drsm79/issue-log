# Issue Log
Decentralised issue tracking along side your code

## Reasons

### Avoid centralised issues for decentralised code
Keep your issues and the conversations around them next to [the code][gittorrent].

### Context switching
Stay in your code editing space, don't visit a web page!

### Offline
Create and comment on issues from the garden.

## How

 * Makes a branch (default name is `issues`)
 * `issue` will create a new issue
    * issues are a markdown file (with a default template)
    * comments on issues are held in the git log
 * `issue 123` will allow you to view issue 123
 * `issue 123 -e|--comment` will allow you to comment on issue 123
 * `issue 123 -c|--close` will close issue 123, and let you leave a comment
 * `issue --import $URL` will import issues from $URL (using github API)
 * `issue --export $URL` will export issues to $URL (using github API)
 * `issue --list` will show you all open issues

[gittorrent]: http://blog.printf.net/articles/2015/05/29/announcing-gittorrent-a-decentralized-github/ "GitTorrent: A Decentralized GitHub"
