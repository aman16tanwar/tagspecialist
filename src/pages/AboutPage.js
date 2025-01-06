import React from 'react';

const AboutPage = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      {/* About Me Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I specialize in data analytics, tracking, and cloud-based solutions. With extensive expertise in GA4, Google Tag Manager, and third-party pixel implementations, I empower businesses to optimize their marketing performance through precise data insights.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          My skills extend to Google Cloud Platform (GCP) with a focus on BigQuery, enabling scalable and efficient data processing. I am also deeply invested in Generative AI and AI Agents, crafting solutions to automate and innovate marketing strategies.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Passionate about research and development, I stay at the forefront of the latest technologies in the marketing and analytics space, delivering customized solutions tailored to each client's unique needs.
        </p>
      </div>

      {/* Why Choose Me Section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Why Choose Me?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
          <li>Expertise in tracking and data analytics: GA4, Google Tag Manager, and third-party tracking solutions.</li>
          <li>Advanced cloud-based solutions: BigQuery and GCP for scalable data processing.</li>
          <li>Proficiency in Generative AI and AI Agents for innovative problem-solving.</li>
          <li>Proven experience with programmatic advertising and data engineering.</li>
        </ul>
      </div>

      {/* Location Section */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 text-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Based in Vancouver, Canada</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Operating from Vancouver, I provide services across North America, offering the advantage of time zone compatibility for seamless collaboration.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
