chrome.storage.sync.get('enabled', function(data) {
  var isEnabled = data.enabled;
  if (isEnabled === undefined) {
    isEnabled = true; // Default to true if the value is not set
  }

  if (isEnabled) {
    hideSponsoredElements();
  }
});

function hideSponsoredElements() {
  // Select elements with data-text-ad="1"
  let textAdElements = document.querySelectorAll('[data-text-ad="1"]');
  textAdElements.forEach(element => {
    element.style.display = 'none';
  });

  // Select elements with data-is-ad="1"    <---------------------------This attr will find sponsored links in mapview short list
  let isAdElements = document.querySelectorAll('[data-is-ad="1"]');
  isAdElements.forEach(element => {
    element.style.display = 'none';
  });

  console.log('Number of text ad elements hidden:', textAdElements.length);
  console.log('Number of is-ad elements hidden:', isAdElements.length);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.enabled) {
    hideSponsoredElements();
  } else {
    showSponsoredElements();
  }
});

function showSponsoredElements() {
  // Select elements with data-text-ad="1"
  let textAdElements = document.querySelectorAll('[data-text-ad="1"]');
  textAdElements.forEach(element => {
    element.style.display = 'block'; // Assuming "block" is the default display for these elements
  });

  // Select elements with data-is-ad="1"
  let isAdElements = document.querySelectorAll('[data-is-ad="1"]');
  isAdElements.forEach(element => {
    element.style.display = 'block';
  });

  console.log('Number of text ad elements shown:', textAdElements.length);
  console.log('Number of is-ad elements shown:', isAdElements.length);
}
