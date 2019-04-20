export default function program(options) {

  console.log(`I'll be performing maintenance on ${options.repository}`)

  let program = `

    Program Information
    This program is writen in outspoken, see https://github.com/fantasyui-com/outspoken

    Start

        1. Validate configuration object using is-valid-object.
           fields: repository, commitMessage, isNpm

        2. Check if this is a valid github repository using is-github-repo.
           repository: ${options.repository}

        3. Goto Update Repository

    Update Repository

        1. Ensure local availability of git repository using git-get.

        2. Update NPM Package using npm-update

        3. Update NPM License using npm-license

        4. Perform NPM Audit using npm-audit

        5. Update LICENSE file using gpl-license

        6. Update npm

        7. Update github

        8. Tweet about package update

  `;

  const results = outspoken(program, options);

  // Results must be a simple array
  console.log(results);

}
