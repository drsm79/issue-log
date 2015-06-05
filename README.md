# Issue Log
Decentralised issue tracking along side your code

## Reasons

### Centralised decentralised code
Keep your issues and the conversations around them next to the code

### Context switching
Stay in your code editing space, don't visit a web page!
## How

 * Makes a branch (default name is `issues`)
 * `issue` will create a new issue
    * issues are a markdown file (with a default template)
    * comments on issues are held in the git log
 * `issue 123` will allow you to view issue 123
 * `issue 123 -e` will allow you to comment on issue 123
 * `issue 123 --close` will close issue 123, and let you leave a comment
 * `issue --import $URL` will import issues from $URL (using github API)
 * `issue --export $URL` will export issues to $URL (using github API)
 * `issue --list` will show you all open issues
