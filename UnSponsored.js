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
    let sponsoredElements = document.querySelectorAll('[data-text-ad="1"]');
    sponsoredElements.forEach(element => {
      element.style.display = 'none';
    });
  
    console.log('Number of sponsored elements hidden:', sponsoredElements.length);
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.enabled) {
      hideSponsoredElements();
    } else {
      showSponsoredElements();
    }
  });
  
  function showSponsoredElements() {
    let sponsoredElements = document.querySelectorAll('[data-text-ad="1"]');
    sponsoredElements.forEach(element => {
      element.style.display = 'block'; // Assuming "block" is the default display for these elements
    });
  
    console.log('Number of sponsored elements shown:', sponsoredElements.length);
  }
  