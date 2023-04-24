// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  if (!window) return;
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log('isSupportFlexGap:', isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

export default checkFlexGap;