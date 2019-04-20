# rebot
Repository Maintenance Bot

Rebot tests and injects repository things. It is centered around conventions rather than configuration the usage will be ```npm rebot my-repo``` at which point it will check for screenshot, LICENSE (incl package.json), make suggestions in regards to gh_pages and stuff like that. It may become a device for unfurling boilerplates into new repos as well, this would work as following ``npx rebot init cli```, or ```npx rebot init electron```. We already have bower and the like but this one is convention over configuration.


## Primary Pipe

OUTSPOKEN:

- Configure Server
  * port: 8081
- Validate configuration object using is-valid-object.
  * fields: repository, commitMessage, isNpm
  * dropPacket: true
- Check if this is a valid github repository using is-github-repo.
- Ensure local availability of git repository using git-get.
- Update NPM Package using npm-update
- Update NPM License using npm-license
- Perform NPM Audit using npm-audit
- Update LICENSE file using gpl-license
- Update npm
- Update github
- Tweet about package update

END.
