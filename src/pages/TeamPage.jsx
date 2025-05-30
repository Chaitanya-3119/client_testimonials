import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Krishna Samanth",
      role: "Founder & CEO",
      description: "Serial Entrepreneur, over 18 years of experience managing technology business.",
      linkedin: "linkedin.com/in/krishna-samanth-bb0a46b5/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Durga Prasad",
      role: "COO & Co-Founder",
      description: "Over 30 years of experience in Global Software\\Delivery, Vision, Strategy and Operational Excellence.",
      linkedin: "linkedin.com/in/durga-prasad-a-632ab61a1/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Sanjay Chatterjee",
      role: "CHRO & Co-Founder - Dubai",
      description: "30 years in Global HR functions for IT (Products / Projects) and Retail sectors.",
      linkedin: "linkedin.com/in/sc007/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Vamshree",
      role: "CTO & Managing Partner - Australia",
      description: "20 years in IT Development and Enterprise Delivery across Finance, Banking, Telecom, and Healthcare.",
      linkedin: "linkedin.com/in/vamshree/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Sreeni Raju",
      role: "Head – ERP Software Solutions & Delivery - USA",
      description: "22 Years of experience in core HR, global ERP implementations and consulting in some of the global fortune 500 companies.",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Nishant Seth",
      role: "Practice Head- Data, AI/ML and Analytics",
      description: "Data Analytics consultant with 25+ years in AI/ML, data lakes, and analytics across industries.",
      linkedin: "linkedin.com/in/nishantseth/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Kishore Seetharam",
      role: "Head - Talent Acquisition",
      description: "Over 17 Years of Experience in Technical Recruitment.",
      linkedin: "linkedin.com/in/seetharam-kishore-25a9881a/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Dr. Mehala N",
      role: "Advisor",
      description: "20+ years in academia, teaching, content development, and research in Data Science & Machine Intelligence.",
      linkedin: "linkedin.com/in/dr-mehala-n-26290220/",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Vinesh Singh",
      role: "Head - L&D",
      description: "Over 35 years in Finance, Accounting, strategic planning, Budgeting, Joint ventures and Vender management",
      image: "https://placehold.co/400x400"
    },
    {
      name: "Sai Krishna",
      role: "Head - Product & Innovation",
      description: "Over 13+ years of experience managing research and development in IoT",
      image: "https://placehold.co/400x400"
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ background: 'linear-gradient(180deg, #001233 0%, #001845 100%)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 style={{ color: '#ffffff', fontSize: '2.8rem', fontWeight: '600', marginBottom: '1.5rem' }}>
            Our Leadership
          </h1>
          <p style={{ 
            color: '#ffffff', 
            fontSize: '1.3rem', 
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Since its inception, Makonis has thrived under exceptional leadership — from our strong, engaged, and independent board members to our experienced and globally distributed senior management team.
          </p>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div 
                className="card h-100" 
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={member.image} 
                  className="card-img-top" 
                  alt={member.name}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    filter: 'grayscale(0.2) contrast(1.1)'
                  }}
                />
                <div className="card-body p-4">
                  <div>
                    <h5 className="card-title mb-3" style={{ color: '#00a0e9', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.5px' }}>
                      {member.name}
                    </h5>
                    <h6 className="card-subtitle mb-3" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '600', opacity: '0.95' }}>
                      {member.role}
                    </h6>
                    <p className="card-text mb-4" style={{ color: '#ffffff', opacity: '0.85', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: '400' }}>
                      {member.description}
                    </p>
                  </div>
                  {member.linkedin && (
                    <div className="mt-auto">
                      <a 
                        href={`https://${member.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center"
                        style={{ 
                          color: '#00a0e9', 
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          transition: 'all 0.3s ease',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          background: 'rgba(0, 160, 233, 0.1)',
                          border: '1px solid rgba(0, 160, 233, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 160, 233, 0.2)';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 160, 233, 0.1)';
                          e.currentTarget.style.color = '#00a0e9';
                        }}
                      >
                        <FaLinkedin className="me-2" style={{ fontSize: '1.4rem' }} />
                        <span style={{ fontSize: '1.2rem' }}>LinkedIn Profile</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
