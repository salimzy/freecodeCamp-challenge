
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(
    ".step-1, .step-2, .step-3, .step-4, .step-5"
  );

  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });

    // When entering step 4 → update summary
    if (index === 3) {
      updateSummary();
    }
  }

  showStep(currentStep);

  // Buttons
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.textContent.toLowerCase();

      if (text.includes("next")) {
        currentStep++;
        showStep(currentStep);
      }

      if (text.includes("back")) {
        currentStep--;
        showStep(currentStep);
      }

      if (text.includes("confirm")) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  // Pricing
  const prices = {
    arcade: { monthly: 9, yearly: 90 },
    advanced: { monthly: 12, yearly: 120 },
    pro: { monthly: 15, yearly: 150 },
    addons: {
      online: { monthly: 1, yearly: 10 },
      storage: { monthly: 2, yearly: 20 },
      profile: { monthly: 2, yearly: 20 }
    }
  };

  function updateSummary() {
    const isYearly = document.getElementById("range").checked;

    let billing = isYearly ? "yearly" : "monthly";
    let total = 0;

    let summaryHTML = "<h4>Summary</h4>";

    // Plan
    let selectedPlan = null;

    if (document.getElementById("arcade").checked) {
      selectedPlan = "arcade";
    } else if (document.getElementById("advanced").checked) {
      selectedPlan = "advanced";
    } else if (document.getElementById("pro").checked) {
      selectedPlan = "pro";
    }

    if (selectedPlan) {
      let price = prices[selectedPlan][billing];
      total += price;

      summaryHTML += `<p><strong>${selectedPlan.toUpperCase()}</strong> - $${price}/${billing === "monthly" ? "mo" : "yr"}</p>`;
    }

    // Add-ons
    if (document.getElementById("online-service").checked) {
      let price = prices.addons.online[billing];
      total += price;
      summaryHTML += `<p>Online Service +$${price}</p>`;
    }

    if (document.getElementById("larger").checked) {
      let price = prices.addons.storage[billing];
      total += price;
      summaryHTML += `<p>Larger Storage +$${price}</p>`;
    }

    if (document.getElementById("customizable").checked) {
      let price = prices.addons.profile[billing];
      total += price;
      summaryHTML += `<p>Custom Profile +$${price}</p>`;
    }

    // Display
    document.getElementById("summary").innerHTML = summaryHTML;

    document.getElementById("total").textContent =
      "Total: $" + total + "/" + (billing === "monthly" ? "mo" : "yr");
  }
});

