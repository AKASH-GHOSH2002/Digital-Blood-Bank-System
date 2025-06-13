import React from 'react';
import './DashboardCards.css'; 

const DashboardCards = () => {
  const cards = [
    {
      title: "Donor Management",
      subtitle: "Manage and verify blood donors.",
      icon: "fas fa-hand-holding-heart"
    },
    {
      title: "Hospital Verification",
      subtitle: "Approve and monitor hospitals.",
      icon: "fas fa-hospital"
    },
    {
      title: "Organization Partners",
      subtitle: "Collaborate with trusted groups.",
      icon: "fas fa-handshake"
    },
    {
      title: "Blood Drive Events",
      subtitle: "Create and manage donation events.",
      icon: "fas fa-calendar-alt"
    },
    {
      title: "User Support",
      subtitle: "Assist users with queries.",
      icon: "fas fa-headset"
    },
    {
      title: "Reports & Analytics",
      subtitle: "View performance and stats.",
      icon: "fas fa-chart-line"
    }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <i className={card.icon}></i>
          <h3>{card.title}</h3>
          <p>{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
