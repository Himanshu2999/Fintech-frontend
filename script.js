// ============================================
// FINTECH WEBSITE - JAVASCRIPT
// This file makes the FAQ section open and close
// ============================================

// Find every FAQ question button on the page
const faqQuestions = document.querySelectorAll(".faq-question");

// Loop through each question and listen for clicks
faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    // Get the parent ".faq-item" box that contains this question
    const faqItem = question.closest(".faq-item");

    // Toggle the "open" class on/off
    // When "open" is present, our CSS shows the answer
    faqItem.classList.toggle("open");
  });
});
