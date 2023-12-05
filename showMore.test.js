describe('Toggle Show More/Show Less functionality', () => {
    // Mocking the HTML structure
    beforeEach(() => {
      document.body.innerHTML = `
        <!-- Your HTML structure here -->
        <p id="read-more" style="color:#00A8B6">Show More ↓</p>
        <span class="extended-part-span"></span>
        <p class="extended-part"></p>
      `;
    });
  
    // Test for toggling show more/show less functionality
    test('Should toggle classes and text content on click', () => {
      const showMoreBtn = document.querySelector("#read-more");
  
      // Simulate a click event
      showMoreBtn.click();
  
      // Check if classes are toggled
      expect(document.querySelector('.extended-part-span').classList.contains('extended-part-span--show')).toBe(true);
      expect(document.querySelector('.extended-part').classList.contains('extended-part--show')).toBe(true);
      // Check if text content changes
      expect(showMoreBtn.textContent).toBe('Show Less ↑');
  
      // Simulate another click event
      showMoreBtn.click();
  
      // Check if classes are toggled back
      expect(document.querySelector('.extended-part-span').classList.contains('extended-part-span--show')).toBe(false);
      expect(document.querySelector('.extended-part').classList.contains('extended-part--show')).toBe(false);
      // Check if text content changes back
      expect(showMoreBtn.textContent).toBe('Show More ↓');
    });
  });