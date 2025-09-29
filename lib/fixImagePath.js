// lib/fixImagePath.js

/**
 * Ensures the image path starts with '/assets/images/' only once.
 * @param {string} path - The image path to fix.
 * @returns {string} - The normalized image path.
 */
export default function fixImagePath(path) {
  if (!path) return '';
  // Remove all repeated /assets/images/ at the start
  let fixed = path.replace(/^(\/assets\/images\/)+/, '/assets/images/');
  // If it doesn't start with /assets/images/, add it
  if (!fixed.startsWith('/assets/images/')) {
    fixed = '/assets/images/' + fixed.replace(/^\/+/, '');
  }
  return fixed;
}
