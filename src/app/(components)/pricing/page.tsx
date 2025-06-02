"use client";

import { useState } from "react";
import {
  Check,
  Star,
  Crown,
  Zap,
  Shield,
  Headphones,
  ArrowRight,
} from "lucide-react";

const PricingComponent = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 1999,
      yearlyPrice: 1499,
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      features: [
        "Up to 5 team members",
        "3 project boards",
        "Kanban view",
        "Manual time tracking",
        "Email support",
        "Basic reporting",
      ],
    },
    {
      name: "Professional",
      description: "Best for growing teams and businesses",
      monthlyPrice: 7499,
      yearlyPrice: 5499,
      icon: <Crown className="w-6 h-6" />,
      popular: true,
      features: [
        "Up to 25 team members",
        "Unlimited projects",
        "All 5 views (Kanban, Gantt, Calendar, Table, Timeline)",
        "Automatic time tracking",
        "Advanced workload management",
        "Priority email & chat support",
        "Advanced analytics & reporting",
        "Custom fields & templates",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 9999,
      yearlyPrice: 7499,
      icon: <Shield className="w-6 h-6" />,
      popular: false,
      features: [
        "Unlimited team members",
        "All premium features",
        "24/7 phone & chat support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment",
        "Custom training & onboarding",
        "SLA guarantee",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing accordingly.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "Our 14-day free trial includes full access to all Professional plan features with no credit card required. You can invite your entire team and test all functionality.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees, ever. We believe in transparent pricing with no hidden costs. What you see is what you pay.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your data remains accessible during your current billing period.",
    },
  ];

  const getPrice = (plan: any) => {
    return billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice * 12;
    const savings = monthlyCost - yearlyCost;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <div className="bg-gray-50 py-20">
      {/* Pricing Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Transparent
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
              Pricing for Every Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises. Cancel
            anytime with full data export.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
              <div className="flex items-center">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    billingPeriod === "monthly"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                    billingPeriod === "yearly"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular
                  ? "border-purple-500 scale-105"
                  : "border-gray-200 hover:border-purple-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ₹{getPrice(plan)}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <div className="text-green-600 text-sm font-semibold mt-2">
                      Save {getSavings(plan)}% with yearly billing
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transform hover:-translate-y-1"
                      : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Contact Sales"
                    : "Start Free Trial"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Everything included:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by thousands of teams worldwide
            </h3>
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900">
                    SOC 2 Compliant
                  </div>
                  <div className="text-sm text-gray-600">
                    Enterprise security
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Headphones className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="font-semibold text-gray-900">
                    24/7 Support
                  </div>
                  <div className="text-sm text-gray-600">
                    Always here to help
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Check className="w-8 h-8 text-purple-500" />
                <div>
                  <div className="font-semibold text-gray-900">
                    99.9% Uptime
                  </div>
                  <div className="text-sm text-gray-600">Reliable & fast</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                <div>
                  <div className="font-semibold text-gray-900">
                    4.9/5 Rating
                  </div>
                  <div className="text-sm text-gray-600">
                    Customer satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about TaskFlow Pro pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who have transformed their project
              management with TaskFlow Pro. Start your free trial today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
