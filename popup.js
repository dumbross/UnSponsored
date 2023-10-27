document.addEventListener('DOMContentLoaded', function() {
    var toggleSwitch = document.getElementById('toggleSwitch');
  
    chrome.storage.sync.get('enabled', function(data) {
      var isEnabled = data.enabled;
  
      if (isEnabled === undefined) {
        isEnabled = true; // Default to true if the value is not set
      }
  
      toggleSwitch.checked = isEnabled; // Set the toggle state in the popup
    });
  
    toggleSwitch.addEventListener('change', function() {
      var isEnabled = toggleSwitch.checked;
      chrome.storage.sync.set({enabled: isEnabled});
  
      // Send a message to the content script to apply changes
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {enabled: isEnabled});
      });
    });
  });
  