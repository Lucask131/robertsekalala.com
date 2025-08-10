// Get the link element with the ID 'contactid'
const link = document.getElementById('contactid');

// Add an event listener to the link to trigger when clicked
link.addEventListener('click', function(event) {
  // Prevent the default link behavior (e.g., navigating to a new page)
  event.preventDefault();

  // Get the next sibling element of the link (assumed to be the modal)
  const modal = link.nextElementSibling;

  // Display the modal by setting its display style to 'block'
  modal.style.display = 'block';

  // Position the modal below the link by setting its top style
  modal.style.top = (link.offsetTop + link.offsetHeight) + 'px';

  // Position the modal horizontally aligned with the link by setting its left style
  modal.style.left = link.offsetLeft + 'px';

  // Get the close button element within the modal
  const closeButton = modal.querySelector('.close');

  // Add an event listener to the close button to trigger when clicked
  closeButton.addEventListener('click', function() {
    // Hide the modal by setting its display style to 'none'
    modal.style.display = 'none';
  });

  // Add an event listener to the document to trigger when clicked
  document.addEventListener('click', function handler(event) {
    // Check if the click target is not the modal or the link
    if (!modal.contains(event.target) && event.target !== link) {
      // Hide the modal by setting its display style to 'none'
      modal.style.display = 'none';

      // Remove the event listener to prevent multiple listeners from being added
      document.removeEventListener('click', handler);
    }
  });
});