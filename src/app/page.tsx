"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  CheckSquare,
  Users,
  BarChart2,
  Smartphone,
  Zap,
  Menu,
  X,
  ArrowRight,
  Play,
  Star,
  Calendar,
  TrendingUp,
} from "lucide-react";

const TaskManagementWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Kanban Board",
      description:
        "Visual task management with drag-and-drop Kanban boards. Organize workflows, track progress, and boost team productivity effortlessly.",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Gantt Chart Timelines",
      description:
        "Create detailed project timelines with interactive Gantt charts. Visualize dependencies, milestones, and critical paths.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar & Table Views",
      description:
        "Switch between calendar and table views with advanced analytics. Filter, sort, and analyze your projects from every angle.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workload Management",
      description:
        "Balance team capacity with intelligent workload distribution. Prevent burnout and optimize resource allocation across projects.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Auto & Manual Timesheets",
      description:
        "Automatic time tracking with manual override options. Accurate billing and productivity insights with zero effort.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description:
        "Deep insights into team performance, project profitability, and time allocation with customizable reports and dashboards.",
    },
  ];

  const stats = [
    { number: "5+", label: "Powerful Views" },
    { number: "100%", label: "Automatic Tracking" },
    { number: "50%", label: "Time Savings" },
    { number: "∞", label: "Projects" },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Startup Founder",
      company: "TechStart",
      content:
        "Finally found a tool that combines everything we need. The Gantt charts and workload management are game-changers for our growing team.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Project Manager",
      company: "Creative Agency",
      content:
        "The automatic timesheet feature alone saves us 10 hours per week. The multiple views help us stay organized and meet all our deadlines.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Team Lead",
      company: "Development Studio",
      content:
        "Best project management tool we've used. The Kanban boards are intuitive and the analytics help us make better decisions every day.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                TimeNote Pro
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Reviews
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Contact
                </a>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Features
              </a>
              <a
                href="pricing"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
              <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                Manage Projects Better
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From Kanban boards to Gantt charts, automatic timesheets to
              workload management - get all the tools your team needs in one
              powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 font-semibold flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 border border-gray-200">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">
                    TimeNote Pro Dashboard
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckSquare className="w-6 h-6 text-purple-600" />
                        <h3 className="font-semibold text-gray-900">
                          Kanban Board
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                      <p className="text-sm text-gray-500">Tasks in progress</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart2 className="w-6 h-6 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">
                          Gantt Timeline
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                      <p className="text-sm text-gray-500">Active projects</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-6 h-6 text-green-600" />
                        <h3 className="font-semibold text-gray-900">
                          Auto Timesheet
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">42.5h</p>
                      <p className="text-sm text-gray-500">This week</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-6 h-6 text-orange-600" />
                        <h3 className="font-semibold text-gray-900">
                          Workload
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">85%</p>
                      <p className="text-sm text-gray-500">Team capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Five Powerful Views, One Complete Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visual Kanban boards to detailed Gantt charts - manage every
              aspect of your projects with the flexibility your team needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Teams Choose TimeNote Pro
            </h2>
            <p className="text-xl text-purple-100">
              The most comprehensive project management solution for growing
              teams
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product Screenshots
            </h2>
            <p className="text-xl text-gray-600">
              Explore the intuitive interface and powerful features of TimeNote
              Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <img
                src="/ProjectKanban.png"
                alt="TimeNote Pro dashboard interface"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Main Dashboard</h3>
                <p className="text-gray-600">
                  Complete project overview with real-time updates and progress
                  tracking with drag-and-drop functionality
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <img
                src="/Workload.png"
                alt="TimeNote Pro analytics screen"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Project Workload Analytics
                </h3>
                <p className="text-gray-600">
                  Comprehensive performance insights
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <img
                src="/Timesheet.png"
                alt="TimeNote Pro task management interface"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Timesheet Management
                </h3>
                <p className="text-gray-600">
                  Timesheet management with advance features to auto log the
                  timesheet without user intervention
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <img
                src="/UserDetails.png"
                alt="TimeNote Pro time tracking screen"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">User Management</h3>
                <p className="text-gray-600">Manage Users data and roles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Early Users Are Already Seeing Results
            </h2>
            <p className="text-xl text-gray-600">
              See what teams are saying about TaskFlow Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Project Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the teams who are already experiencing better productivity with
            TimeNote Pro's comprehensive solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold">
              Start Your Free Trial Today
            </button>
            {/* <button className="border-2 border-purple-300 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 font-semibold">
              See All Features
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                TimeNote Pro
              </div>
              <p className="text-gray-400 mb-4">
                The ultimate task management and timesheet solution for modern
                teams.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TaskFlow Pro. All rights reserved.</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default TaskManagementWebsite;
