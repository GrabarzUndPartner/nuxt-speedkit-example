async function polyfills () {
  if (!('IntersectionObserver' in global)) {
    await import('intersection-observer');
  }

  if (!('objectFit' in document.documentElement.style)) {
    await import('object-fit-images');
  }

  if (!('HTMLPictureElement' in global || 'picturefill' in global)) {
    await import('picturefill');
    await import('picturefill/dist/plugins/mutation/pf.mutation.js');
  }
}

polyfills();
