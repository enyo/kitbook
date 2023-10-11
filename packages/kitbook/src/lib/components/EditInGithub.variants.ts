import type Component from './EditInGithub.svelte'
import type { Variants } from '$lib'

export const variants: Variants<Component> = [
  {
    name: 'With githubUrl context',
    props: {
      path: '/src/lib/components/EditInGithub.svelte',
    },
    contexts: [
      { key: 'githubUrl', context: 'https://github.com/jacob-8/kitbook/tree/main/packages/kitbook' },
    ],
  },
  {
    name: 'Without githubUrl context',
    description: 'Should not show anything',
  },
]
