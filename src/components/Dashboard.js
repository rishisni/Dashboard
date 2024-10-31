import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  height: 100vh;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MainContent = styled.div`
  flex: 3;
  display: grid;
  gap: 20px;
`;

const Header = styled.h1`
  font-size: 2em;
  color: #2f3b66;
  text-align: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 20px;
  border-radius: 12px;
  color: #2f3b66;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IncrementText = styled.div`
  font-weight: bold;
  color: #2f3b66;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  font-size: 1.1em;
  margin: 0;
`;

const CardContent = styled.div`
  font-size: 1em;
  color: #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallText = styled.small`
  color: #888;
  font-size: 0.8em;
`;

const Sidebar = styled.div`
  width: 40%;
  margin-left: 20px;
`;

const AnnouncementSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc; /* Gray border */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const AnnouncementHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Align items to the left and right */
  margin: 0;
`;

const AnnouncementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnnouncementItem = styled.li`
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  color: #555;

  &:last-child {
    border-bottom: none;
  }

  span {
    color: #888;
    font-size: 0.85em;
    margin-left: 10px;
  }
`;

const RecentActivity = styled.div`
  background-color: #010d36;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Line = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  color: #011045;
  background-color: #010d36;
`;

const RecentActivityHeader = styled.h3`
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
  background-color: #010d36;
`;

const ActivityItem = styled.div`
  margin-bottom: 10px;
`;

const ActivityTime = styled.span`
  display: block;
  font-size: 0.8em;
  color: #ccc;
`;

const ActivityDescription = styled.p`
  font-size: 0.9em;
  color: #e0e0e0;
  margin: 5px 0;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const SeeAllActivityButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;

const UpcomingScheduleContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc; /* Gray border */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ScheduleHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Align items to the left and right */
  margin: 0;
`;

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ScheduleItem = styled.li`
  margin-bottom: 10px;
  color: ${(props) => (props.priority ? '#1c1b1b' : '#333')};
  font-weight: ${(props) => (props.priority ? 'bold' : 'normal')};
  font-size: ${(props) => (props.regular ? '0.8em' : '1em')}; /* Smaller font for regular schedule */
`;

const ScheduleTime = styled.span`
  display: block;
  font-size: 0.8em;
  color: #888;
`;

const CreateScheduleButton = styled(Button)`
  background-color: white; /* White background */
  color: red; /* Red text color */
  width: 100%; /* Full width */
  padding: 10px; /* Padding for the button */
  margin-top: 10px; /* Space above the button */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Bold text */
  
  &:hover {
    background-color: #f8d7da; /* Light red background on hover */
    color: red; /* Keep text red on hover */
  }
`;


const DateDropdown = styled.select`
  margin-left: 5px; /* Spacing to separate from the header */
  padding: 5px;
  font-size: 0.4em;
`;

const PrioritySection = styled.div`
  margin-top: 15px;
  border: 1px solid #ccc; /* Gray border */
  border-radius: 5px;
  padding: 10px;
  background-color: #fcfafa;
`;

const Separator = styled.div`
  height: 1px; /* Thickness of the line */
  background-color: #ccc; /* Color of the line */
  margin: 10px 0; /* Spacing above and below the line */
`;


