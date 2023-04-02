const CARD_DATA = [
  {
    title: "Basic",
    price: "99",
    description:
      "Best for small business owners, startups who needs landing page for their business.",
    listItems: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
    ],
  },
  {
    title: "Premium",
    price: "199",
    description:
      "Best for medium business owners, startups who needs landing page for their business.",
    listItems: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
  },
  {
    title: "Enterprise",
    price: "399",
    description:
      "Best for large companies, business owners who needs landing page for their business",
    listItems: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
  },
];

const cardContainer = document.getElementById("card-container");

cardContainer.innerHTML = CARD_DATA.map(
  ({ title, description, price, listItems }, index) => {
    return `
  <div class="card ${index === 1 ? "card-black" : "card-white"}">
  <div class="flex flex-col gap-6 mb-6">
    <h2 class="card-title">${title}</h2>
    <span class="card-price">$${price}</span>
    <p class="card-desc">
      ${description}
    </p>
  </div>
  <button class="mb-6  ${
    index === 1 ? "black-btn" : "white-btn"
  }">Get Started</button>

  <div class="flex flex-col">
    <h3 class="md:text-base mb-5 capitalize">What is included?</h3>
    <ul class="card-list">
      ${listItems
        .map((item) => {
          return `
          <li>${item}</li>
        `;
        })
        .join("")}
    </ul>
  </div>
</div>
  `;
  }
).join(" ");
