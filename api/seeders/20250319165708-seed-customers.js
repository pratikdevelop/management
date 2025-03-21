'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [
      { name: 'John Smith', email: 'johnsmith@yopmail.com', phone: '617-555-0101', address: '123 Main St', city: 'Boston', state: 'MA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Sarah Johnson', email: 'sarahjohnson@yopmail.com', phone: '312-555-0202', address: '456 Oak Ave', city: 'Chicago', state: 'IL', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Michael Brown', email: 'michaelbrown@yopmail.com', phone: '206-555-0303', address: '789 Pine Rd', city: 'Seattle', state: 'WA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Emily Davis', email: 'emilydavis@yopmail.com', phone: '512-555-0404', address: '321 Elm St', city: 'Austin', state: 'TX', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'David Wilson', email: 'davidwilson@yopmail.com', phone: '303-555-0505', address: '654 Birch Ln', city: 'Denver', state: 'CO', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Lisa Anderson', email: 'lisaanderson@yopmail.com', phone: '415-555-0606', address: '987 Cedar Dr', city: 'San Francisco', state: 'CA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'James Taylor', email: 'jamestaylor@yopmail.com', phone: '212-555-0707', address: '147 Maple Way', city: 'New York', state: 'NY', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Rachel Martinez', email: 'rachelmartinez@yopmail.com', phone: '305-555-0808', address: '258 Willow Ct', city: 'Miami', state: 'FL', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Thomas Lee', email: 'thomaslee@yopmail.com', phone: '713-555-0909', address: '369 Spruce St', city: 'Houston', state: 'TX', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Kelly White', email: 'kellywhite@yopmail.com', phone: '702-555-1010', address: '741 Aspen Rd', city: 'Las Vegas', state: 'NV', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Robert Garcia', email: 'robertgarcia@yopmail.com', phone: '503-555-1111', address: '852 Laurel Ave', city: 'Portland', state: 'OR', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Michelle Chen', email: 'michellechen@yopmail.com', phone: '404-555-1212', address: '963 Magnolia Ln', city: 'Atlanta', state: 'GA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'William Clark', email: 'williamclark@yopmail.com', phone: '215-555-1313', address: '174 Chestnut St', city: 'Philadelphia', state: 'PA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Jennifer Lopez', email: 'jenniferlopez@yopmail.com', phone: '602-555-1414', address: '285 Sycamore Dr', city: 'Phoenix', state: 'AZ', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Daniel Kim', email: 'danielkim@yopmail.com', phone: '858-555-1515', address: '396 Palm Way', city: 'San Diego', state: 'CA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Amanda Parker', email: 'amandaparker@yopmail.com', phone: '313-555-1616', address: '507 Linden Rd', city: 'Detroit', state: 'MI', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Christopher Hill', email: 'christopherhill@yopmail.com', phone: '904-555-1717', address: '618 Poplar St', city: 'Jacksonville', state: 'FL', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Stephanie Moore', email: 'stephaniemoore@yopmail.com', phone: '317-555-1818', address: '729 Hickory Ln', city: 'Indianapolis', state: 'IN', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Brian Turner', email: 'brianturner@yopmail.com', phone: '214-555-1919', address: '831 Walnut Ave', city: 'Dallas', state: 'TX', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Nicole Adams', email: 'nicoleadams@yopmail.com', phone: '704-555-2020', address: '942 Ash St', city: 'Charlotte', state: 'NC', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Kevin Patel', email: 'kevinpatel@yopmail.com', phone: '614-555-2121', address: '153 Beech Dr', city: 'Columbus', state: 'OH', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Laura Rodriguez', email: 'laurarodriguez@yopmail.com', phone: '901-555-2222', address: '264 Cypress Ct', city: 'Memphis', state: 'TN', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Peter Nguyen', email: 'peternguyen@yopmail.com', phone: '505-555-2323', address: '375 Fir Rd', city: 'Albuquerque', state: 'NM', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Angela Brooks', email: 'angelabrooks@yopmail.com', phone: '816-555-2424', address: '486 Hazel Way', city: 'Kansas City', state: 'MO', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Mark Evans', email: 'markevans@yopmail.com', phone: '405-555-2525', address: '597 Juniper St', city: 'Oklahoma City', state: 'OK', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Rebecca Scott', email: 'rebeccascott@yopmail.com', phone: '801-555-2626', address: '708 Sage Ln', city: 'Salt Lake City', state: 'UT', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Jason Phillips', email: 'jasonphillips@yopmail.com', phone: '608-555-2727', address: '819 Thyme Ave', city: 'Madison', state: 'WI', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Christine Baker', email: 'christinebaker@yopmail.com', phone: '208-555-2828', address: '921 Alder Dr', city: 'Boise', state: 'ID', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Gregory Young', email: 'gregoryyoung@yopmail.com', phone: '701-555-2929', address: '132 Basil St', city: 'Fargo', state: 'ND', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Heather Green', email: 'heathergreen@yopmail.com', phone: '307-555-3030', address: '243 Cedar Rd', city: 'Cheyenne', state: 'WY', createdAt: '2025-03-19 12:50:00', updatedAt: '2025-03-19 12:50:00' },
      { name: 'Timothy Ward', email: 'timothyward@yopmail.com', phone: '808-555-3131', address: '354 Elm Way', city: 'Honolulu', state: 'HI', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Cynthia King', email: 'cynthiaking@yopmail.com', phone: '907-555-3232', address: '465 Oak Ct', city: 'Anchorage', state: 'AK', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Patrick Murphy', email: 'patrickmurphy@yopmail.com', phone: '406-555-3333', address: '576 Pine Ln', city: 'Billings', state: 'MT', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Katherine Ross', email: 'katherineross@yopmail.com', phone: '605-555-3434', address: '687 Spruce Dr', city: 'Sioux Falls', state: 'SD', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Stephen Cox', email: 'stephencox@yopmail.com', phone: '304-555-3535', address: '798 Willow St', city: 'Charleston', state: 'WV', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Elizabeth Gray', email: 'elizabethgray@yopmail.com', phone: '601-555-3636', address: '819 Maple Ave', city: 'Jackson', state: 'MS', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Anthony Perez', email: 'anthonyperez@yopmail.com', phone: '501-555-3737', address: '921 Birch Rd', city: 'Little Rock', state: 'AR', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Diana Hughes', email: 'dianahughes@yopmail.com', phone: '225-555-3838', address: '132 Laurel Way', city: 'Baton Rouge', state: 'LA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Jonathan Price', email: 'jonathanprice@yopmail.com', phone: '803-555-3939', address: '243 Cedar Ct', city: 'Columbia', state: 'SC', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Melissa Foster', email: 'melissafoster@yopmail.com', phone: '402-555-4040', address: '354 Elm St', city: 'Omaha', state: 'NE', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Charles Reed', email: 'charlesreed@yopmail.com', phone: '502-555-4141', address: '465 Oak Dr', city: 'Louisville', state: 'KY', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Tiffany Bell', email: 'tiffanybell@yopmail.com', phone: '615-555-4242', address: '576 Pine Ln', city: 'Nashville', state: 'TN', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Ryan Carter', email: 'ryancarter@yopmail.com', phone: '205-555-4343', address: '687 Spruce Way', city: 'Birmingham', state: 'AL', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Erin Mitchell', email: 'erinmitchell@yopmail.com', phone: '410-555-4444', address: '798 Willow Rd', city: 'Baltimore', state: 'MD', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Scott Bennett', email: 'scottbennett@yopmail.com', phone: '804-555-4545', address: '819 Maple St', city: 'Richmond', state: 'VA', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Brenda Watson', email: 'brendawatson@yopmail.com', phone: '918-555-4646', address: '921 Birch Ave', city: 'Tulsa', state: 'OK', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Andrew Coleman', email: 'andrewcoleman@yopmail.com', phone: '316-555-4747', address: '132 Laurel Dr', city: 'Wichita', state: 'KS', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Holly Stewart', email: 'hollystewart@yopmail.com', phone: '573-555-4848', address: '243 Cedar Ln', city: 'Columbia', state: 'MO', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'George Diaz', email: 'georgediaz@yopmail.com', phone: '859-555-4949', address: '354 Elm Way', city: 'Lexington', state: 'KY', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' },
      { name: 'Megan Thompson', email: 'meganthompson@yopmail.com', phone: '217-555-5050', address: '465 Oak Ct', city: 'Springfield', state: 'IL', createdAt: '2025-03-19 12:35:00', updatedAt: '2025-03-19 12:35:00' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};