const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DashboardContainer>
      <Header>Dashboard</Header>

      <MainSection>
        <MainContent>
          <Row>
            <Card bgColor="#ffe4e1">
              <CardTitle>Available Position</CardTitle>
              <CardContent>
                <span>24</span> <SmallText>4 Urgently needed</SmallText>
              </CardContent>
            </Card>
            <Card bgColor="#d8e7ff">
              <CardTitle>Job Open</CardTitle>
              <CardContent>
                <span>10</span> <SmallText>4 Active hiring</SmallText>
              </CardContent>
            </Card>
            <Card bgColor="#fce1ff">
              <CardTitle>New Employees</CardTitle>
              <CardContent>
                <span>24</span> <SmallText>4 Department</SmallText>
              </CardContent>
            </Card>
          </Row>

          <Row style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Card bgColor="#e1f7d5">
              <IncrementText>+2%</IncrementText>
              <CardTitle>Total Employees</CardTitle>
              <CardContent>
                <span>216</span> <SmallText>120 Men / 96 Women</SmallText>
              </CardContent>
            </Card>
            <Card bgColor="#d5e1f7">
              <IncrementText>+5%</IncrementText>
              <CardTitle>Talent Request</CardTitle>
              <CardContent>
                <span>16</span> <SmallText>6 Men / 10 Women</SmallText>
              </CardContent>
            </Card>
          </Row>

          <AnnouncementSection>
  <AnnouncementHeader>
    Announcement
    <SmallText style={{ marginBottom: '5px', marginTop: '5px' }}>Recent Announcements</SmallText>
  </AnnouncementHeader>

  <AnnouncementList>
    <AnnouncementItem>
      Outing schedule for every department <span style={{ float: 'right' }}>5 Minutes ago</span>
    </AnnouncementItem>
    <AnnouncementItem>
      Meeting HR Department <span style={{ float: 'right' }}>Yesterday, 12:30 PM</span>
    </AnnouncementItem>
    <AnnouncementItem>
      IT Department needs two more talents <span style={{ float: 'right' }}>2 days ago</span>
    </AnnouncementItem>
  </AnnouncementList>

  {/* Line Separator */}
  <Separator />
</AnnouncementSection>


        </MainContent>

        <Sidebar>
          <RecentActivity>
            <RecentActivityHeader>Recent Activity</RecentActivityHeader>
            <ActivityItem>
              <ActivityDescription>New employee added by HR</ActivityDescription>
              <ActivityTime>10 minutes ago</ActivityTime>
            </ActivityItem>
            <ActivityItem>
              <ActivityDescription>Job posted for Developer position</ActivityDescription>
              <ActivityTime>1 hour ago</ActivityTime>
            </ActivityItem>
            <ActivityItem>
              <ActivityDescription>Employee feedback collected</ActivityDescription>
              <ActivityTime>2 hours ago</ActivityTime>
            </ActivityItem>
            <SeeAllActivityButton>See All Activity</SeeAllActivityButton>
          </RecentActivity>
          <UpcomingScheduleContainer>
            <ScheduleHeader>
              Upcoming Schedule
              <DateDropdown value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option value="">Select Date</option>
                <option value="2024-10-31">October 31, 2024</option>
                <option value="2024-11-01">November 1, 2024</option>
                <option value="2024-11-02">November 2, 2024</option>
              </DateDropdown>
            </ScheduleHeader>

            <SmallText style={{ marginBottom: '5px', marginTop: '5px' }}>Priority</SmallText>
            <PrioritySection>
              <ScheduleList>
                <ScheduleItem priority>
                  Review candidates applications
                  <i className="fas fa-ellipsis-h" style={{ float: 'right' }}></i>
                  <ScheduleTime>Today - 11:30 AM</ScheduleTime>
                </ScheduleItem>
              </ScheduleList>
            </PrioritySection>

            <SmallText style={{ marginBottom: '5px', marginTop: '5px' }}>Other</SmallText>
            <ScheduleList>
              <PrioritySection>
                <ScheduleItem regular>
                  Interview with candidates
                  <i className="fas fa-ellipsis-h" style={{ float: 'right' }}></i>
                  <ScheduleTime>Today - 10:30 AM</ScheduleTime>
                </ScheduleItem>
              </PrioritySection>
              <PrioritySection>
                <ScheduleItem regular>
                  Short meeting with product designer from IT department.
                  <i className="fas fa-ellipsis-h" style={{ float: 'right' }}></i>
                  <ScheduleTime>Today - 09:30 AM</ScheduleTime>
                </ScheduleItem>
              </PrioritySection>
            </ScheduleList>

            {/* Line Separator */}
            <Separator />

            {/* Create Schedule Button */}
            <CreateScheduleButton>
              Create a new Schedule
            </CreateScheduleButton>
          </UpcomingScheduleContainer>


        </Sidebar>
      </MainSection>
    </DashboardContainer>
  );
};

export default Dashboard;
