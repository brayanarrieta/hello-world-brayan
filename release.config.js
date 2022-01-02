module.exports = {
    branches: [
        'main',
        {
            name: 'beta-new',
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md'
            }
        ],
        ["@semantic-release/npm", {
            "tarballDir": "release"
        }],
        ["@semantic-release/github", {
            "assets": "release/*.tgz"
        }],
        [
            '@semantic-release/git',
            {
                assets: [
                    'CHANGELOG.md',
                    'package.json',
                    'package-lock.json'
                ],
                message: 'chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
            }
        ],
        [
            "@saithodev/semantic-release-backmerge",
            {
              "branches": ["develop"],
              "plugins": [
                [
                  "@semantic-release/exec",
                  {
                    "successCmd": "echo 'Version in develop is ${nextRelease.version}'"
                  }
                ]
              ]
            }
          ]
    ]
}