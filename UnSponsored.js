function hideSponsoredElements() {
    let sponsoredElements = document.querySelectorAll('[data-text-ad="1"]');
    sponsoredElements.forEach(element => {
        element.style.display = 'none';
    });

    console.log('Number of sponsored elements hidden:', sponsoredElements.length);
}

hideSponsoredElements();
