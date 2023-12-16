import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Shipment = () => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
      const currentDate = new Date();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
  
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = months[currentDate.getMonth()];
      const dayOfMonth = currentDate.getDate();
  
      const formattedDateString = `${dayOfWeek}, ${month} ${dayOfMonth}`;
      setFormattedDate(formattedDateString);
    }, []);

    const shipmentDetails = [
      { title: 'Supplier', value: 'East coast fruits & vegetables' },
      { title: 'Shipping date', value: formattedDate },
      { title: 'Total', value: 'East coast fruits & vegetables' },
      { title: 'Category', value: 'East coast fruits & vegetables' },
      { title: 'Department', value: '300-444-678' },
      { title: 'Status', value: 'Awaiting your Approval' },
    ];

    return (
      <DetailOrderContainer>
        {shipmentDetails.map((detail, index) => (
          <React.Fragment key={index}>
            <DetailSection>
              <DetailTitle>{detail.title}</DetailTitle>
              <DetailValue>{detail.value}</DetailValue>
            </DetailSection>
            {index < shipmentDetails.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </DetailOrderContainer>
    );
};

const DetailOrderContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  border: 2px solid #868483;
  border-radius: 10px;
  padding: 12px 32px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const DetailSection = styled.div`
  /* Adjust the width as needed */
  margin-top: 20px;

  @media (max-width: 950px) {
    flex: 0 0 100%;
  }
`;

const Divider = styled.div`
  height: 80px;
  width: 2px;
  background-color: #868483;
  margin-top: 10px;

  @media (max-width: 950px) {
    display: none;
  }
`;

const DetailTitle = styled.p`
  color: grey;
  font-weight: 700;
  font-size: 18px;
`;

const DetailValue = styled.h3`
  margin-top: 10px;
`;
