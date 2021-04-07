
async function polfills(){

  if (!('objectFit' in document.documentElement.style)) {
    await import('object-fit-images')
  }


  if (!('HTMLPictureElement' in global || 'picturefill' in global)) {
    await import('picturefill')
    await import('picturefill/dist/plugins/mutation/pf.mutation.js')
  }

  if (!('IntersectionObserver' in global)) {
    import('intersection-observer')
  }

}

polfills();
