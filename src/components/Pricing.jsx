// Static pricing configuration
// This data-driven approach keeps pricing content separate from UI logic,
// making it easy to update plans without touching the component itself.
const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    // Controls visual emphasis for this plan
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for growing businesses",
    // Optional badge used to visually highlight the recommended plan
    badge: "Most Popular",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    highlighted: false,
  },
];

// Pricing section component
// Responsible only for presentation — no business logic or side effects.
export default function Pricing() {
  return (
    // Section wrapper with responsive padding
    <section className="py-20 px-6 lg:px-8">
      <div>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            {/* Animated headline with gradient text for visual emphasis */}
            <h1 className="text-5xl sm:text-3xl md:text-4xl  font-bold lg:text-5xl xl:text-6xl  mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className=" bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Simple, Transparent
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent  block mb-1 sm:mb-2">
                Pricing Plans
              </span>
            </h1>

            {/* Intentionally empty h2 reserved for future semantic or design needs */}

            {/* Supporting subtitle */}
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Iterate over pricing plans to generate cards */}
            {plans.map((plan) => (
              <div
                // Using plan name as key (acceptable here due to static, unique data)
                key={plan.name}
                className={`relative flex  hover:bg-[#0f1630] duration-700 flex-col rounded-2xl border bg-gray-900/60 backdrop-blur-sm p-8 transition-all ${
                  // Highlighted plan receives stronger visual emphasis
                  plan.highlighted
                    ? "border-blue-500 scale-105 shadow-xl"
                    : "border-gray-700/50"
                }`}
              >
                {/* Main card content */}
                <div>
                  {/* Optional badge for featured plan */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                      ⭐ {plan.badge}
                    </div>
                  )}

                  {/* Plan title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Short plan description */}
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  {/* Pricing display */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-300"
                      >
                        {/* Checkmark icon */}
                        <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action button
                  mt-auto pushes it to the bottom of the card for consistent alignment */}
                <button
                  className={`mt-auto w-full rounded-lg py-3 font-semibold hover:py-3.5 transition-all ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
           <div className=" py-10  text-center">
        <p>Need a custom plan?  <a className=" text-blue-400" href="">Contact our sales team</a></p>
      </div>
      </div>
    </section>
  );
}
