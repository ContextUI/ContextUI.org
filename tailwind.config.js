import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  plugins: [
    forms,
    typography,
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
