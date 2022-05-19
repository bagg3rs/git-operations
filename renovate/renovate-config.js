module.exports = {
    branchPrefix: 'renovate/',
    dryRun: false,
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: true,
    platform: 'github',
    includeForks: true,
    repositories: [
      'bagg3rs/git-ops',
    ],
    packageRules: [
      {
        dependencyDashboardApproval: false,
        stabilityDays: 0,
      },
    ],
  };
