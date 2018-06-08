# rebot
Repository Maintenance Bot

Rebot tests and injects repository things. It is centered around conventions rather than configuration the usage will be ```npm rebot my-repo``` at which point it will check for screenshot, LICENSE (incl package.json), make suggestions in regards to gh_pages and stuff like that. It may become a device for unfurling boilerplates into new repos as well, this would work as following ``npx rebot init cli```, or ```npx rebot init electron```. We already have bower and the like but this one is convention over configuration.
