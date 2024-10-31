---
sidebar_position: 4
---

# Maintenance Guidelines

## Submission

```ts
/**
 * feature: New feature
 * update: Update a certain feature
 * fix: Fix a certain feature
 * refactor: Refactor a certain feature
 * optimize: Optimize build tools or runtime performance
 * style: Only style changes
 * docs: Only document additions/changes
 * chore: Changes to the build process or auxiliary tools
 */
```

## Comment Style

```ts
/**
 * Returns false
 * @param T Any string
 * @returns false
 */
function getTest(T: string) {
  return false
}
```

## Naming Convention

```ts
// Get test value
function getTest(T: string) {}
// Set
function setTest(T: string) {}
// Delete
function delTest(T: string) {}
//  Get data by id
function getDataById(T: string) {}

// System constants
const ENV_TEST = 'dev'

// Local constants
const MyName = 'alemonjs'

// Modifiable variable
let values = ''

// Avoid using var values = ''

// Declare array
const Arr = []

// Not recommended new

// Declare object
const Obj = {}

// Not recommended new
```
