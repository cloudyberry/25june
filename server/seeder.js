Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    // create a date string
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var date = (month + "/" + day + "/" + year).toString();

    	// Super User
      Accounts.createUser({
        username: 'Kaining',
        email: 'e0201623@u.nus.edu',
        password: 'lalala',

        profile: {
        	likeScore: 3,
          dislikeScore: 0,
          year: '1',
          school:'Computing',
        }
      });

      var user0Id = Meteor.users.findOne({username: 'Kaining'})._id;

      Reviews.insert({
        reviewName: "CS1020: Data Structures and Algorithms",
        reviewPost: "Lectures are so hard to understand. tutorials are even harder. DONT EVEN BOTHER TRYING",
        semester: "AY 17/18 SEMESTER TWO",
        diff: "Hard",
        recommendation: "2",
        workload: "Low",
        steepness: "High",
        author: "Kaining",
        year: '1',
        school:'School of Computing',
        date: date,
        createdAt: new Date(),
        vetted: 1,
        likeScore: 0,
        dislikeScore: 0,
        voted: ["Kaining"],
        userId: user0Id,
      });

      Modules.insert({
        reviewName: "CS1020: Data Structures and Algorithms"
      });

      // User 1
      Accounts.createUser({
        username: 'User1',
        email: 'user1@hotmail.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '4',
          school:'Engineering',
        }
      });

      var user1Id = Meteor.users.findOne({username: 'User1'})._id;

      Reviews.insert({
        reviewName: "MA1312: Calculus with applications",
        reviewPost: "Prof makes the lectures very interesting",
        semester: "AY 17/18 SEMESTER TWO",
        diff: "Moderate",
        recommendation: "5",
        workload: "Low",
        steepness: "High",
        author: "User1",
        year: '4',
        school:'Engineering',
        date: date,
        createdAt: new Date(),
        vetted: 1,
        likeScore: 0,

        dislikeScore: 0,
        voted: ["User1"],
        userId: user1Id,
      });

      Modules.insert({
        reviewName:"MA1312: Calculus with applications"
      });
      // User 2
      Accounts.createUser({
        username: 'User2',
        email: 'user2@hotmail.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '2',
          school:'Arts and Social Sciences',
        }
      });

      var user2Id = Meteor.users.findOne({username: 'User2'})._id;

      Reviews.insert({
        reviewName: "GER1000: Quantitative reasoning",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY 17/18 SEMESTER ONE",
        diff: "Hard",
        recommendation: "3",
        workload: "Low",
        steepness: "High",
        author: "User2",
        year: '2',
        school:'Arts and Social Sciences',
        date: date,
        createdAt: new Date(),
        vetted: 0,
        likeScore: 0,

        dislikeScore: 0,
        voted: ["User2"],
        userId: user2Id,
      });

      Accounts.createUser({
        username: 'kaikai',
        email: 'e0201624@u.nus.edu',
        password: 'kaikai',

        profile: {
        	likeScore: 5,
          dislikeScore: 2,
          year: '2',
          school:'Computing',
        }
      });

      var user10Id = Meteor.users.findOne({username: 'kaikai'})._id;

      Reviews.insert({
        reviewName: "CS1020: Data Structures and Algorithms",
        reviewPost: "Lectures are so hard to understand. tutorials are even harder. DONT EVEN BOTHER TRYING",
        semester: "AY 17/18 SEMESTER TWO",
        diff: "Hard",
        recommendation: "2",
        workload: "Low",
        steepness: "High",
        author: "Kaikai",
        year: '2',
        school:'Dentistry',
        date: date,
        createdAt: new Date(),
        vetted: 0,
        likeScore: 0,
        dislikeScore: 0,
        voted: ["kaikai"],
        userId: user10Id,
      });


      // User 3
      Accounts.createUser({
        username: 'pampam',
        email: 'berrycool@hotmail.com',
        password: 'pampam',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '2',
          school:'Computing',
        }
      });

      var user3Id = Meteor.users.findOne({username: 'pampam'})._id;

      Reviews.insert({
        reviewName: "CS1231: Discrete Structures",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY 17/18 SEMESTER ONE",
        diff: "Hard",
        recommendation: "3",
        workload: "Low",
        steepness: "High",
        author: "pampam",
        year: '2',
        school:'Computing',
        date: date,
        createdAt: new Date(),
        vetted: 0,
        likeScore: 0,
        dislikeScore: 0,
        voted: ["pampam"],
        userId: user3Id,
      });

      // User 4
      Accounts.createUser({
        username: 'User4',
        email: 'user4@hotmail.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '1',
          school:'Science',
        }
      });

      var user4Id = Meteor.users.findOne({username: 'User4'})._id;

      Reviews.insert({
        reviewName: "IS1103: Business Communications",
        reviewPost: "You can do your project during lecture time",
        semester: "AY 17/18 SEMESTER ONE",
        diff: "Moderate",
        recommendation: "4",
        workload: "Low",
        steepness: "High",
        author: "User4",
        year: '1',
        school:'Science',
        date: date,
        createdAt: new Date(),
        vetted: 1,
        likeScore: 0,
        dislikeScore: 0,
        voted: ["User4"],
        userId: user4Id,
      });


      // User 5
      Accounts.createUser({
        username: 'User5',
        email: 'user5@hotmail.com',
        password: 'password',

        profile: {
          likeScore: 0,
          dislikeScore: 0,
          year: '3',
          school:'Design & Environment',
        }
      });

      var user5Id = Meteor.users.findOne({username: 'User5'})._id;

      Reviews.insert({
       reviewName: "CFG1010 Roots and Wings",
        reviewPost: "Tutorials are extremely tough",
        semester: "AY 17/18 SEMESTER ONE",
        diff: "Low",
        recommendation: "3",
        workload: "low",
        steepness: "High",
        author: "User5",
        year: '3',
        school:'Design & Environment',
        date: date,
        createdAt: new Date(),
        vetted: 1,
        likeScore: 0,
        dislikeScore: 0,
        voted: ["User5"],
        userId: user5Id,
      });

      // Admin
            Accounts.createUser({
              username: 'Admin',
              email: 'admin@hotmail.com',
              password: 'kainingandpam',
              isDefault: 'true',

            /*  profile: {
                likeScore: 0,
                dislikeScore: 0,
                year: '1',
                school:'Faculty of Science',
              } */
            });

            var adminId = Meteor.users.findOne({username: 'Admin'})._id;
            Meteor.users.update(adminId, {$set:{role:'admin'}});

      console.log("  ");
      console.log("User Database Seeded! Now get to work! :)");
      console.log("Reviews Database Seeded! Isn't that nice?! :P");

  }

});
